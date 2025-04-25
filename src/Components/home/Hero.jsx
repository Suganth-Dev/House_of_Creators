import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10', 'opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-coral-100 rounded-full blur-3xl opacity-60 z-0"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-70 z-0"></div>

      <div
        ref={heroRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 transition-all duration-1000 translate-y-10 opacity-0 z-10"
      >
        <div className="lg:w-1/2 space-y-8">
          <div>
            <span className="inline-block bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Launching Spring 2025
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              A home for those who{' '}
              <span className="bg-gradient-to-r from-indigo-800 to-indigo-600 bg-clip-text text-transparent">
                create
              </span>{' '}
              the future
            </h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            House of Creators is a co-living community designed for artists, entrepreneurs, and change-makers. Live,
            work, and grow alongside like-minded individuals in a space that inspires creativity and collaboration.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#apply" variant="primary">
              Apply to Join <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button href="#spaces" variant="outline">
              Explore Spaces
            </Button>
          </div>

          <div className="flex items-center space-x-4 pt-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Community member"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-gray-600">
              Join <span className="font-medium text-indigo-800">42+ creators</span> already pre-registered
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-indigo-200 rounded-tl-3xl rounded-br-3xl transform rotate-6 translate-x-4 translate-y-4"></div>
          <img
            src="https://images.pexels.com/photos/7147720/pexels-photo-7147720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Creators collaborating in a bright, modern space"
            className="relative z-10 w-full h-auto rounded-tl-3xl rounded-br-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
