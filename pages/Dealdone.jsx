import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/DealDone.css";

function DealDone() {
  const location = useLocation();
  const navigate = useNavigate();

  const purchase = location.state;

  if (!purchase) {
    return (
      <div className="deal-page">
        <div className="deal-card">
          <h2>No Purchase Found</h2>

          <button
            className="back-btn"
            onClick={() => navigate("/shop")}
          >
            Back To Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="deal-page">

      <div className="deal-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Thank You For Your Purchase!</h1>

        <p>
          Your track has been successfully purchased.
        </p>

        <img
          src={purchase.track.img}
          alt={purchase.track.title}
          className="deal-image"
        />

        <div className="deal-info">

          <h3>Track Information</h3>

          <p><strong>Title:</strong> {purchase.track.title}</p>
          <p><strong>Artist:</strong> {purchase.track.artist}</p>
          <p><strong>Genre:</strong> {purchase.track.type}</p>
          <p><strong>BPM:</strong> {purchase.track.bpm}</p>
          <p><strong>Duration:</strong> {purchase.track.duration}</p>

          <hr />

          <h3>Payment Information</h3>

          <p>
            <strong>Method:</strong> {purchase.paymentMethod}
          </p>

          <p>
            <strong>Amount Paid:</strong> ${purchase.track.price}
          </p>

        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/shop")}
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
}

export default DealDone;