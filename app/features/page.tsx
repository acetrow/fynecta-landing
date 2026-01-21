import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "@/lib/webflow";

export default async function FeaturesPage() {
  const fullHtml = await loadOriginalHtml("features.html");
  const body = extractBodyInnerHtml(fullHtml);
  return <main dangerouslySetInnerHTML={{ __html: normalizeWebflowBodyHtml(body) }} />;
}


