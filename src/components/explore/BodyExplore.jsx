import React, { useState, useEffect } from "react";
import TweetCard from "../TweetCard";
import NotFoundCard from "../NotFoundCard";
import useFetch from "../../fetch/UseFetch";

export default function BodyExplore() {
  const [dataPost] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [dataUser] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [updateDataPost, setUpdateDataPost] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchName, setSearchName] = useState("");

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
        setSearchResults(updatedDataPost);
      }
    };

    fetchData();
  }, [dataPost, dataUser]);

  const searchByName = (e) => {
    setSearchName(e.target.value);
    const results = updateDataPost.filter((post) =>
      post.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <link rel="./index.css" href="" />
      <div className="explore-content">
        <div className="container d-flex">
          <div className="">
          <h1>Explore Twittir</h1>
          <div>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchName}
                onChange={(e) => searchByName(e)}
              />
            </form>
          </div>
          </div>
          <div className="col-lg-9">
          {searchResults.length > 0 ? (
            searchResults.map((post) => <TweetCard key={post.id} post={post} />)
          ) : (
            <NotFoundCard searchName={searchName} />
          )}
          </div>
          {/* <div className="explore-card">
            <h3>Trending Topic #2</h3>
            <p>
              This is another trending topic. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit...
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}
