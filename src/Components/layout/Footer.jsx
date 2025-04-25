import React from 'react';
import { PenTool, Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <PenTool className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">
                House of Creators
              </span>
            </div>
            <p className="mb-4">
              A co-living community designed for artists, entrepreneurs, and change-makers who are shaping the future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#community" className="hover:text-indigo-400 transition-colors">Community</a></li>
              <li><a href="#spaces" className="hover:text-indigo-400 transition-colors">Spaces</a></li>
              <li><a href="#testimonials" className="hover:text-indigo-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Apply Now</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-indigo-400 mt-1 mr-2" />
                <span>123 Innovation Street, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-indigo-400 mr-2" />
                <a href="mailto:hello@houseofcreators.co" className="hover:text-indigo-400 transition-colors">
                  hello@houseofcreators.co
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-indigo-400 mr-2" />
                <a href="tel:+14155550123" className="hover:text-indigo-400 transition-colors">
                  (415) 555-0123
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} House of Creators. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
