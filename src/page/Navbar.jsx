import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
  <link rel="./index.css" href="" />
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
      <img src="./img.png" alt="Twittir Logo" height="50" width="80" />
        </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <Link to={"/explore"}>
          <li class="nav-item">
            <a class="nav-link" href="#">Explore</a>
          </li>
          </Link>
          <li class="nav-item">
            <a class="nav-link active" href="#">Profile</a>
          </li>
          <Link to ={"/login"}>
          <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}
