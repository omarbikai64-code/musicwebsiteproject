import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">

        <Link className="navbar-brand" to="/">
          Musicly
        </Link>

        {/* Toggle button (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV ITEMS WRAPPER (IMPORTANT) */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/artist">Artists</Link>
            </li>

          </ul>

          <Link className="btn btn-danger ms-lg-3" to="/login">
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;