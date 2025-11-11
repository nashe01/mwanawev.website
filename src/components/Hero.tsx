import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Card } from "@/components/ui/card";
import heroBgVideo from "@/assets/hero-bg.mp4";
import clip1 from "@/assets/clip1.png";
import clip2 from "@/assets/clip2.png";
import clip3 from "@/assets/clip3.png";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mt-16 min-h-[calc(100vh-4rem)] flex items-center justify-start"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 overflow-hidden hero-clip">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={(event) => event.currentTarget.pause()}
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Conservation Through
          <br />
          <span className="text-accent">Innovation & Technology</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
          MwanaWev delivers cutting-edge conservation solutions, bridging
          technology and nature for sustainable impact across Africa.
        </p>
        <div className="flex gap-4 justify-start items-center">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>

      {/* Bottom-left overlay cards (nudged ~3mm left) */}
      <div className="absolute z-10 bottom-8 left-0 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-5 max-w-md -ml-3 sm:-ml-3 lg:-ml-3">
            <Card className="aspect-square w-28 sm:w-32 bg-white/90 backdrop-blur-sm p-4 border-2 border-accent/60 hover:border-accent transition-colors shadow-xl shadow-black/25 rounded-xl flex items-center justify-center">
              <img src={clip1} alt="Impact" className="w-24 h-24 object-contain" />
            </Card>
            <Card className="aspect-square w-28 sm:w-32 bg-white/90 backdrop-blur-sm p-4 border-2 border-accent/60 hover:border-accent transition-colors shadow-xl shadow-black/25 rounded-xl flex items-center justify-center">
              <img src={clip2} alt="Tech" className="w-24 h-24 object-contain" />
            </Card>
            <Card className="aspect-square w-28 sm:w-32 bg-white/90 backdrop-blur-sm p-4 border-2 border-accent/60 hover:border-accent transition-colors shadow-xl shadow-black/25 rounded-xl flex items-center justify-center">
              <img src={clip3} alt="Community" className="w-24 h-24 object-contain" />
            </Card>
          </div>
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
