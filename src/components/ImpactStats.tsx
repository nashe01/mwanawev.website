import { TrendingUp, MapPin, Users, Award } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { useRef, useEffect } from "react";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  {
    icon: MapPin,
    value: 50000,
    suffix: "+",
    label: "Potential Users",
    description: "Across Africa",
  },
  {
    icon: Users,
    value: 120,
    suffix: "+",
    label: "Communities Engaged",
    description: "Local partnerships across Africa",
  },
  {
    icon: TrendingUp,
    value: 85,
    suffix: "%",
    label: "Cash Dependency Rate",
    description: "Reduction in cash dependency",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "International Awards",
    description: "Recognition for technology innovation",
  },
];

export const ImpactStats = () => {
  return (
    <section id="impact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DB6B2E] mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable results driving conservation success across Africa
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { value, start } = useCountUp(stat.value, 4000);
            const ref = useRef<HTMLDivElement | null>(null);

            useEffect(() => {
              const element = ref.current;
              if (!element) return;

              const observer = new IntersectionObserver(
                entries => {
                  if (entries[0].isIntersecting) {
                    start();
                    observer.disconnect();
                  }
                },
                { threshold: 0.4 }
              );

              observer.observe(element);
              return () => observer.disconnect();
            }, []);

            return (
              <FadeIn key={index} direction="scale" delay={index * 100}>
                <div ref={ref} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#51682C] hover:bg-[#3d5020] rounded-full mb-4 transition-colors">
                    <stat.icon className="h-8 w-8 text-charcoal" />
                  </div>

                  {/* Smaller number font size */}
                  <div className="text-3xl sm:text-4xl font-bold text-charcoal mb-2">
                    {value.toLocaleString()}
                    {stat.suffix}
                  </div>

                  <div className="text-xl font-semibold text-charcoal mb-2">
                    {stat.label}
                  </div>

                  <p className="text-sm text-charcoal">
                    {stat.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
