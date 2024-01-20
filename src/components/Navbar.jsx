import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <link rel="stylesheet" href="./index.css" />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src="./img.png" alt="Twittir Logo" height="50" width="80" />
          </NavLink>
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
                <NavLink exact to="/" className="nav-link" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/explore" className="nav-link" activeClassName="active">
                  Explore
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link" activeClassName="active">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" activeClassName="active">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
