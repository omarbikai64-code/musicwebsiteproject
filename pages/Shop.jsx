import React, { useState, useRef, useEffect } from "react";
import "../styles/Shop.css";
import { useNavigate } from "react-router-dom";

import im2 from "../assets/im2.jpg";
import im3 from "../assets/im3.jpg";
import im4 from "../assets/im4.jpg";
import im5 from "../assets/im5.jpg";
import im8 from "../assets/im8.jpg";
import im9 from "../assets/im9.jpg";
import im10 from "../assets/im10.jpg";
import im11 from "../assets/im11.jpg";

import chillAudio from "../assets/audio/chill.mp3";
import nightAudio from "../assets/audio/night.mp3";
import acousticAudio from "../assets/audio/acoustic.mp3";

const tracks = [
  { id: 1, title: "Chill Vibes Pack", type: "chill", price: 15, img: im2, audio: chillAudio },
  { id: 2, title: "Night Drive Pack", type: "electronic", price: 20, img: im3, audio: nightAudio },
  { id: 3, title: "Acoustic Soul", type: "acoustic", price: 12, img: im4, audio: acousticAudio },
  { id: 4, title: "LoFi Study Pack", type: "chill", price: 9, img: im5, audio: chillAudio },
  { id: 5, title: "Jazz Nights", type: "chill", price: 15, img: im8, audio: chillAudio },
  { id: 6, title: "Energy Rush", type: "electronic", price: 20, img: im9, audio: nightAudio },
  { id: 7, title: "Acoustic Dreams", type: "acoustic", price: 12, img: im10, audio: acousticAudio },
  { id: 8, title: "Study Beats", type: "chill", price: 9, img: im11, audio: chillAudio },
];

function Shop() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [playingId, setPlayingId] = useState(null);
  const [progress, setProgress] = useState({});

  const navigate = useNavigate();
  const audioRefs = useRef({});

  const filteredTracks = tracks.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || item.type === filter;
    return matchSearch && matchFilter;
  });

  // ▶ PLAY / PAUSE
  const togglePlay = (id) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    if (playingId === id) {
      audio.pause();
      setPlayingId(null);
    } else {
      Object.values(audioRefs.current).forEach((a) => a.pause());
      audio.play();
      setPlayingId(id);
    }
  };

  // ⏱ LIVE PROGRESS TRACKING
  const handleTimeUpdate = (id) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    const percent = (audio.currentTime / audio.duration) * 100;

    setProgress((prev) => ({
      ...prev,
      [id]: percent || 0,
    }));
  };

  return (
    <div className="shop-page">

      <h1 className="shop-title">Musicly Shop</h1>

      {/* SEARCH */}
      <div className="shop-search">
        <input
          type="text"
          placeholder="Search tracks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FILTER */}
      <div className="shop-filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("chill")}>Chill</button>
        <button onClick={() => setFilter("electronic")}>Electronic</button>
        <button onClick={() => setFilter("acoustic")}>Acoustic</button>
      </div>

      {/* GRID */}
      <div className="shop-grid">

        {filteredTracks.map((item) => (
          <div className="shop-card" key={item.id}>

            {/* IMAGE */}
            <div className="shop-image-wrapper">

              <img src={item.img} alt={item.title} />

              {/* AUDIO */}
              <audio
                ref={(el) => (audioRefs.current[item.id] = el)}
                src={item.audio}
                onTimeUpdate={() => handleTimeUpdate(item.id)}
                onEnded={() => setPlayingId(null)}
              />

              {/* POND5 STYLE PLAYER BAR */}
              <div className="mini-player">

                <button
                  className={`mini-play-btn ${
                    playingId === item.id ? "active" : ""
                  }`}
                  onClick={() => togglePlay(item.id)}
                >
                  {playingId === item.id ? "❚❚" : "▶"}
                </button>

                {/* waveform bars */}
                <div className="waveform">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>

                {/* progress bar */}
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress[item.id] || 0}%` }}
                  ></div>
                </div>

              </div>
            </div>

            {/* INFO */}
            <div className="shop-info">
              <h3>{item.title}</h3>
              <p>{item.type}</p>
              <span>{item.price}$</span>

              <button
                className="buy-btn"
                onClick={() =>
                  navigate("/checkout", { state: item })
                }
              >
                Buy Now
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Shop;