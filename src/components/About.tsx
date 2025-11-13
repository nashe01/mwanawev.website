import { Target, Eye } from "lucide-react";
import visionImg from "@/assets/vision-illustration.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DB6B2E] mb-4">
            About MwanaWev
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pioneering sustainable solutions that harmonize technology with conservation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Vision */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Africa's leading innovation hub, creating sustainable solutions that drive economic growth 
                  and improve quality of life across the continent. We envision a future where technology serves 
                  as a bridge to opportunity for every community.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To identify, develop, and scale innovative solutions that address real-world challenges, 
                  particularly within emerging markets. We are committed to fostering entrepreneurship, 
                  promoting financial inclusion, and leveraging technology for social good.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                src={visionImg}
                alt="Vision and Mission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-lg shadow-xl max-w-xs">
              <p className="font-semibold text-lg text-[#333333]">
                MwanaWev is a dynamic holding company that serves as an innovation hub, creating and nurturing businesses 
                that address real-world challenges through technology and creative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

