import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "../lib/webflow";

export default async function NotFound() {
  const fullHtml = await loadOriginalHtml("404.html");
  const body = extractBodyInnerHtml(fullHtml);
  const normalized = normalizeWebflowBodyHtml(body);
  return <main dangerouslySetInnerHTML={{ __html: normalized }} />;
}

