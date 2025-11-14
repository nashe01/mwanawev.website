import ecosystemImg from "@/assets/ecosystem-diagram.jpg";

export const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DB6B2E] mb-4">
            The MwanaWev Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An interconnected network of services, technology, and community partnerships
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Diagram */}
          <div className="relative mb-12">
            <img
              src={ecosystemImg}
              alt="MwanaWev Ecosystem Diagram"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          {/* Description Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#DB6B2E] mb-3">
              Global Expansion and Strategic Partnerships
              </h3>
              <p className="text-muted-foreground">
              Our vision spans far beyond Zimbabwe. We are charting a path to scale MwanaWev’s
              transformative technologies across Africa and into the global arena. 
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#DB6B2E] mb-3">
              Sustainable and Community-Centric Innovation

              </h3>
              <p className="text-muted-foreground">
              Our future growth is anchored in the principle of Ubuntu, the belief that progress is only
              meaningful when it uplifts everyone. 
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#DB6B2E] mb-3">
              Leveraging Cutting-Edge Technology
              </h3>
              <p className="text-muted-foreground">
              Our commitment to disruptive technologies shapes a future where AI powers advanced business
analytics and forecasting, drones deliver both sustainable solutions and captivating entertainment,
and satellite communications bridge critical connectivity gaps in education, healthcare, and
agriculture.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
