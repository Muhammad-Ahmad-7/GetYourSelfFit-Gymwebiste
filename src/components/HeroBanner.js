import React from "react";
import "../css/style.css";

const HeroBanner = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-head-container">
          <h1 style={{ fontSize: "3rem" }} className="text-center heading1">
            Unleash Your Inner Strength
          </h1>
          <h1 style={{ fontSize: "2rem" }} className="text-center heading2">
            Empowering Lives, One Rep at a Time <br />
            Start Your Fitness Today!
          </h1>
          <br />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
