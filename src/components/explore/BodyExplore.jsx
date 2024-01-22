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
      {/* <link rel="./index.css" href="" /> */}
      <div className="explore-content">
        <div className="container d-flex">
          <div className="me-5 text-light">
            <h1 style={{ fontSize: "37px" }}>Explore Twittir</h1>
            <div>
              <form className="form-inline my-5 my-lg-0">
                <input
                  className="form-control mr-sm-2 bg-dark text-light"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchName}
                  onChange={(e) => searchByName(e)}
                />
              </form>
            </div>
          </div>
          <div className="col-lg-7 ">
            {searchResults.length > 0 ? (
              searchResults.map((post) => (
                <TweetCard key={post.id} post={post} />
              ))
            ) : searchName ? (
              <NotFoundCard searchName={searchName} />
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
