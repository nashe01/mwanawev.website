import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="MwanaWev Logo" className="h-10 w-10 brightness-0 invert" />
              <span className="text-xl font-semibold">MwanaWev</span>
            </div>
            <p className="text-sm opacity-80">
              Conservation through innovation and technology
            </p>
            <div className="flex space-x-4">
              <button className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </button>
              <button className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </button>
              <button className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#segments" className="hover:text-accent transition-colors">Segments</a></li>
              <li><a href="#ecosystem" className="hover:text-accent transition-colors">Ecosystem</a></li>
              <li><a href="#team" className="hover:text-accent transition-colors">Team</a></li>
              <li><a href="#impact" className="hover:text-accent transition-colors">Impact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-accent transition-colors">Technology Solutions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Conservation Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Education & Training</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Community Development</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Nairobi, Kenya<br />East Africa</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@mwanawev.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>+254 700 000 000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center text-sm opacity-70">
          <p>© 2025 MwanaWev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
