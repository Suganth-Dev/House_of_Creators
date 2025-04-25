import React, { useEffect, useRef } from 'react';
import { Palette, Users, Coffee, Lightbulb, Wifi, Calendar } from 'lucide-react';

const Feature = ({ icon, title, description, delay }) => {
  const featureRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('translate-y-10', 'opacity-0');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={featureRef}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-700 translate-y-10 opacity-0"
    >
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-800 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef(null);

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

  const features = [
    {
      icon: <Palette size={24} />,
      title: 'Creative Studios',
      description: 'Dedicated spaces for artistic expression, equipped with tools and resources for various creative disciplines.',
      delay: 0,
    },
    {
      icon: <Users size={24} />,
      title: 'Collaborative Environment',
      description: 'Shared workspaces designed to foster interaction, idea exchange, and collaborative projects.',
      delay: 100,
    },
    {
      icon: <Coffee size={24} />,
      title: 'Community Kitchen',
      description: 'Fully equipped communal kitchen for shared meals and social gatherings that strengthen community bonds.',
      delay: 200,
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Mentorship Programs',
      description: 'Access to industry professionals who provide guidance, feedback, and career development support.',
      delay: 300,
    },
    {
      icon: <Wifi size={24} />,
      title: 'High-Speed Connectivity',
      description: 'Enterprise-grade internet and technology infrastructure to support digital creation and remote work.',
      delay: 400,
    },
    {
      icon: <Calendar size={24} />,
      title: 'Regular Events',
      description: 'Workshops, exhibitions, and social gatherings that promote skill-sharing and community building.',
      delay: 500,
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={sectionRef}
          className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700 translate-y-10 opacity-0"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Designed for <span className="bg-gradient-to-r from-indigo-800 to-indigo-600 bg-clip-text text-transparent">Creation</span> and <span className="bg-gradient-to-r from-coral-500 to-coral-400 bg-clip-text text-transparent">Collaboration</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our spaces and amenities are crafted to nurture creativity, foster community, and enable your best work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
