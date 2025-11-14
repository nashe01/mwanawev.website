import { useEffect, useRef, useState } from "react";
import { ArrowRight, Cpu, Leaf, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import techImg from "@/assets/segment-tech.jpg";
import conservationImg from "@/assets/segment-conservation.jpg";
import educationImg from "@/assets/segment-education.jpg";
import communityImg from "@/assets/segment-community.jpg";

const segments = [
  {
    icon: Cpu,
    title: "MWANAWEV",
    description:
      "Advanced monitoring systems, IoT sensors, and AI-powered analytics for real-time conservation insights.",
    image: techImg,
  },
  {
    icon: Leaf,
    title: "PAYWEGA",
    description:
      "Comprehensive ecosystem management, wildlife tracking, and habitat restoration programs.",
    image: conservationImg,
  },
  {
    icon: GraduationCap,
    title: "SKY-GIANTS",
    description:
      "Capacity building programs for communities and conservation professionals across Africa.",
    image: educationImg,
  },
  {
    icon: Users,
    title: "SAAS",
    description:
      "Sustainable livelihood initiatives that empower local communities as conservation stewards.",
    image: communityImg,
  },
];

const useElementScrollAnimation = (delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return { ref, isVisible };
};

interface SegmentCardProps {
  segment: typeof segments[0];
  index: number;
}

const SegmentCard = ({ segment, index }: SegmentCardProps) => {
  const { ref, isVisible } = useElementScrollAnimation(index * 150);
  
  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex overflow-hidden w-full ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : "opacity-0 translate-y-8 translate-x-8"
      }`}
    >
      {/* Left Image */}
      <div className="w-1/2 h-auto overflow-hidden">
        <img
          src={segment.image}
          alt={segment.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isVisible ? "scale-100" : "scale-110"
          } group-hover:scale-105`}
        />
      </div>

      {/* Right Text Section */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <segment.icon 
          className={`h-10 w-10 mb-4 text-[#DB6B2E] transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-180"
          }`}
        />
        <h3 className="text-2xl font-bold mb-3">{segment.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {segment.description}
        </p>
        <Button variant="ghost" className="text-[#DB6B2E] p-0 text-lg w-fit">
          Learn More
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export const CompanySegments = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  
  return (
    <section id="segments" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div 
          ref={headerRef as React.RefObject<HTMLDivElement> | null}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#DB6B2E] mb-6">
            Our Company Segments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diverse portfolio of companies addressing critical market needs
          </p>
        </div>

        {/* Grid 2 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {segments.map((segment, index) => (
            <SegmentCard key={index} segment={segment} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
