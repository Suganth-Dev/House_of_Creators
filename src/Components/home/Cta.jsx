import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Cta = () => {
  const ctaRef = useRef(null);

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

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section id="apply" className="py-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ctaRef}
          className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 translate-y-10 opacity-0"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Join Our <span className="bg-gradient-to-r from-indigo-800 to-indigo-600 bg-clip-text text-transparent">Creative Community</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Applications for Spring 2025 are now open. Secure your place in our community of innovators, artists, and entrepreneurs.
              </p>
              <div className="space-y-4">
                <Button href="#" variant="primary" className="w-full md:w-auto">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-gray-500">
                  Limited spaces available. Early applicants receive priority consideration.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 bg-indigo-800 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
              <ul className="space-y-4">
                {[
                  "A thorough application process to ensure community fit",
                  "Virtual or in-person tour of the space",
                  "Interview with community members",
                  "Decision within 2 weeks of application",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-coral-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="ml-3 text-indigo-100">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-indigo-700">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img 
                        key={i}
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Community member"
                        className="w-8 h-8 rounded-full border-2 border-indigo-800"
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-indigo-100">
                    Join <span className="font-medium text-white">42+ creators</span> already pre-registered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
