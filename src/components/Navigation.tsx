import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/30 backdrop-blur-md border-b border-white/20"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="MwanaWev Logo" className="h-10 w-10" />
            <span className="text-xl font-semibold text-foreground">MwanaWev</span>
          </div>

          {/* Segments Dropdown */}
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-foreground hover:text-accent transition-colors flex items-center font-bold">
                  Segments
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover z-[60]">
                <DropdownMenuItem onClick={() => scrollToSection("segments")}>
                  Technology Solutions
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("segments")}>
                  Conservation Services
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("segments")}>
                  Education & Training
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("segments")}>
                  Community Development
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
