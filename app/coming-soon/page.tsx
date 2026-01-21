import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "@/lib/webflow";

export default async function ComingSoonPage() {
  const fullHtml = await loadOriginalHtml("coming-soon.html");
  const body = extractBodyInnerHtml(fullHtml);
  return <main dangerouslySetInnerHTML={{ __html: normalizeWebflowBodyHtml(body) }} />;
}


