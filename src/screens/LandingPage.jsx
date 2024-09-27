import React from 'react'
import HeroSection from "../components/Elements/HeroSection";
import Features from '../components/Sections/Features';

const LandingPage = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="/hero2.jpg"
        // title="Welcome to Somesha"
        // subtitle="with AI"
        cardImage="/hero1.jpeg"
        registerButton={null}
        description="What began as an experiment and our team asking the question, what if we focused on curating, capturing and releasing the most innovative stories."
      />
      <Features />
    </div>
  );
}

export default LandingPage;