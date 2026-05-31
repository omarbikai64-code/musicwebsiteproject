import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const track = location.state;

  const [paymentMethod, setPaymentMethod] = useState("Visa");

  if (!track) {
    return (
      <div className="checkout-page">
        <div className="checkout-card">
          <h2>No Track Selected</h2>

          <p>Please select a track from the shop.</p>

          <button
            className="buy-btn"
            onClick={() => navigate("/shop")}
          >
            Back To Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      <div className="checkout-card">

        <img
          src={track.img}
          alt={track.title}
          className="checkout-image"
        />

        <div className="checkout-info">

          <h1>{track.title}</h1>

          <p>
            High-quality royalty-free music ready for videos,
            podcasts, social media content, and creative projects.
          </p>

          <div className="track-details">

            <div>
              <strong>Artist</strong>
              <span>{track.artist || "808 Melo"}</span>
            </div>

            <div>
              <strong>Genre</strong>
              <span>{track.type}</span>
            </div>

            <div>
              <strong>BPM</strong>
              <span>{track.bpm || "133"} BPM</span>
            </div>

            <div>
              <strong>Length</strong>
              <span>{track.duration || "3:25"}</span>
            </div>

            <div>
              <strong>License</strong>
              <span>Royalty Free</span>
            </div>

            <div>
              <strong>Quality</strong>
              <span>320kbps MP3</span>
            </div>

          </div>

          <div className="price-section">
            <h2>${track.price}</h2>
          </div>

          <div className="payment-section">

            <h3>Payment Method</h3>

            <select
              value={paymentMethod}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
            >
              <option>Visa</option>
              <option>Mastercard</option>
              <option>PayPal</option>
            </select>

            <button
              className="buy-btn"
              onClick={() =>
                navigate("/dealdone", {
                  state: {
                    track,
                    paymentMethod,
                  },
                })
              }
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;