import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "@/lib/webflow";
import { WebflowReinit } from "@/app/components/webflow-reinit";
import { LottieInit } from "@/app/components/lottie-init";

export default async function BlogPage() {
  const fullHtml = await loadOriginalHtml("blog.html");
  const body = extractBodyInnerHtml(fullHtml);
  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: normalizeWebflowBodyHtml(body) }} />
      <WebflowReinit />
      <LottieInit />
    </>
  );
}


