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
          <Link to={"/home"}>
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          </Link>
          <li class="nav-item">
            <a class="nav-link active" href="#">Explore</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Profile</a>
          </li>
        <li class="nav-item">
          <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}