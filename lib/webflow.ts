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
  out = out
    .replaceAll('src="assets/', 'src="/images/')
    .replaceAll("src='assets/", "src='/images/")
    .replaceAll('href="assets/', 'href="/images/')
    .replaceAll("href='assets/", "href='/images/")
    .replaceAll("url(assets/", "url(/images/");

  out = out.replace(
    /https:\/\/cdn\.prod\.website-files\.com\/[0-9a-f]{24}\//gi,
    "/images/",
  );
  out = out.replace(
    /\/images\/cdn\.prod\.website-files\.com\/[0-9a-f]{24}\//gi,
    "/images/",
  );
  out = out.replace(/\/images\/[0-9a-f]{24}\//gi, "/images/");
  out = out.replace(
    /url\(\s*["']?https:\/\/cdn\.prod\.website-files\.com\/[0-9a-f]{24}\//gi,
    "url(/images/",
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

