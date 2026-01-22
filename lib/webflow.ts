import { readFile } from "node:fs/promises";
import path from "node:path";

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
  const filePath = path.join(process.cwd(), "original-html", filename);
  return await readFile(filePath, "utf8");
}

export function extractBodyInnerHtml(fullHtml: string): string {
  const bodyMatch = fullHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return fullHtml;
  return bodyMatch[1] ?? "";
}

function rewriteAssetUrls(html: string): string {
  let out = html;

  // Step 1: Handle direct CDN URLs (https://cdn.prod.website-files.com/...)
  out = out.replace(
    /https:\/\/cdn\.prod\.website-files\.com\/[0-9a-f]{24}\//gi,
    "/images/",
  );
  out = out.replace(
    /url\(\s*["']?https:\/\/cdn\.prod\.website-files\.com\/[0-9a-f]{24}\//gi,
    "url(/images/",
  );

  // Step 2: Handle assets/cdn.prod.website-files.com/... paths
  // These need to be converted to /images/ and the site ID folder removed
  out = out.replace(
    /(src|href|data-src)=(["'])assets\/cdn\.prod\.website-files\.com\/[0-9a-f]{24}\//gi,
    "$1=$2/images/",
  );
  out = out.replace(
    /url\(assets\/cdn\.prod\.website-files\.com\/[0-9a-f]{24}\//gi,
    "url(/images/",
  );

  // Step 3: Handle simple assets/ paths (fallback)
  out = out
    .replaceAll('src="assets/', 'src="/images/')
    .replaceAll("src='assets/", "src='/images/")
    .replaceAll('href="assets/', 'href="/images/')
    .replaceAll("href='assets/", "href='/images/")
    .replaceAll('data-src="assets/', 'data-src="/images/')
    .replaceAll("data-src='assets/", "data-src='/images/")
    .replaceAll("url(assets/", "url(/images/");

  // Step 4: Clean up any remaining nested paths
  out = out.replace(
    /\/images\/cdn\.prod\.website-files\.com\/[0-9a-f]{24}\//gi,
    "/images/",
  );
  out = out.replace(/\/images\/[0-9a-f]{24}\//gi, "/images/");

  // Step 5: Remove srcset attributes (responsive image variants don't exist locally)
  // This prevents 404s for -p-500.webp, -p-1080.webp, etc.
  out = out.replace(/\s+srcset=["'][^"']*["']/gi, "");
  out = out.replace(/\s+srcset=["'][^"']*["']/gi, "");

  // Step 6: Handle URL encoding for filenames with literal %20
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

  // Step 7: Fix any paths that are missing /images/ prefix but look like image paths
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
    if (ROUTE_MAP[href]) {
      return `href=${quote}${ROUTE_MAP[href]}${quote}`;
    }
    const htmlFile = href.match(/^([a-z0-9-]+)\.html$/i);
    if (htmlFile) {
      const name = htmlFile[1]!;
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

