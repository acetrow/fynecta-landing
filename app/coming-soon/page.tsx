import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "@/lib/webflow";
import { WebflowReinit } from "@/app/components/webflow-reinit";
import { LottieInit } from "@/app/components/lottie-init";

export default async function ComingSoonPage() {
  const fullHtml = await loadOriginalHtml("coming-soon.html");
  const body = extractBodyInnerHtml(fullHtml);
  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: normalizeWebflowBodyHtml(body) }} />
      <WebflowReinit />
      <LottieInit />
    </>
  );
}


