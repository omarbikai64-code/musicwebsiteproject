import React from "react";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Tracks from "../components/Tracks";
import Sponsors from "../components/Sponsors";

function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <Sponsors />
    </>
  );
}

export default Home;