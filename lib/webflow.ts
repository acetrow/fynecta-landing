import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { existsSync } from "node:fs";

const ROUTE_MAP: Record<string, string> = {
  "index.html": "/",
  "about.html": "/about",
  "blog.html": "/blog",
  "career.html": "/career",
  "checkout.html": "/checkout",
  "coming-soon.html": "/coming-soon",
  "contact.html": "/contact",
  "features.html": "/features",
  "integration.html": "/integration",
  "pricing.html": "/pricing",
  "401.html": "/401",
  "404.html": "/404",
};

export const WEBFLOW_ALLOWED_SLUGS = [
  "about",
  "blog",
  "career",
  "checkout",
  "coming-soon",
  "contact",
  "features",
  "integration",
  "pricing",
] as const;

export type WebflowSlug = (typeof WEBFLOW_ALLOWED_SLUGS)[number];

export async function loadOriginalHtml(filename: string): Promise<string> {
  const filePath = path.resolve(process.cwd(), "original-html", filename);
  
  // Check if file exists before trying to read
  if (!existsSync(filePath)) {
    // Try alternative path resolution
    const altPath = path.join(process.cwd(), "original-html", filename);
    if (existsSync(altPath)) {
      return await readFile(altPath, "utf8");
    }
    
    throw new Error(
      `File not found: ${filePath}\n` +
        `Alternative path tried: ${altPath}\n` +
        `Looking for: original-html/${filename}\n` +
        `Current working directory: ${process.cwd()}\n` +
        `File path resolved: ${filePath}`
    );
  }
  
  try {
    return await readFile(filePath, "utf8");
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      throw new Error(
        `File not found: ${filePath}\n` +
          `Looking for: original-html/${filename}\n` +
          `Current working directory: ${process.cwd()}`
      );
    }
    throw error;
  }
}

export function extractBodyInnerHtml(fullHtml: string): string {
  const bodyMatch = fullHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return fullHtml;
  return bodyMatch[1] ?? "";
}

