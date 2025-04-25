import React, { useEffect, useRef } from 'react';

const CommunityMember = ({ image, name, role, description, delay }) => {
  const memberRef = useRef(null);

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

    if (memberRef.current) {
      observer.observe(memberRef.current);
    }

    return () => {
      if (memberRef.current) {
        observer.unobserve(memberRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={memberRef}
      className="transition-all duration-700 translate-y-10 opacity-0"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-indigo-700 mb-3">{role}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Community = () => {
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

  const members = [
    {
      image: "https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Alex Rivera",
      role: "Digital Artist & Illustrator",
      description: "Alex creates immersive digital experiences and illustrations, blending traditional art techniques with cutting-edge technology.",
      delay: 0,
    },
    {
      image: "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Maya Johnson",
      role: "Sustainable Fashion Designer",
      description: "Maya's designs reimagine fashion through an eco-conscious lens, using innovative materials and zero-waste patterns.",
      delay: 100,
    },
    {
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Julian Chen",
      role: "Tech Entrepreneur",
      description: "Julian is building a platform that connects creative professionals with meaningful projects and collaborations.",
      delay: 200,
    },
    {
      image: "https://images.pexels.com/photos/5999813/pexels-photo-5999813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Sophia Patel",
      role: "Documentary Filmmaker",
      description: "Sophia creates thought-provoking documentaries that explore social issues and amplify underrepresented voices.",
      delay: 300,
    },
  ];

  return (
    <section id="community" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700 translate-y-10 opacity-0"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-indigo-800 to-indigo-600 bg-clip-text text-transparent">Community</span> of Creators
          </h2>
          <p className="text-xl text-gray-600">
            Meet the diverse community of innovators, artists, and entrepreneurs who call House of Creators home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <CommunityMember
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
              delay={member.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
