import useFetch from "../fetch/UseFetch";
import React, { useState, useEffect } from "react";
import TweetCard from "./TweetCard";
import TrendCard from "./TrendCard";

export default function Body() {
  const [dataPost] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [dataUser] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [updateDataPost, setUpdateDataPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (dataPost && dataUser) {
        const updatedDataPost = await Promise.all(
          dataPost.map(async (post) => {
            let user = dataUser.find((user) => user.id === post.userId);
            return {
              ...post,
              name: user && user.name ? user.name : "",
              username: user && user.username ? user.username : "",
            };
          })
        );
        setUpdateDataPost(updatedDataPost);
      }
    };

    fetchData();
  }, [dataPost, dataUser]);
  return (
    <>
      <link rel="./index.css" href="" />
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8">
            {updateDataPost.map((post) => (
              <TweetCard key={post.id} post={post} />
            ))}
          </div>
          <TrendCard />
        </div>
      </div>
    </>
  );
}
