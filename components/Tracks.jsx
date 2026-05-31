import React, { useState } from "react";
import "../styles/Musicly.css";

import im2 from "../assets/im2.jpg";
import im3 from "../assets/im3.jpg";
import im4 from "../assets/im4.jpg";

import chillAudio from "../assets/audio/chill.mp3";
import nightAudio from "../assets/audio/night.mp3";
import acousticAudio from "../assets/audio/acoustic.mp3";

function Tracks() {
  const [filter, setFilter] = useState("all");

  const tracks = [
    {
      title: "Chill Vibes",
      artist: "Alex Miraj",
      image: im2,
      category: "chill",
      price: "33$",
      audio: chillAudio,
    },

    {
      title: "Night Drive",
      artist: "Kevin",
      image: im3,
      category: "electronic",
      price: "20$",
      audio: nightAudio,
    },

    {
      title: "Acoustic Soul",
      artist: "Tyler",
      image: im4,
      category: "acoustic",
      price: "15$",
      audio: acousticAudio,
    },
  ];

  const filteredTracks =
    filter === "all"
      ? tracks
      : tracks.filter((track) => track.category === filter);

  return (
    <section className="tracks-section">
      <h2 className="text-center mb-4">Our Tracks</h2>

      <div className="track-filters text-center mb-4">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("chill")}>Chill</button>
        <button onClick={() => setFilter("electronic")}>Electronic</button>
        <button onClick={() => setFilter("acoustic")}>Acoustic</button>
      </div>

      <div className="tracks-container">
        {filteredTracks.map((track, index) => (
          <div className="track-wrapper" key={index}>
            <div className="track-card">
              <img src={track.image} alt={track.title} />

              <div className="track-info">
                <h5>{track.title}</h5>
                <p>{track.artist}</p>
                <span>{track.price}</span>

                <audio controls className="track-player">
                  <source src={track.audio} type="audio/mpeg" />
                  Your browser does not support audio.
                </audio>
              </div>
            </div>

            <a
              href="https://your-sponsor-website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-btn"
            >
              Visit Sponsor
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tracks;