import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBgVideo from "@/assets/hero-bg.mp4";

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-start">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={(event) => event.currentTarget.pause()}
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Conservation Through
          <br />
          <span className="text-accent">Innovation & Technology</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
          MwanaWev delivers cutting-edge conservation solutions, bridging technology and nature for sustainable impact across Africa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg"
          >
            Explore Our Work
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
