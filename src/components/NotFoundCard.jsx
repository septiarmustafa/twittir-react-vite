// NotFoundCard.jsx
import React from "react";

const NotFoundCard = ({ searchName }) => (
  <div className="row justify-content-center">
    <div className="col">
      <div className="card tweet-card">
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
