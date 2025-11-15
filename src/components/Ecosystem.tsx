import ecosystemImg from "@/assets/ecosystem-diagram.jpg";
import { FadeIn } from "@/components/FadeIn";

export const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DB6B2E] mb-4">
              The Mwanawev Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              An interconnected network of services, technology, and community partnerships
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          {/* Diagram */}
          <FadeIn direction="scale" delay={200}>
            <div className="relative mb-12">
              <img
                src={ecosystemImg}
                alt="Mwanawev Ecosystem Diagram"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </FadeIn>

          {/* Description Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn direction="up" delay={300}>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#DB6B2E] mb-3">
                  Global Expansion and Strategic Partnerships
                </h3>
                <p className="text-muted-foreground">
                  We are charting a path to scale Mwanawev's
                  transformative technologies across Africa and into the global arena. 
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={450}>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#DB6B2E] mb-3">
                  Sustainable and Community-Centric Innovation
                </h3>
                <p className="text-muted-foreground">
                  Our future growth is anchored in the principle of Ubuntu, the belief that progress is only
                  meaningful when it uplifts everyone. 
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={600}>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#DB6B2E] mb-3">
                  Leveraging Cutting-Edge Technology
                </h3>
                <p className="text-muted-foreground">
                  A future where AI powers advanced business
                  analytics and forecasting, drones deliver both sustainable solutions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
