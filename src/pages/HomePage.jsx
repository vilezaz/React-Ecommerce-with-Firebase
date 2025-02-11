import React from "react";
import Products from "../Components/Products";
import HeroSec from "../Components/HeroSec";

const HomePage = () => {
  return (
    <div className="md:px-28 px-2 py-20">
      <HeroSec />
      <Products />
    </div>
  );
};

export default HomePage;
