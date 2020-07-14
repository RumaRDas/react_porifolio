import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" to="/">
        Pupster
      </a>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              to="/discover"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              Discover
            </a>
          </li>
          <li className="nav-item">
            <a
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
