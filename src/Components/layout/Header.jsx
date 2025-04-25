import React, { useState, useEffect } from 'react';
import { Menu, X, PenTool } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <PenTool className="h-8 w-8 text-indigo-800" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-800 to-indigo-600 bg-clip-text text-transparent">
              House of Creators
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-800 transition-colors">Features</a>
            <a href="#community" className="text-gray-700 hover:text-indigo-800 transition-colors">Community</a>
            <a href="#spaces" className="text-gray-700 hover:text-indigo-800 transition-colors">Spaces</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-800 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-800 transition-colors">Contact</a>
            <Button href="#apply" variant="primary">Apply Now</Button>
          </nav>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#community" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Community
            </a>
            <a 
              href="#spaces" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Spaces
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button href="#apply" variant="primary" fullWidth onClick={() => setIsOpen(false)}>
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
