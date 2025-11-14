# Animation System Guide

Complete guide for implementing scroll-triggered animations in the project.

## Table of Contents
1. [Hooks](#hooks)
2. [Components](#components)
3. [CSS Animations](#css-animations)
4. [Usage Examples](#usage-examples)
5. [Performance](#performance)
6. [Accessibility](#accessibility)

---

## Hooks

### `useScrollAnimation()`
Basic hook for triggering animations when an element enters the viewport.

```tsx
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MyComponent = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={isVisible ? "animate-fade-up" : "opacity-0"}
    >
      Content appears on scroll
    </div>
  );
};
```

**Parameters:**
- `threshold` (default: 0.1) - Percentage of element that must be visible
- `rootMargin` (default: '50px') - Margin around viewport for early triggering

**Returns:**
- `ref` - Attach to the element you want to observe
- `isVisible` - Boolean indicating if element has entered viewport

### `useStaggeredAnimation(delay)`
Creates staggered animation effects for lists/grids.

```tsx
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const items = ["Item 1", "Item 2", "Item 3"];

const MyList = () => {
  return (
    <div>
      {items.map((item, index) => (
        <ListItem key={index} delay={index * 150}>
          {item}
        </ListItem>
      ))}
    </div>
  );
};

const ListItem = ({ children, delay }) => {
  const { ref, shouldAnimate } = useStaggeredAnimation(delay);
  
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-500 ${
        shouldAnimate ? "opacity-100" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};
```

**Parameters:**
- `delay` (default: 0) - Delay in milliseconds before animation starts

---

## Components

### `<FadeIn />`
Reusable wrapper component for fade-in animations.

```tsx
import { FadeIn } from "@/components/FadeIn";

// Basic usage
<FadeIn direction="up">
  <h1>Animated Heading</h1>
</FadeIn>

// With delay and custom duration
<FadeIn direction="left" delay={200} duration={800}>
  <p>Delayed animation</p>
</FadeIn>
```

**Props:**
- `direction` - Animation direction: "up" | "left" | "right" | "scale" (default: "up")
- `delay` - Delay in milliseconds (default: 0)
- `duration` - Animation duration in milliseconds (default: 600)
- `className` - Additional CSS classes

### `<ParallaxSection />`
Creates parallax scrolling effects with performance optimization.

```tsx
import { ParallaxSection } from "@/components/ParallaxSection";

// Hero with parallax background
<section className="relative min-h-screen">
  <ParallaxSection speed={0.3} className="absolute inset-0">
    <div className="bg-image" />
  </ParallaxSection>
  
  <ParallaxSection speed={0.6}>
    <div className="content">
      <h1>Parallax Hero</h1>
    </div>
  </ParallaxSection>
</section>
```

**Props:**
- `speed` - Parallax speed multiplier (default: 0.5). Higher = faster movement
- `className` - Additional CSS classes
- `disabled` - Disable parallax (respects prefers-reduced-motion)

**Speed Guide:**
- `0.2-0.3` - Background layers (slow)
- `0.4-0.6` - Middle content (medium)
- `0.7-0.9` - Foreground elements (fast)

---

## CSS Animations

### Available Animation Classes

```css
/* Fade with directional movement */
.animate-fade-up      /* Fade in from bottom */
.animate-fade-left    /* Fade in from right */
.animate-fade-right   /* Fade in from left */

/* Scale animation */
.animate-scale-in     /* Fade in with scale */

/* Infinite animations */
.animate-float        /* Floating motion (3s loop) */

/* Animation delays */
.animation-delay-100  /* 100ms delay */
.animation-delay-200  /* 200ms delay */
.animation-delay-300  /* 300ms delay */
.animation-delay-400  /* 400ms delay */
.animation-delay-500  /* 500ms delay */
.animation-delay-600  /* 600ms delay */
.animation-delay-700  /* 700ms delay */
.animation-delay-800  /* 800ms delay */
```

### Direct CSS Usage

```tsx
// Basic animation
<div className="opacity-0 animate-fade-up">
  Animates on page load
</div>

// With delay
<div className="opacity-0 animate-fade-up animation-delay-300">
  Animates after 300ms
</div>

// Conditional animation
<div className={`opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}>
  Animates when visible
</div>

// Floating element
<div className="animate-float">
  Continuous floating motion
</div>
```

---

## Usage Examples

### 1. Simple Fade In
```tsx
<FadeIn direction="up">
  <h1>Animated Title</h1>
</FadeIn>
```

### 2. Staggered List
```tsx
const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

<div className="space-y-4">
  {items.map((item, index) => (
    <FadeIn key={index} direction="up" delay={index * 100}>
      <div className="p-4 bg-card rounded-lg">{item}</div>
    </FadeIn>
  ))}
</div>
```

### 3. Staggered Grid
```tsx
const cards = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  title: `Card ${i + 1}`,
}));

<div className="grid grid-cols-4 gap-4">
  {cards.map((card, index) => (
    <FadeIn key={card.id} direction="scale" delay={index * 80}>
      <div className="p-6 bg-card rounded-lg">
        <h3>{card.title}</h3>
      </div>
    </FadeIn>
  ))}
</div>
```

### 4. Parallax Hero
```tsx
<section className="relative min-h-screen overflow-hidden bg-primary">
  {/* Background layer - slowest */}
  <ParallaxSection speed={0.2} className="absolute inset-0">
    <div className="bg-pattern opacity-20" />
  </ParallaxSection>

  {/* Content layer - medium speed */}
  <ParallaxSection speed={0.5} className="relative z-10">
    <div className="container mx-auto px-4 h-screen flex items-center">
      <FadeIn direction="scale">
        <h1 className="text-6xl font-bold">Parallax Hero</h1>
      </FadeIn>
    </div>
  </ParallaxSection>

  {/* Foreground elements - fastest */}
  <ParallaxSection speed={0.8} className="absolute bottom-20">
    <div className="animate-float">
      <Icon />
    </div>
  </ParallaxSection>
</section>
```

### 5. Combined Animations
```tsx
<section className="relative py-20">
  {/* Parallax background */}
  <ParallaxSection speed={0.3} className="absolute inset-0 -z-10">
    <div className="bg-gradient-to-b from-primary/10 to-transparent" />
  </ParallaxSection>

  {/* Animated content */}
  <div className="container mx-auto">
    <FadeIn direction="up">
      <h2 className="text-5xl font-bold text-center mb-12">
        Features
      </h2>
    </FadeIn>

    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FadeIn key={index} direction="scale" delay={index * 150}>
          <ParallaxSection speed={0.4 + index * 0.1}>
            <div className="p-8 bg-card rounded-2xl">
              <feature.icon className="w-12 h-12 mb-4 animate-float" />
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </ParallaxSection>
        </FadeIn>
      ))}
    </div>
  </div>
