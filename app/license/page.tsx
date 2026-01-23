import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "@/lib/webflow";
import { WebflowReinit } from "@/app/components/webflow-reinit";
import { LottieInit } from "@/app/components/lottie-init";

export default async function LicensePage() {
  const fullHtml = await loadOriginalHtml("utility-pages/license.html");
  const body = extractBodyInnerHtml(fullHtml);
  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: normalizeWebflowBodyHtml(body) }} />
      <WebflowReinit />
      <LottieInit />
    </>
  );
}

