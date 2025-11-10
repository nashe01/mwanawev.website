import { ArrowRight, Cpu, Leaf, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import techImg from "@/assets/segment-tech.jpg";
import conservationImg from "@/assets/segment-conservation.jpg";
import educationImg from "@/assets/segment-education.jpg";
import communityImg from "@/assets/segment-community.jpg";

const segments = [
  {
    icon: Cpu,
    title: "Technology Solutions",
    description: "Advanced monitoring systems, IoT sensors, and AI-powered analytics for real-time conservation insights.",
    image: techImg,
  },
  {
    icon: Leaf,
    title: "Conservation Services",
    description: "Comprehensive ecosystem management, wildlife tracking, and habitat restoration programs.",
    image: conservationImg,
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    description: "Capacity building programs for communities and conservation professionals across Africa.",
    image: educationImg,
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Sustainable livelihood initiatives that empower local communities as conservation stewards.",
    image: communityImg,
  },
];

export const CompanySegments = () => {
  return (
    <section id="segments" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Company Segments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Integrated solutions across multiple domains to maximize conservation impact
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-accent/90 p-3 rounded-lg">
                  <segment.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {segment.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {segment.description}
                </p>
                <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
