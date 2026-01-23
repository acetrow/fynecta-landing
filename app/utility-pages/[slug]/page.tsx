import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "@/lib/webflow";
import { WebflowReinit } from "@/app/components/webflow-reinit";
import { LottieInit } from "@/app/components/lottie-init";
import { notFound } from "next/navigation";

interface UtilityPageProps {
  params: Promise<{ slug: string }>;
}

const UTILITY_PAGE_SLUGS = ["changelog", "license", "style-guide"] as const;

export async function generateStaticParams() {
  return UTILITY_PAGE_SLUGS.map((slug) => ({ slug }));
}

export default async function UtilityPage({ params }: UtilityPageProps) {
  const { slug } = await params;
  try {
    const fullHtml = await loadOriginalHtml(`utility-pages/${slug}.html`);
    const body = extractBodyInnerHtml(fullHtml);

    return (
      <>
        <main dangerouslySetInnerHTML={{ __html: normalizeWebflowBodyHtml(body) }} />
        <WebflowReinit />
        <LottieInit />
      </>
    );
  } catch (error) {
    console.error(`Failed to load utility-pages/${slug}.html:`, error);
    notFound();
  }
}




