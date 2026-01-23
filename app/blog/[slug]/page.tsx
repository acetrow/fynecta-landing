import { extractBodyInnerHtml, loadOriginalHtml, normalizeWebflowBodyHtml } from "@/lib/webflow";
import { WebflowReinit } from "@/app/components/webflow-reinit";
import { LottieInit } from "@/app/components/lottie-init";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const BLOG_SLUGS = [
  "behind-the-build-our-ai-journey",
  "creating-engaging-educational-tools",
  "design-clarity-starts-with-empathy",
  "designing-for-student-engagement",
  "designing-for-student-engagement-copy",
  "designing-for-the-voice-era",
  "from-ui-to-ux-writing-for-voice",
  "interactive-design-for-better-learning",
  "tiny-ux-tweaks-big-difference",
] as const;

export async function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  try {
    const fullHtml = await loadOriginalHtml(`blog/${slug}.html`);
    const body = extractBodyInnerHtml(fullHtml);

    return (
      <>
        <main dangerouslySetInnerHTML={{ __html: normalizeWebflowBodyHtml(body) }} />
        <WebflowReinit />
        <LottieInit />
      </>
    );
  } catch (error) {
    console.error(`Failed to load blog/${slug}.html:`, error);
    notFound();
  }
}




