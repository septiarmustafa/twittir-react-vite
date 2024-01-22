// NotFoundCard.jsx
import React from "react";

const NotFoundCard = ({ searchName }) => (
  <div className="row justify-content-center bg-black">
    <div className="col">
      <div className="card tweet-card bg-dark text-light">
        <div className="card-body">
          <div className="media">
            <div></div>
            <div className="media-body">
              <h5 className="mt-0">Not Found</h5>
              <p>No matching results found for '{searchName}'</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NotFoundCard;
