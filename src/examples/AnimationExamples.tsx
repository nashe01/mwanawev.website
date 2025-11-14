import { FadeIn } from "@/components/FadeIn";
import { ParallaxSection } from "@/components/ParallaxSection";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

/**
 * Animation Examples Component
 * 
 * Demonstrates various animation patterns and usage examples.
 * Remove this file in production - it's for reference only.
 */

// Example 1: Basic FadeIn Animation
export const BasicAnimationExample = () => {
  return (
    <section className="py-20">
      <FadeIn direction="up">
        <h2 className="text-4xl font-bold text-center">
          Basic Fade Up Animation
        </h2>
      </FadeIn>

      <FadeIn direction="left" delay={200}>
        <p className="text-center mt-4">Fade in from left with delay</p>
      </FadeIn>

      <FadeIn direction="right" delay={400}>
        <p className="text-center mt-4">Fade in from right with more delay</p>
      </FadeIn>

      <FadeIn direction="scale" delay={600}>
        <div className="mt-8 p-8 bg-card rounded-lg text-center">
          Scale in animation
        </div>
      </FadeIn>
    </section>
  );
};

// Example 2: Staggered List Animation
export const StaggeredListExample = () => {
  const items = [
    "First item - animates first",
    "Second item - follows after",
    "Third item - continues the sequence",
    "Fourth item - completes the stagger",
  ];

  return (
    <section className="py-20">
      <FadeIn direction="up">
        <h2 className="text-4xl font-bold text-center mb-12">
          Staggered List Animation
        </h2>
      </FadeIn>

      <div className="space-y-4 max-w-2xl mx-auto">
        {items.map((item, index) => (
          <StaggeredItem key={index} delay={index * 150}>
            <div className="p-6 bg-card rounded-lg shadow-md">
              {item}
            </div>
          </StaggeredItem>
        ))}
      </div>
    </section>
  );
};

// Helper component for staggered animations
const StaggeredItem = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const { ref, shouldAnimate } = useStaggeredAnimation(delay);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-500 ${
        shouldAnimate
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

// Example 3: Parallax Hero Section
export const ParallaxHeroExample = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary to-primary/50">
      {/* Background parallax layer - moves slower */}
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover opacity-20" />
      </ParallaxSection>

      {/* Middle parallax layer - moves at medium speed */}
      <ParallaxSection speed={0.5} className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-primary-foreground px-4">
          <FadeIn direction="scale">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Parallax Hero
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={300}>
            <p className="text-xl md:text-2xl mb-8">
              Scroll down to see the parallax effect
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={600}>
            <button className="px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors">
              Get Started
            </button>
          </FadeIn>
        </div>
      </ParallaxSection>

      {/* Foreground elements - move fastest */}
      <ParallaxSection speed={0.8} className="absolute bottom-20 left-0 right-0">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" delay={800}>
            <div className="flex justify-center gap-8">
              <div className="w-20 h-20 bg-accent rounded-full animate-float" />
              <div className="w-20 h-20 bg-accent rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
              <div className="w-20 h-20 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </FadeIn>
        </div>
      </ParallaxSection>
    </section>
  );
};

// Example 4: Grid with Staggered Animation
export const StaggeredGridExample = () => {
  const gridItems = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    description: "Staggered animation in a grid layout",
  }));

  return (
    <section className="py-20">
      <FadeIn direction="up">
        <h2 className="text-4xl font-bold text-center mb-12">
          Staggered Grid Animation
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {gridItems.map((item, index) => (
          <FadeIn
            key={item.id}
            direction="scale"
            delay={index * 100}
            className="group"
          >
            <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

// Example 5: Combined Animations
export const CombinedAnimationsExample = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Parallax background */}
      <ParallaxSection speed={0.2} className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10" />
      </ParallaxSection>

      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <h2 className="text-4xl font-bold text-center mb-16">
            Combined Animation Techniques
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <FadeIn direction="left" delay={200}>
            <div className="relative">
              <ParallaxSection speed={0.4}>
                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-primary rounded-full animate-float mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Parallax + Fade</h3>
                  <p className="text-muted-foreground">
                    Combining parallax effects with fade animations creates
                    depth and interest.
                  </p>
                </div>
              </ParallaxSection>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={400}>
            <div className="relative">
              <ParallaxSection speed={0.6}>
                <div className="p-8 bg-card rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-accent rounded-full animate-float mb-4" style={{ animationDelay: '0.5s' }} />
                  <h3 className="text-2xl font-bold mb-4">Layered Motion</h3>
                  <p className="text-muted-foreground">
                    Different parallax speeds create a sense of depth and
                    dimensionality.
                  </p>
                </div>
              </ParallaxSection>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// Complete Demo Page
export const AnimationDemoPage = () => {
  return (
    <div className="min-h-screen">
      <ParallaxHeroExample />
      <BasicAnimationExample />
      <StaggeredListExample />
      <StaggeredGridExample />
      <CombinedAnimationsExample />
    </div>
  );
};
