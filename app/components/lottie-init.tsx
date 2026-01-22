"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Initializes Lottie animations that Webflow's built-in handler fails to load.
 * Uses the lottie-web library loaded from CDN.
 */
export function LottieInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initLottie = () => {
      const lottieLib = (window as any).lottie;
      if (!lottieLib) {
        // Retry if lottie-web hasn't loaded yet
        setTimeout(initLottie, 200);
        return;
      }

      // Find all Lottie containers
      const lottieElements = document.querySelectorAll('[data-animation-type="lottie"]');
      
      lottieElements.forEach((el) => {
        const container = el as HTMLElement;
        
        // Skip if we've already initialized this one (check for our marker)
        if ((container as any).__lottieInitialized) return;
        
        const dataSrc = container.getAttribute("data-src");
        if (!dataSrc) return;

        // Mark as initialized
        (container as any).__lottieInitialized = true;

        // Destroy any existing Webflow lottie instance
        const existingSvg = container.querySelector("svg");
        if (existingSvg) {
          existingSvg.remove();
        }

        const loop = container.getAttribute("data-loop") === "1";
        const renderer = (container.getAttribute("data-renderer") as "svg" | "canvas" | "html") || "svg";

        // Clear any existing content
        container.innerHTML = "";

        try {
          const anim = lottieLib.loadAnimation({
            container,
            path: dataSrc,
            renderer,
            loop: loop || true, // Force loop for better visibility
            autoplay: true, // Force autoplay to ensure it shows
          });

          // Store reference for cleanup
          (container as any).__lottieAnim = anim;

          // Go to last frame if animation completes (to show final state)
          anim.addEventListener("complete", () => {
            anim.goToAndStop(anim.totalFrames - 1, true);
          });

        } catch (e) {
          console.warn("Failed to load Lottie animation:", dataSrc, e);
        }
      });
    };

    // Wait for DOM and scripts to be ready
    const timeoutId = setTimeout(initLottie, 800);

    return () => {
      clearTimeout(timeoutId);
      
      // Cleanup Lottie animations
      const lottieElements = document.querySelectorAll('[data-animation-type="lottie"]');
      lottieElements.forEach((el) => {
        const anim = (el as any).__lottieAnim;
        if (anim?.destroy) {
          try {
            anim.destroy();
          } catch (e) {
            // Ignore cleanup errors
          }
        }
        (el as any).__lottieInitialized = false;
      });
    };
  }, [pathname]);

  return null;
}
