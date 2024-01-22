import useFetch from "../fetch/UseFetch";
import React, { useState, useEffect } from "react";
import TweetCard from "./TweetCard";
import TrendCard from "./TrendCard";
import { useSelector } from "react-redux";

export default function Body() {
  const [dataPost] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [dataUser] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [updateDataPost, setUpdateDataPost] = useState([]);
  const user = useSelector((state) => state.user.user);

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
    <div className="bg-black">
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-3">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <h3>{user.name}</h3>
                  <div style={{ width: "200px" }}>
                    <hr className="text-light"/>
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginTop: "-7px" }}>
                <i>
                  @{user.username} &mdash; {user.email}
                </i>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {updateDataPost.map((post) => (
              <TweetCard key={post.id} post={post} />
            ))}
          </div>
          <TrendCard />
        </div>
      </div>
    </div>
  );
}
