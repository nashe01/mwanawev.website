import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/Asset 55.png";

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
          <div
            className="flex items-center space-x-3 cursor-pointer -ml-6"
            onClick={() => scrollToSection("hero")}
          >
            <img src={logo} alt="MwanaWev Logo" className="h-80 w-80" />
          </div>

          {/* Segments Dropdown Only */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Menu className="h-4 w-4" />
                Company Segments
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-popover z-[60]" align="end">
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
    </nav>
  );
};
