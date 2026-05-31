import React from "react";
import "../styles/Login.css";
import bg from "../assets/im7.jpg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="auth-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="auth-box">
        <h2>Login to Musicly</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <Link to="/shop">
  <button>Login</button>
</Link>
      </div>
    </div>
  );
}

export default Login;