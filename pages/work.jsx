import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

const work = () => {
  return (
    <div>
      <Hero
        heading="My Portfolio"
        message="These are some of the pictures I have taken while traveling around."
      />
     <Portfolio/>
    </div>
  );
};

export default work;
