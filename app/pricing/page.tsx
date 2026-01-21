import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "@/lib/webflow";

export default async function PricingPage() {
  const fullHtml = await loadOriginalHtml("pricing.html");
  const body = extractBodyInnerHtml(fullHtml);
  return <main dangerouslySetInnerHTML={{ __html: normalizeWebflowBodyHtml(body) }} />;
}


