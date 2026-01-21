import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "@/lib/webflow";

export default async function BlogPage() {
  const fullHtml = await loadOriginalHtml("blog.html");
  const body = extractBodyInnerHtml(fullHtml);
  return <main dangerouslySetInnerHTML={{ __html: normalizeWebflowBodyHtml(body) }} />;
}


