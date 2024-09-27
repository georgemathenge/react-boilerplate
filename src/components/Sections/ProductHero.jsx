import React from 'react'
import HeroSection from '../Elements/HeroSection'

const ProductHero = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="/hero5.jpg"
        title="Welcome to Track"
        subtitle="Io ."
        // cardImage="/hero1.jpeg"
        registerButton="Register"
        description="What began as an experiment and our team asking the question, what if we focused on curating, capturing and releasing the most innovative stories."
      />
    </div>
  );
}

export default ProductHero