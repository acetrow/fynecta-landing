import { notFound } from "next/navigation";

import {
  extractBodyInnerHtml,
  loadOriginalHtml,
  normalizeWebflowBodyHtml,
  WEBFLOW_ALLOWED_SLUGS,
  type WebflowSlug,
} from "@/lib/webflow";

export async function generateStaticParams() {
  return WEBFLOW_ALLOWED_SLUGS.map((slug) => ({ slug }));
}

export default async function WebflowPage({ params }: { params: { slug: WebflowSlug } }) {
  const { slug } = params;
  if (!WEBFLOW_ALLOWED_SLUGS.includes(slug as WebflowSlug)) notFound();

  const fullHtml = await loadOriginalHtml(`${slug}.html`);
  const body = extractBodyInnerHtml(fullHtml);
  const normalized = normalizeWebflowBodyHtml(body);

  return <main dangerouslySetInnerHTML={{ __html: normalized }} />;
}

