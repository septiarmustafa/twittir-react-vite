import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <link rel="./index.css" href="" />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./img.png" alt="Twittir Logo" height="50" width="80" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <Link to={"/explore"}>
                <li className="nav-item">
                  <p className="nav-link" href="#">
                    Explore
                  </p>
                </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Profile
                </a>
              </li>
              <Link to={"/login"}>
                <li className="nav-item">
                  <p className="nav-link" href="#">
                    Logout
                  </p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
