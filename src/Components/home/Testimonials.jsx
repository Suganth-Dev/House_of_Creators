import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      content: "Living at House of Creators transformed my career. The connections I've made and the inspiration I've found have been invaluable to my growth as an artist.",
      author: "Elena Rodriguez",
      role: "Ceramic Artist",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      content: "The collaborative environment here is unlike anything I've experienced. My business has grown exponentially thanks to the mentorship and resources available.",
      author: "Marcus Kim",
      role: "Tech Entrepreneur",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      content: "Moving to House of Creators was the best decision I made. Being surrounded by such diverse, talented individuals has pushed my craft to new heights.",
      author: "Zoe Mitchell",
      role: "Fashion Designer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Auto-rotate testimonials every 5 seconds
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    // Reset interval when manually changing
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-indigo-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-700 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-800 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={sectionRef}
          className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700 translate-y-10 opacity-0"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Voices from Our <span className="text-coral-400">Community</span>
          </h2>
          <p className="text-xl text-indigo-200">
            Hear what our residents have to say about their experience at House of Creators.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[32rem] md:h-80">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 flex flex-col md:flex-row items-center gap-8 ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20 pointer-events-none'
                }`}
              >
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="relative">
                    <div className="w-48 h-48 bg-indigo-700 rounded-full absolute -top-2 -left-2"></div>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-48 h-48 rounded-full object-cover relative z-10 border-4 border-indigo-700"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-coral-500 p-2 rounded-full">
                      <Quote size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <blockquote className="text-xl md:text-2xl italic mb-6 text-indigo-100">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-lg">{testimonial.author}</p>
                    <p className="text-indigo-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-coral-500 w-6' : 'bg-indigo-700'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
