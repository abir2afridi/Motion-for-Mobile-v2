import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="col-span-1">
                <div className="flex items-center space-x-1 mb-6">
                  <span className="text-[#1a237e] font-bold italic text-3xl tracking-tighter">mot/on</span>
                  <span className="text-blue-400 text-xs uppercase tracking-widest mt-2">for mobile</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                    Motion for Mobile is a social media marketing product for brands looking to produce high quality, dynamic video content. Designed with a mobile-first approach and optimised for social media platforms.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Instagram size={20}/></a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook size={20}/></a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin size={20}/></a>
                </div>
            </div>

            {/* Navigation */}
            <div>
                <h5 className="font-bold text-[#1a237e] uppercase mb-4 text-sm">Navigation</h5>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-blue-600">Home</a></li>
                    <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                    <li><a href="#" className="hover:text-blue-600">Packages</a></li>
                    <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h5 className="font-bold text-[#1a237e] uppercase mb-4 text-sm">Contact</h5>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li>Motion For Mobile</li>
                    <li>hello@motionformobile.com</li>
                    <li>+64 04 382 0007</li>
                    <li className="pt-2">Level 4, 17 Garrett Street</li>
                    <li>Te Aro, Wellington</li>
                    <li>New Zealand 6011</li>
                </ul>
            </div>

            {/* Legal */}
            <div>
                <h5 className="font-bold text-[#1a237e] uppercase mb-4 text-sm">Legal Bits</h5>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li>© 2024 Motion for Mobile Ltd</li>
                    <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
                    <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;