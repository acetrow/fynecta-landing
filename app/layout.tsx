import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Xentro - Webflow Ecommerce Website Template",
  description:
    "Xentro – A sleek and modern Webflow Ecommerce template crafted for SaaS startups, tech companies, and digital product brands. Fully responsive and conversion-ready, Xentro helps you showcase features, boost sign-ups, and scale your online presence with a clean, professional design.",
  openGraph: {
    title: "Xentro - Webflow Ecommerce Website Template",
    description:
      "Xentro – A sleek and modern Webflow Ecommerce template crafted for SaaS startups, tech companies, and digital product brands. Fully responsive and conversion-ready, Xentro helps you showcase features, boost sign-ups, and scale your online presence with a clean, professional design.",
    images: [
      {
        url: "https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692eb8af848b4e056ffaa180_Social-share.webp",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xentro - Webflow Ecommerce Website Template",
    description:
      "Xentro – A sleek and modern Webflow Ecommerce template crafted for SaaS startups, tech companies, and digital product brands. Fully responsive and conversion-ready, Xentro helps you showcase features, boost sign-ups, and scale your online presence with a clean, professional design.",
    images: [
      "https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692eb8af848b4e056ffaa180_Social-share.webp",
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-wf-domain="xentro.webflow.io"
      data-wf-page="68b9a3dd68643585de10439f"
      data-wf-site="68b9a3dc68643585de10435f"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Webflow" />

        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />
        <Script id="webfont-load" strategy="beforeInteractive">
          {`WebFont.load({ google: { families: ["Inter:regular,500,600,700", "Fira Code:regular,500,600,700"] } });`}
        </Script>
        <Script id="webflow-mod" strategy="beforeInteractive">
          {`!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);`}
        </Script>
        <Script id="webflow-currency" strategy="beforeInteractive">
          {`window.__WEBFLOW_CURRENCY_SETTINGS = { "currencyCode": "USD", "symbol": "$", "decimal": ".", "fractionDigits": 2, "group": ",", "template": "{{wf {\\"path\\":\\"symbol\\",\\"type\\":\\"PlainText\\"} }} {{wf {\\"path\\":\\"amount\\",\\"type\\":\\"CommercePrice\\"} }} {{wf {\\"path\\":\\"currencyCode\\",\\"type\\":\\"PlainText\\"} }}", "hideDecimalForWholeNumbers": false };`}
        </Script>

        <link
          href="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/css/xentro.webflow.shared.ec27366e5.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link
          href="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c46d6fe7ecb5dda8ff4f0b_FAvicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c46d74e33c5d1ac8320eaf_Webclip.svg"
          rel="apple-touch-icon"
        />
      </head>
      <body suppressHydrationWarning>
        {children}

        {/* Ensure internal navigation between Webflow-exported pages always works */}
        <Script id="webflow-internal-links" strategy="afterInteractive">
          {`
            (function () {
              var routeMap = {
                "index.html": "/",
                "about.html": "/about",
                "blog.html": "/blog",
                "career.html": "/career",
                "checkout.html": "/checkout",
                "coming-soon.html": "/coming-soon",
                "contact.html": "/contact",
                "features.html": "/features",
                "integration.html": "/integration",
                "pricing.html": "/pricing",
                "401.html": "/401",
                "404.html": "/404"
              };

              document.addEventListener(
                "click",
                function (event) {
                  var a = event.target && event.target.closest
                    ? event.target.closest("a[href]")
                    : null;
                  if (!a) return;

                  var rawHref = a.getAttribute("href") || "";
                  var lower = rawHref.toLowerCase();

                  // Ignore external, mailto, tel, js, hash-only links.
                  if (
                    lower.startsWith("http://") ||
                    lower.startsWith("https://") ||
                    lower.startsWith("mailto:") ||
                    lower.startsWith("tel:") ||
                    lower.startsWith("javascript:") ||
                    rawHref.startsWith("#")
                  ) {
                    return;
                  }

                  var target = rawHref;
                  if (routeMap[rawHref]) {
                    target = routeMap[rawHref];
                  }

                  if (target.startsWith("/")) {
                    event.preventDefault();
                    window.location.href = target;
                  }
                },
                true
              );
            })();
          `}
        </Script>

        {/* Lottie animation library (fallback for Webflow Lottie) */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"
          strategy="afterInteractive"
        />

        {/* Webflow runtime (animations/interactions) */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=68b9a3dc68643585de10435f"
          strategy="afterInteractive"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        />
        <Script
          src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/js/webflow.schunk.300bb1e9d1d59bcb.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/js/webflow.1f84f7b5.1df7882c6f47fbf2.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
