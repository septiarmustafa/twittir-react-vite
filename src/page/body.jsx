import React from 'react'

export default function Body
() {
  return (
    <>
    <link rel="./index.css" href="" />
    <div class="container mt-4">
    <div class="row">
      <div class="col-lg-8">

        <div class="card tweet-card">
          <div class="card-body">
            <div class="media">
              <img src="https://via.placeholder.com/50" class="mr-3 tweet-avatar" alt="User Avatar"/>
              <div class="media-body">
                <h5 class="mt-0">John Doe</h5>
                <p>This is a sample tweet. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            </div>
          </div>
        </div>

        <div class="card tweet-card">
          <div class="card-body">
            <div class="media">
              <img src="https://via.placeholder.com/50" class="mr-3 tweet-avatar" alt="User Avatar"/>
              <div class="media-body">
                <h5 class="mt-0">Ibnu</h5>
                <p>This is a sample tweet. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            </div>
          </div>
        </div>

        <div class="card tweet-card">
          <div class="card-body">
            <div class="media">
              <img src="https://via.placeholder.com/50" class="mr-3 tweet-avatar" alt="User Avatar"/>
              <div class="media-body">
                <h5 class="mt-0">Fabian</h5>
                <p>This is a sample tweet. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-lg-4">
        <div class="card trend-card">
          <div class="card-header">
            Trends
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">#Bootstrap</li>
            <li class="list-group-item">#WebDevelopment</li>
            <li class="list-group-item">#Coding</li>
            <li class="list-group-item">#Golang</li>
            <li class="list-group-item">#FullStack Developer</li>
            <li class="list-group-item">#React</li>
            <li class="list-group-item">#Java</li>
            <li class="list-group-item">#Spring</li>
            <li class="list-group-item">#JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}
