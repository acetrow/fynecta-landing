import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "@/lib/webflow";

export default async function Page401() {
  const fullHtml = await loadOriginalHtml("401.html");
  const body = extractBodyInnerHtml(fullHtml);
  const normalized = normalizeWebflowBodyHtml(body);
  return <main dangerouslySetInnerHTML={{ __html: normalized }} />;
}

