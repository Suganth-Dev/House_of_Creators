import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Community from '../Components/home/Community';
import Spaces from '../components/home/Spaces';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';
import Cta from '../components/home/Cta';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

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
