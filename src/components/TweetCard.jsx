// TweetCard.jsx
import React from "react";

const TweetCard = ({ post }) => (
  <div key={post.id}>
    <div className="row justify-content-end">
      <div className="col-lg-8">
        <div className="card tweet-card">
          <div className="card-body">
            <div className="media">
              <img
                src="https://w7.pngwing.com/pngs/358/473/png-transparent-computer-icons-user-profile-person-child-heroes-public-relations.png"
                className="mr-3 tweet-avatar"
                alt="User Avatar"
              />
              <div className="media-body">
                <h5 className="mt-0">{post.name}</h5>
                <p className="mt-0 text-secondary">@{post.username}</p>
                <p>{post.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TweetCard;
