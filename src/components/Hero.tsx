import { useState } from "react";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Card } from "@/components/ui/card";

import heroBgVideo from "@/assets/hero-bg.mp4";
import clip1 from "@/assets/clip1.png";
import clip2 from "@/assets/clip2.png";
import clip3 from "@/assets/clip3.png";

export const Hero = () => {
  const [videoDone, setVideoDone] = useState(false);

  const socialIcons = [
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/", label: "YouTube" },
  ];

  const cards = [clip1, clip2, clip3];

  return (
    <section
      id="hero"
      className="relative mt-16 min-h-[calc(100vh-4rem)] flex items-center justify-start overflow-hidden bg-white"
    >
      {/* Background Video */}
      <div className="absolute inset-0 hero-clip">
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
          autoPlay
          muted
          playsInline
          onEnded={() => setVideoDone(true)}
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-left">

        {/* Headline (entire block fades in) */}
        <h1
          className={`
            hidden md:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            font-bold text-white mb-4 leading-tight
            transition-opacity duration-700
            ${videoDone ? "opacity-100" : "opacity-0"}
          `}
          style={{
            transitionDelay: videoDone ? "300ms" : "0ms",
          }}
        >
          <br />
          <span className="text-charcoal">Innovation & Technology</span>
        </h1>

        {/* Subtext (entire block fades in after headline) */}
        <p
          className={`
            hidden md:block text-base sm:text-lg md:text-xl text-charcoal mb-6 max-w-2xl
            transition-opacity duration-700
            ${videoDone ? "opacity-100" : "opacity-0"}
          `}
          style={{
            transitionDelay: videoDone ? "900ms" : "0ms",
          }}
        >
          A diversified conglomerate driving innovation across FinTech, Drone Technology,
          Satellite Services, and Business Solutions
        </p>

        {/* Icons → fade icon by icon */}
        <div className="flex gap-4 justify-start items-center mt-4">
          {socialIcons.map(({ icon: Icon, href, label }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`
                inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#51682C] 
                hover:bg-[#3d5020] text-charcoal transition-all
                opacity-0
                ${videoDone ? "opacity-100" : ""}
              `}
              style={{
                transition: "opacity 0.7s ease",
                transitionDelay: `${1400 + i * 250}ms`,
              }}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Cards → fade card by card */}
      <div className="absolute z-10 bottom-8 left-0 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-5 max-w-md -ml-3 overflow-x-auto pb-2">
            {cards.map((clip, i) => (
              <Card
                key={i}
                className={`
                  flex-shrink-0 aspect-square w-24 sm:w-28 md:w-32 
                  bg-white backdrop-blur-sm p-4 rounded-xl shadow-2xl shadow-black/30
                  opacity-0 transition-opacity duration-700
                  ${videoDone ? "opacity-100" : ""}
                `}
                style={{
                  transitionDelay: `${2300 + i * 300}ms`,
                }}
              >
                <img
                  src={clip}
                  alt={`Card ${i + 1}`}
                  className="w-20 sm:w-24 h-20 sm:h-24 object-contain"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator → appears last */}
      <div
        className={`
          absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce
          opacity-0 transition-opacity duration-700 
          ${videoDone ? "opacity-100" : ""}
        `}
        style={{
          transitionDelay: videoDone ? "3500ms" : "0ms",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
