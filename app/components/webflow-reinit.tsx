"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Re-initializes Webflow JS (IX2 + layout scripts) on client-side navigation.
 * This ensures animations, layouts, and images display correctly after route changes.
 */
export function WebflowReinit() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Wait for Webflow to be available and DOM to be ready
    const reinitWebflow = () => {
      // Check if Webflow is available
      const Webflow = (window as any).Webflow;
      if (!Webflow) {
        // Retry after a short delay if Webflow isn't loaded yet
        setTimeout(reinitWebflow, 100);
        return;
      }

      // Wait for DOM to be fully ready
      if (document.readyState !== "complete") {
        window.addEventListener("load", reinitWebflow, { once: true });
        return;
      }

      // Destroy existing Webflow instance
      if (Webflow.destroy) {
        try {
          Webflow.destroy();
        } catch (e) {
          // Ignore errors if destroy fails
        }
      }

      // Re-initialize Webflow
      if (Webflow.ready) {
        try {
          Webflow.ready();
        } catch (e) {
          // Ignore errors if ready fails
        }
      }

      // Re-initialize IX2 (interactions)
      if (Webflow.require) {
        try {
          const ix2 = Webflow.require("ix2");
          if (ix2?.init) {
            ix2.init();
          }
        } catch (e) {
          // Ignore errors if IX2 init fails
        }
      }

      // Force images to reload/display after a short delay to let Webflow initialize
      setTimeout(() => {
        // Trigger a resize event to force Webflow to recalculate layouts
        if (window.dispatchEvent) {
          window.dispatchEvent(new Event("resize"));
        }

        // Also try to trigger image loading directly
        const images = document.querySelectorAll("img");
        images.forEach((img) => {
          const htmlImg = img as HTMLImageElement;
          // If image has data-src, trigger lazy loading
          if (htmlImg.dataset.src && !htmlImg.src) {
            htmlImg.src = htmlImg.dataset.src;
          }
          // Force image to reload if it's already loaded but not displaying
          if (htmlImg.complete && htmlImg.naturalHeight === 0) {
            const src = htmlImg.src;
            htmlImg.src = "";
            htmlImg.src = src;
          }
          // Remove any inline styles that might be hiding the image
          if (htmlImg.style.opacity === "0" || htmlImg.style.display === "none") {
            htmlImg.style.opacity = "";
            htmlImg.style.display = "";
          }
        });
      }, 100);
    };

    // Small delay to ensure DOM is ready after navigation
    const timeoutId = setTimeout(reinitWebflow, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}

