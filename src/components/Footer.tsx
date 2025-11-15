import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/Asset 55.png";

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-6">
          
          {/* Brand */}
          <div className="h-40 flex items-center overflow-hidden">
            <img
              src={logo}
              alt="MwanaWev Logo"
              className="max-h-full w-auto brightness-0 invert object-contain"
            />
          </div>

          {/* Quick Links */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#segments" className="hover:text-accent transition-colors">Segments</a></li>
              <li><a href="#ecosystem" className="hover:text-accent transition-colors">Ecosystem</a></li>
              <li><a href="#team" className="hover:text-accent transition-colors">Team</a></li>
              <li><a href="#impact" className="hover:text-accent transition-colors">Impact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-accent transition-colors">Technology Solutions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Conservation Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Education & Training</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Community Development</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Bulawayo, Zimbabwe<br />Southern Africa</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@mwanawev.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>+263 700 000 000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/20 text-center text-sm opacity-70">
          <p>© 2025 Mwanawev. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
