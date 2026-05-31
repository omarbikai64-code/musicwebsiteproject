import "../styles/Artist.css";
import { Link, useNavigate } from "react-router-dom";

import im1 from "../assets/im1.jpg";
import im2 from "../assets/im2.jpg";
import im3 from "../assets/im3.jpg";
import im4 from "../assets/im4.jpg";

const Artist = () => {
  const navigate = useNavigate();

  const artists = [
    { id: "1", name: "The Weeknd", genre: "Pop", image: im1 },
    { id: "2", name: "Drake", genre: "Hip Hop", image: im2 },
    { id: "3", name: "Taylor Swift", genre: "Pop", image: im3 },
    { id: "4", name: "Ed Sheeran", genre: "Pop", image: im4 },
    { id: "5", name: "Dua Lipa", genre: "Pop", image: im1 },
    { id: "6", name: "Post Malone", genre: "Hip Hop", image: im2 },
    { id: "7", name: "Billie Eilish", genre: "Alt", image: im3 },
    { id: "8", name: "Ariana Grande", genre: "Pop", image: im4 },
    { id: "9", name: "Justin Bieber", genre: "Pop", image: im1 },
    { id: "10", name: "Travis Scott", genre: "Hip Hop", image: im2 },
  ];

  const firstColumn = artists.slice(0, 5);
  const secondColumn = artists.slice(5, 10);

  return (
    <div className="artists-page">

      {/* ================= TOP 10 ================= */}
      <div className="top10-wrapper">
        <h1 className="section-title">Top 10 Artists</h1>

        <div className="top10-grid">

          {/* LEFT COLUMN */}
          <div className="top10-column">
            {firstColumn.map((artist, index) => (
              <div key={artist.id} className="top10-row">

                <span className="rank">#{index + 1}</span>

                <img src={artist.image} alt="" className="top10-img" />

                <span className="top10-name">{artist.name}</span>

                <Link
                  to="/aprofile"
                  state={artist}
                  className="top10-btn"
                >
                  View Profile
                </Link>

              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="top10-column">
            {secondColumn.map((artist, index) => (
              <div key={artist.id} className="top10-row">

                <span className="rank">#{index + 6}</span>

                <img src={artist.image} alt="" className="top10-img" />

                <span className="top10-name">{artist.name}</span>

                <Link
                  to="/aprofile"
                  state={artist}
                  className="top10-btn"
                >
                  View Profile
                </Link>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= FEATURED ================= */}
      <h1 className="section-title">Artists That offers Connect </h1>

      <div className="featured-grid">
        {artists.map((artist) => (
          <div key={artist.id} className="featured-card">

            <img src={artist.image} className="featured-img" />

            <h3>{artist.name}</h3>
            <p className="genre">{artist.genre}</p>

            <div className="featured-buttons">
              <Link to="/aprofile" state={artist} className="profile-btn">
                Check Profile
              </Link>

              <button
                className="connect-btn"
                onClick={() => navigate("/chat", { state: artist })}
              >
                Connect
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Artist;