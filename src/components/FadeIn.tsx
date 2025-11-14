import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
  duration?: number;
}

/**
 * FadeIn Component
 * 
 * A reusable component that fades in elements when they scroll into view.
 * Uses Intersection Observer for performance and triggers animation only once.
 * 
 * @param direction - Animation direction: "up" (default), "left", "right", or "scale"
 * @param delay - Delay before animation starts in ms (default: 0)
 * @param duration - Animation duration in ms (default: 600)
 * @param className - Additional CSS classes
 * 
 * @example
 * <FadeIn direction="up" delay={200}>
 *   <h1>Hello World</h1>
 * </FadeIn>
 */
export const FadeIn = ({
  children,
  direction = "up",
  delay = 0,
  className,
  duration = 600,
}: FadeInProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses = {
    up: "animate-fade-up",
    left: "animate-fade-left",
    right: "animate-fade-right",
    scale: "animate-scale-in",
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "opacity-0",
        isVisible && animationClasses[direction],
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
};
