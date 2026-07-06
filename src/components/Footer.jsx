import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white">Y.M. Smart Living</h2>
            <p className="font-light leading-relaxed text-sm">
              Designing functional, elegant, and personalized interiors that reflect your lifestyle and vision. Your space, perfectly crafted.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#d4a373] hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#d4a373] hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#d4a373] hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#d4a373] hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 font-light text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold mb-6 text-lg">Services</h3>
            <ul className="space-y-3 font-light text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Residential Interiors</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Interiors</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Modular Kitchens</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Furniture</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Turnkey Solutions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4 font-light text-sm">
              <li>
                <span className="block text-white mb-1">Address:</span>
                Bangalore, Karnataka, India
              </li>
              <li>
                <span className="block text-white mb-1">Phone:</span>
                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 12345 67890</a>
              </li>
              <li>
                <span className="block text-white mb-1">Email:</span>
                <a href="mailto:contact@ymsmartliving.com" className="hover:text-white transition-colors">contact@ymsmartliving.com</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-stone-800 text-center text-sm font-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Y.M. Smart Living Interiors. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
