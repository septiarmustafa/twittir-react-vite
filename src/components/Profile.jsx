import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TweetCard from "./TweetCard";

export default function Profile() {
  const user = useSelector((state) => state.user.user);
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + user.id)
      .then((response) => response.json())
      .then((data) => setPosts(data.map(item => {
        return { 
          ...item, 
          name: user.name, 
          username: user.username }
      })))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const userImageInitial = (name) => {
    return name.substring(0, 1);
  };

  function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
    return true;
  }

  return (
    <>
      {!isEmpty(user) && (
        <div className="container-fluid text-light">
          <div className="row mt-5 mb-3 text-center">
            <div className="col">
              <h3>{user.name}</h3>
            </div>
          </div>
          <div className="row text-center">
            <i>
              @{user.username} &mdash; {user.email}
            </i>
          </div>
          <div className="row text-center">
            <div className="col user-details text-light">
              {`${user.address.street} st., ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
            </div>
          </div>
          <hr />

          {posts &&
            posts.map((post) => (
              <TweetCard post={post} className="text-light"/>
          ))}
        </div>
      )}
    </>
  );
}
