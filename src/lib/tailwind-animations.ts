/**
 * Tailwind Animation Utility Classes
 * 
 * This file documents all custom animation classes available in the project.
 * Import this file for TypeScript autocomplete support.
 */

export const ANIMATION_CLASSES = {
  // Fade animations with directional movement
  fadeUp: "animate-fade-up",
  fadeLeft: "animate-fade-left",
  fadeRight: "animate-fade-right",
  
  // Scale animation
  scaleIn: "animate-scale-in",
  
  // Floating animation (infinite loop)
  float: "animate-float",
  
  // Accordion animations (for collapsible content)
  accordionDown: "animate-accordion-down",
  accordionUp: "animate-accordion-up",
} as const;

export const ANIMATION_DELAYS = {
  delay100: "animation-delay-100",
  delay200: "animation-delay-200",
  delay300: "animation-delay-300",
  delay400: "animation-delay-400",
  delay500: "animation-delay-500",
  delay600: "animation-delay-600",
  delay700: "animation-delay-700",
  delay800: "animation-delay-800",
} as const;

/**
 * Usage Examples:
 * 
 * // Basic fade up
 * <div className="opacity-0 animate-fade-up">Content</div>
 * 
 * // With delay
 * <div className="opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>Content</div>
 * 
 * // Floating element
 * <div className="animate-float">Floating Content</div>
 * 
 * // Conditional animation
 * <div className={`opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}>Content</div>
 */

export type AnimationClass = typeof ANIMATION_CLASSES[keyof typeof ANIMATION_CLASSES];
export type AnimationDelay = typeof ANIMATION_DELAYS[keyof typeof ANIMATION_DELAYS];
