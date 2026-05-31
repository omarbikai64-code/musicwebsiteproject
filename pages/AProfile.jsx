import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/AProfile.css";

function AProfile() {
  const location = useLocation();
  const navigate = useNavigate();

  const artist = location.state;

  console.log("FULL LOCATION:", location);
  console.log("ARTIST:", artist);

  const [playingId, setPlayingId] = useState(null);
  const audioRefs = useRef({});

  // 🔥 FOLLOW SYSTEM
  const [isFollowing, setIsFollowing] = useState(false);
  const baseFollowers = Number(artist.followers) || 0;
  const [followers, setFollowers] = useState(baseFollowers);

  if (!artist) {
    return (
      <div className="aprofile-page">
        <h2>No artist selected</h2>
        <button onClick={() => navigate("/artist")}>
          Back
        </button>
      </div>
    );
  }

  const topTracks = [
    { id: 1, name: "Midnight Vibes", audio: "/audio/chill.mp3", duration: "3:42" },
    { id: 2, name: "Neon Drive", audio: "/audio/night.mp3", duration: "4:10" },
    { id: 3, name: "Soft Dreams", audio: "/audio/acoustic.mp3", duration: "2:58" },
  ];

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

  // 🔥 FOLLOW CLICK HANDLER
  const handleFollow = () => {
    if (!isFollowing) {
      setIsFollowing(true);
      setFollowers((prev) => prev + 1);
    } else {
      setIsFollowing(false);
      setFollowers((prev) => prev - 1);
    }
  };

  return (
    <div className="aprofile-page">

      {/* HEADER */}
      <div className="aprofile-header">

        <img src={artist.image} alt={artist.name} />

        <div className="aprofile-info">

          <h1>{artist.name}</h1>
          <p>{artist.genre}</p>

          <div className="aprofile-stats">

            <div>
              <strong>Followers</strong>
              <span className="followers-count">{followers}</span>
            </div>

            <div>
              <strong>Sales</strong>
              <span>{artist.sales || "0"}</span>
            </div>

            <div>
              <strong>Tracks</strong>
              <span>{artist.tracks || "0"}</span>
            </div>

          </div>

          <button
            className={`follow-btn ${isFollowing ? "following" : ""}`}
            onClick={handleFollow}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>

        </div>
      </div>

      {/* ================= MIDDLE SECTION ================= */}
      <div className="aprofile-middle">

        {/* LEFT - TOP 3 TRACKS */}
        <div className="aprofile-top3">

          <h2>Top 3 Tracks</h2>

          {topTracks.map((track) => (
            <div className="mini-track-row" key={track.id}>

              <button
                className="mini-play"
                onClick={() => togglePlay(track.id)}
              >
                {playingId === track.id ? "❚❚" : "▶"}
              </button>

              <span className="mini-name">
                {track.name}
              </span>

              <span className="mini-duration">
                {track.duration}
              </span>

              <audio
                ref={(el) => (audioRefs.current[track.id] = el)}
                src={track.audio}
              />

            </div>
          ))}

        </div>

        {/* RIGHT - DESCRIPTION */}
        <div className="aprofile-desc">

          <h2>About {artist.name}</h2>

          <p>
            {artist.name} is a music artist known for creating
            emotional and cinematic soundscapes in the {artist.genre} genre.
            His music blends modern beats with deep atmospheric layers.
          </p>

          <p>
            With a growing global fanbase, he continues to release
            music that connects deeply with listeners worldwide.
          </p>

        </div>

      </div>

      {/* SHOP BUTTON */}
      <div className="aprofile-shop-btn-container">
        <button
          className="shop-btn"
          onClick={() => navigate("/shop")}
        >
          Check More in the Shop
        </button>
      </div>

    </div>
  );
}

export default AProfile;