import { TrendingUp, MapPin, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    icon: MapPin,
    value: "50,000+",
    label: "Hectares Protected",
    description: "Conservation areas under active monitoring",
  },
  {
    icon: Users,
    value: "120+",
    label: "Communities Engaged",
    description: "Local partnerships across Africa",
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Wildlife Increase",
    description: "Improvement in monitored populations",
  },
  {
    icon: Award,
    value: "15+",
    label: "International Awards",
    description: "Recognition for conservation innovation",
  },
];

export const ImpactStats = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="impact" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-secondary transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DB6B2E] mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable results driving conservation success across Africa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#51682C] hover:bg-[#3d5020] rounded-full mb-4 transition-colors">
                <stat.icon className="h-8 w-8 text-charcoal" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-charcoal mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-charcoal mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-charcoal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
