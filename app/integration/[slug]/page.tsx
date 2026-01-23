import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "@/lib/webflow";
import { WebflowReinit } from "@/app/components/webflow-reinit";
import { LottieInit } from "@/app/components/lottie-init";
import { notFound } from "next/navigation";

interface IntegrationPageProps {
  params: Promise<{ slug: string }>;
}

const INTEGRATION_SLUGS = [
  "authshield",
  "datafort",
  "logsync",
  "phishblocker",
  "secureflow",
  "threatwatch",
] as const;

export async function generateStaticParams() {
  return INTEGRATION_SLUGS.map((slug) => ({ slug }));
}

export default async function IntegrationPage({ params }: IntegrationPageProps) {
  const { slug } = await params;
  try {
    const fullHtml = await loadOriginalHtml(`integration/${slug}.html`);
    const body = extractBodyInnerHtml(fullHtml);

    return (
      <>
        <main dangerouslySetInnerHTML={{ __html: normalizeWebflowBodyHtml(body) }} />
        <WebflowReinit />
        <LottieInit />
      </>
    );
  } catch (error) {
    console.error(`Failed to load integration/${slug}.html:`, error);
    notFound();
  }
}




