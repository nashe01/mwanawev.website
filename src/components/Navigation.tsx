import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      setIsOpen(false);
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors font-bold"
            >
              About
            </button>
            
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

            <button
              onClick={() => scrollToSection("ecosystem")}
              className="text-foreground hover:text-accent transition-colors font-bold"
            >
              Ecosystem
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground hover:text-accent transition-colors font-bold"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-foreground hover:text-accent transition-colors font-bold"
            >
              Impact
            </button>
            
            <Button variant="default" className="bg-accent hover:bg-accent/90">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2 font-bold"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("segments")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2 font-bold"
            >
              Segments
            </button>
            <button
              onClick={() => scrollToSection("ecosystem")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2 font-bold"
            >
              Ecosystem
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2 font-bold"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2 font-bold"
            >
              Impact
            </button>
            <Button variant="default" className="w-full bg-accent hover:bg-accent/90">
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
