import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  disabled?: boolean;
}

/**
 * ParallaxSection Component
 * 
 * Creates a parallax scrolling effect using translateY transformations.
 * Uses throttled scroll listener for performance and respects motion preferences.
 * 
 * @param speed - Parallax speed multiplier (default: 0.5). Higher = faster movement
 * @param className - Additional CSS classes
 * @param disabled - Disable parallax effect (useful for reduced motion)
 * 
 * @example
 * <ParallaxSection speed={0.3}>
 *   <div className="hero-content">
 *     <h1>Parallax Hero</h1>
 *   </div>
 * </ParallaxSection>
 */
export const ParallaxSection = ({
  children,
  speed = 0.5,
  className,
  disabled = false,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (disabled || prefersReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const scrollPosition = window.pageYOffset;
            const elementTop = rect.top + scrollPosition;
            const elementHeight = rect.height;
            const viewportHeight = window.innerHeight;

            // Only apply parallax when element is in viewport
            if (
              scrollPosition + viewportHeight > elementTop &&
              scrollPosition < elementTop + elementHeight
            ) {
              const parallaxOffset =
                (scrollPosition - elementTop + viewportHeight) * speed;
              setOffset(parallaxOffset);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial calculation
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, disabled, prefersReducedMotion]);

  const shouldApplyParallax = !disabled && !prefersReducedMotion;

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      style={{
        transform: shouldApplyParallax ? `translateY(${offset}px)` : undefined,
        transition: shouldApplyParallax ? "transform 0.1s ease-out" : undefined,
        willChange: shouldApplyParallax ? "transform" : undefined,
      }}
    >
      {children}
    </div>
  );
};
