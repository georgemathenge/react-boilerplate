import React from "react";
import ProductHero from "../components/Sections/ProductHero";
import ProductHowItWorks from "../components/Sections/ProductHowItWorks";
import Pricing from "../components/Sections/Pricing";
import Contacts from  "../components/Sections/Contacts";

const Home = () => {
  return (
    <div>
     <ProductHero />
      <ProductHowItWorks />
      <Pricing />
      <Contacts />
    </div>
  );
};

export default Home;