function rewriteAssetUrls(html: string): string {
  let out = html;

  // Step 1: Handle src/href/data-src attributes with full CDN URLs
  // Match with optional whitespace around the equals sign
  out = out.replace(
    /(src|href|data-src)\s*=\s*(["'])https:\/\/cdn\.prod\.website-files\.com\/[0-9a-f]{24}\//gi,
    "$1=$2/images/",
  );

  // Step 2: Handle assets/cdn.prod.website-files.com/... paths in attributes
  // These need to be converted to /images/ and the site ID folder removed
  // Match with optional whitespace around the equals sign
  out = out.replace(
    /(src|href|data-src)\s*=\s*(["'])assets\/cdn\.prod\.website-files\.com\/[0-9a-f]{24}\//gi,
    "$1=$2/images/",
  );

  // Step 3: Handle any remaining CDN URLs (standalone, not in attributes)
  out = out.replace(
    /https:\/\/cdn\.prod\.website-files\.com\/[0-9a-f]{24}\//gi,
    "/images/",
  );

  // Step 4: Handle url() patterns with CDN URLs
  out = out.replace(
    /url\(\s*["']?https:\/\/cdn\.prod\.website-files\.com\/[0-9a-f]{24}\//gi,
    "url(/images/",
  );
  out = out.replace(
    /url\(assets\/cdn\.prod\.website-files\.com\/[0-9a-f]{24}\//gi,
    "url(/images/",
  );

  // Step 5: Handle simple assets/ paths (fallback - paths that don't have cdn.prod.website-files.com)
  out = out
    .replaceAll('src="assets/', 'src="/images/')
    .replaceAll("src='assets/", "src='/images/")
    .replaceAll('href="assets/', 'href="/images/')
    .replaceAll("href='assets/", "href='/images/")
    .replaceAll('data-src="assets/', 'data-src="/images/')
    .replaceAll("data-src='assets/", "data-src='/images/")
    .replaceAll("url(assets/", "url(/images/");

  // Step 6: Clean up any remaining nested paths
  out = out.replace(
    /\/images\/cdn\.prod\.website-files\.com\/[0-9a-f]{24}\//gi,
    "/images/",
  );
  out = out.replace(/\/images\/[0-9a-f]{24}\//gi, "/images/");

  // Step 7: Remove srcset attributes (responsive image variants don't exist locally)
  // This prevents 404s for -p-500.webp, -p-1080.webp, etc.
  out = out.replace(/\s+srcset=["'][^"']*["']/gi, "");
  out = out.replace(/\s+srcset=["'][^"']*["']/gi, "");

  // Step 8: Handle URL encoding for filenames with literal %20
  // Files in /public/images/ may have literal "%20" in their names.
  // If HTML already has "%2520", leave it (browser will decode to "%20").
  // If HTML has "%20", encode to "%2520" so browser decodes to "%20".
  // If HTML has no encoding, leave as-is.
  out = out.replace(
    /(src|href|data-src)=(["'])(\/images\/[^"']+?)\2/gi,
    (match, attr, quote, path) => {
      // Already has "%25xx" (double-encoded) → leave as-is
      if (/%25[0-9a-f]{2}/i.test(path)) {
        return `${attr}=${quote}${path}${quote}`;
      }
      // Has "%20" (single-encoded) → encode to "%2520" so browser decodes to "%20"
      if (/%20/i.test(path)) {
        return `${attr}=${quote}${path.replaceAll("%20", "%2520")}${quote}`;
      }
      // No encoding → leave as-is
      return match;
    },
  );

  // Handle url() in CSS
  out = out.replace(/url\(["']?(\/images\/[^"')]+?)["']?\)/gi, (match, path) => {
    if (/%25[0-9a-f]{2}/i.test(path)) {
      return `url(${path})`;
    }
    if (/%20/i.test(path)) {
      return `url(${path.replaceAll("%20", "%2520")})`;
    }
    return match;
  });

  // Step 9: Fix any paths that are missing /images/ prefix but look like image paths
  // This catches cases where paths might have been incorrectly processed
  // Only match if it's a Webflow-style filename (24-char hex ID + underscore + filename)
  out = out.replace(
    /(src|href|data-src)=(["'])([0-9a-f]{24}_[^"']+\.(webp|avif|svg|png|jpg|jpeg))["']/gi,
    (match, attr, quote, filename) => {
      // Only fix if it doesn't already start with /, http, or images/
      if (
        !filename.startsWith("/") &&
        !filename.startsWith("http") &&
        !filename.startsWith("images/")
      ) {
        return `${attr}=${quote}/images/${filename}${quote}`;
      }
      return match;
    },
  );

  return out;
}

function rewriteHtmlLinks(html: string): string {
  return html.replace(/href=(["'])([^"']+)\1/gi, (m, quote, href: string) => {
    const lower = href.toLowerCase();
    if (
      lower.startsWith("http://") ||
      lower.startsWith("https://") ||
      lower.startsWith("mailto:") ||
      lower.startsWith("tel:") ||
      lower.startsWith("javascript:") ||
      lower.includes("assets/") ||
      lower.endsWith(".css") ||
      lower.endsWith(".js")
    ) {
      return m;
    }
    if (href.startsWith("#")) return m;

    // Handle relative paths like "../index.html", "../../coming-soon.html"
    // Strip all "../" prefixes
    let cleanHref = href.replace(/^(\.\.\/)+/i, "");
    
    // Collection / inner pages like:
    // - "blog/design-clarity-starts-with-empathy.html"  -> "/blog/design-clarity-starts-with-empathy"
    // - "integration/logsync.html"                      -> "/integration/logsync"
    // - "product/starter.html"                          -> "/product/starter"
    // - "utility-pages/style-guide.html"                -> "/utility-pages/style-guide"
    const collectionMatch = cleanHref.match(
      /^(blog|integration|product|utility-pages)\/([a-z0-9-]+)\.html$/i,
    );
    if (collectionMatch) {
      const section = collectionMatch[1]!;
      const slug = collectionMatch[2]!;
      return `href=${quote}/${section}/${slug}${quote}`;
    }

    // Check ROUTE_MAP first (for exact matches)
    if (ROUTE_MAP[cleanHref]) {
      return `href=${quote}${ROUTE_MAP[cleanHref]}${quote}`;
    }
    
    // Handle .html files - remove extension and convert to route
    const htmlFile = cleanHref.match(/^([a-z0-9-]+)\.html$/i);
    if (htmlFile) {
      const name = htmlFile[1]!;
      // index.html -> /
      if (name === "index") {
        return `href=${quote}/${quote}`;
      }
      return `href=${quote}/${name}${quote}`;
    }
    
    return m;
  });
}

function stripBottomWebflowScripts(html: string): string {
  return html
    .replace(/<script[^>]*jquery-3\.5\.1[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<script[^>]*webflow\.[^>]*>[\s\S]*?<\/script>/gi, "");
}

export function normalizeWebflowBodyHtml(bodyInnerHtml: string): string {
  let html = bodyInnerHtml;
  html = stripBottomWebflowScripts(html);
  html = rewriteAssetUrls(html);
  html = rewriteHtmlLinks(html);
  return html;
}

