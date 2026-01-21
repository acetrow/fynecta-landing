import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "@/lib/webflow";

export default async function ContactPage() {
  const fullHtml = await loadOriginalHtml("contact.html");
  const body = extractBodyInnerHtml(fullHtml);
  return <main dangerouslySetInnerHTML={{ __html: normalizeWebflowBodyHtml(body) }} />;
}


