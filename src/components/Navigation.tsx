import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const segments = [
  { name: "MwanaWev", path: "/mwanawev" },
  { name: "PayWega", path: "/paywega" },
  { name: "Sky Giants", path: "/skygiants" },
  { name: "SaaS for MSME", path: "/saas-msme" },
];

export const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/mwanawev" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80">
            <span className="text-xl font-bold text-primary-foreground">M</span>
          </div>
          <span className="font-arlo text-xl font-bold">MwanaWev</span>
        </Link>

        <nav className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Menu className="h-4 w-4" />
                Company Segments
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card">
              {segments.map((segment) => (
                <DropdownMenuItem key={segment.path} asChild>
                  <a href={segment.path} className="cursor-pointer">
                    {segment.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};
