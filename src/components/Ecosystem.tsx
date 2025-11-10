import ecosystemImg from "@/assets/ecosystem-diagram.jpg";

export const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
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
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Data Integration
              </h3>
              <p className="text-muted-foreground">
                Seamless flow of information between field sensors, community reports, and central analytics platforms.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Stakeholder Collaboration
              </h3>
              <p className="text-muted-foreground">
                Connecting governments, NGOs, communities, and research institutions in unified conservation efforts.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Continuous Impact
              </h3>
              <p className="text-muted-foreground">
                Real-time monitoring and adaptive strategies ensure sustained positive outcomes for ecosystems and communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
