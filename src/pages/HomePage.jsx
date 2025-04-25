import React from 'react';
import Hero from '../Components/home/Hero';
import Features from '../Components/home/Features';
import Community from '../Components/home/Community';
import Spaces from '../Components/home/Spaces';
import Testimonials from '../Components/home/Testimonials';
import Contact from '../Components/home/Contact';
import Cta from '../Components/home/Cta';
import Header from '../Components/layout/Header';
import Footer from '../Components/layout/Footer';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Community />
      <Spaces />
      <Testimonials />
      <Contact />
      <Cta />
      <Footer />
    </div>
  );
};

export default HomePage;
