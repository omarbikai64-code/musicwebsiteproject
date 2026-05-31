import React from "react";
import "../styles/Musicly.css";

import spotify from "../assets/spotify.jpg";
import youtubeMusic from "../assets/youtube-music.jpg";
import appleMusic from "../assets/apple-music.jpg";

function Sponsors() {
  const sponsors = [
    {
      name: "Spotify",
      image: spotify,
      link: "https://spotify.com",
    },
    {
      name: "YouTube Music",
      image: youtubeMusic,
      link: "https://music.youtube.com",
    },
    {
      name: "Apple Music",
      image: appleMusic,
      link: "https://music.apple.com",
    },
  ];

  return (
    <section className="tracks-section">
      <h2 className="text-center mb-4">
        Our Sponsors
      </h2>

      <div className="tracks-container">
        {sponsors.map((sponsor, index) => (
          <div className="track-card" key={index}>
            <img src={sponsor.image} alt={sponsor.name} />

            <div className="track-info">
              <h5>{sponsor.name}</h5>

              <a
                href={sponsor.link}
                target="_blank"
                rel="noreferrer"
                className="sponsor-btn"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sponsors;