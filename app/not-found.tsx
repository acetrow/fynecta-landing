import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "../lib/webflow";
import { WebflowReinit } from "@/app/components/webflow-reinit";
import { LottieInit } from "@/app/components/lottie-init";

export default async function NotFound() {
  const fullHtml = await loadOriginalHtml("404.html");
  const body = extractBodyInnerHtml(fullHtml);
  const normalized = normalizeWebflowBodyHtml(body);
  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: normalized }} />
      <WebflowReinit />
      <LottieInit />
    </>
  );
}

