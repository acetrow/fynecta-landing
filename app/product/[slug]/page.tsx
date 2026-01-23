import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "@/lib/webflow";
import { WebflowReinit } from "@/app/components/webflow-reinit";
import { LottieInit } from "@/app/components/lottie-init";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const PRODUCT_SLUGS = ["basic", "pro", "starter"] as const;

export async function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  try {
    const fullHtml = await loadOriginalHtml(`product/${slug}.html`);
    const body = extractBodyInnerHtml(fullHtml);

    return (
      <>
        <main dangerouslySetInnerHTML={{ __html: normalizeWebflowBodyHtml(body) }} />
        <WebflowReinit />
        <LottieInit />
      </>
    );
  } catch (error) {
    console.error(`Failed to load product/${slug}.html:`, error);
    notFound();
  }
}




