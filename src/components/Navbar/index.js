import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand-md py-3 fixed-top">
    <div className="container" >
        <a href="" className="navbar-brand">

            <h3 className="d-inline align-middle"></h3>
        </a>
        <button className="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>

</nav>
  );
}

export default Navbar;
