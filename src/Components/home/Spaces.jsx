import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Spaces = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const slideRefs = useRef([]);

  const spaces = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Private Studios",
      description: "Personal creative spaces designed for focus and individual work, with abundant natural light and customizable setups.",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Collaboration Zones",
      description: "Open areas equipped with movable furniture, whiteboards, and technology for group projects and brainstorming sessions.",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1580466/pexels-photo-1580466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Community Kitchen",
      description: "A spacious kitchen for shared meals, cooking workshops, and social gatherings that foster connection through food.",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Lounge Areas",
      description: "Comfortable spaces for relaxation, casual conversations, and networking events with fellow community members.",
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/349749/pexels-photo-349749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Private Suites",
      description: "Modern, thoughtfully designed living quarters that provide privacy and comfort after a day of creation and collaboration.",
    }
  ];

  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, spaces.length);
  }, [spaces.length]);

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === spaces.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? spaces.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="spaces" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700 translate-y-10 opacity-0"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Thoughtfully Designed <span className="bg-gradient-to-r from-indigo-800 to-indigo-600 bg-clip-text text-transparent">Spaces</span>
          </h2>
          <p className="text-xl text-gray-600">
            Explore our beautiful spaces crafted to inspire creativity, foster collaboration, and provide comfort.
          </p>
        </div>

        <div className="relative">
          {/* Main slider */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {spaces.map((space, index) => (
                <div 
                  key={space.id}
                  ref={el => slideRefs.current[index] = el}
                  className="w-full flex-shrink-0"
                >
                  <div className="relative h-96 md:h-[32rem]">
                    <img 
                      src={space.image} 
                      alt={space.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{space.title}</h3>
                      <p className="text-white/90">{space.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-800 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-800 z-10"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {spaces.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-indigo-800 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spaces;
