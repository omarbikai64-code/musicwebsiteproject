import React from "react";
import "../styles/Musicly.css";
import heroImage from "../assets/im1.jpg";

function Hero() {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="overlay"></div>

      <div className="hero-text">
        <h1>Welcome to Musicly</h1>
        <p>Your best tool to increase your creativity</p>
      </div>
    </div>
  );
}

export default Hero;