</section>
```

---

## Performance

### Optimizations Implemented

1. **Intersection Observer**
   - Uses native browser API (efficient)
   - Automatically unobserves after animation triggers
   - Configurable threshold and root margin

2. **GPU Acceleration**
   - All animations use `transform` and `opacity` only
   - Hardware-accelerated properties
   - No layout thrashing

3. **Parallax Optimization**
   - Throttled scroll listener using `requestAnimationFrame`
   - Only calculates when element is in viewport
   - Uses `will-change` hint for browser optimization

4. **Animation Timing**
   - `forwards` fill mode prevents reflow
   - Single trigger (no repeat)
   - Efficient CSS keyframes

### Best Practices

```tsx
// ✅ Good: Opacity + Transform
<div className="opacity-0 animate-fade-up">Content</div>

// ❌ Bad: Animating layout properties
<div className="h-0 animate-expand">Content</div>

// ✅ Good: Stagger with reasonable delays
{items.map((item, i) => (
  <FadeIn key={i} delay={i * 100}>...</FadeIn>
))}

// ❌ Bad: Too many or too long delays
{items.map((item, i) => (
  <FadeIn key={i} delay={i * 1000}>...</FadeIn>
))}
```

---

## Accessibility

### Reduced Motion Support

The system automatically respects `prefers-reduced-motion`:

```css
/* Automatically applied */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### ParallaxSection Behavior
```tsx
// Automatically disables parallax when reduced motion is preferred
<ParallaxSection speed={0.5}>
  {/* No parallax movement when user prefers reduced motion */}
</ParallaxSection>
```

### Manual Control
```tsx
// Option 1: Disable specific animation
<ParallaxSection disabled={true}>...</ParallaxSection>

// Option 2: Conditional rendering
{!prefersReducedMotion && (
  <FadeIn>...</FadeIn>
)}
```

---

## Migration Guide

### Existing Code Using Custom Animations

**Before:**
```tsx
const { ref, isVisible } = useElementScrollAnimation(200);

<div
  ref={ref}
  className={`transition-all ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
>
  Content
</div>
```

**After:**
```tsx
<FadeIn direction="up" delay={200}>
  Content
</FadeIn>
```

### Converting to Tailwind Classes

**Before:**
```tsx
<div
  className={isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  style={{ transition: 'all 0.5s' }}
>
```

**After:**
```tsx
<div className={isVisible ? "animate-fade-up" : "opacity-0"}>
```

---

## Troubleshooting

### Animation Not Triggering
- Ensure element has `opacity-0` initially
- Check if element is in viewport (adjust `rootMargin`)
- Verify `ref` is properly attached

### Animation Repeating
- Check that Intersection Observer unobserves after trigger
- Ensure `forwards` fill mode is set
- Verify no JavaScript is resetting classes

### Performance Issues
- Reduce number of simultaneously animating elements
- Increase stagger delays
- Use `disabled` prop for parallax in heavy sections
- Check for conflicting CSS transitions

---

## Reference Files

- **Hooks:** `src/hooks/useScrollAnimation.tsx`
- **Components:** 
  - `src/components/FadeIn.tsx`
  - `src/components/ParallaxSection.tsx`
- **Examples:** `src/examples/AnimationExamples.tsx`
- **Config:** 
  - `tailwind.config.ts`
  - `src/index.css`
- **Types:** `src/lib/tailwind-animations.ts`
