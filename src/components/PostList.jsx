import React, { useState, useEffect } from "react";
import useFetch from "../fetch/UseFetch";
import NotFoundCard from "./NotFoundCard";
import TweetCard from "./TweetCard";

function PostList() {
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
    <div>
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
      <div className="container">
        <div className="row">
          <div className="col-sm ">
            {searchResults.length > 0 ? (
              searchResults.map((post) => (
                <TweetCard key={post.id} post={post} />
              ))
            ) : (
              <NotFoundCard searchName={searchName} />
            )}
          </div>
          <div className="col-lg-4">
            <div className="card trend-card">
              <div className="card-header">Trends</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">#Bootstrap</li>
                <li className="list-group-item">#WebDevelopment</li>
                <li className="list-group-item">#Coding</li>
                <li className="list-group-item">#Golang</li>
                <li className="list-group-item">#FullStack Developer</li>
                <li className="list-group-item">#React</li>
                <li className="list-group-item">#Java</li>
                <li className="list-group-item">#Spring</li>
                <li className="list-group-item">#JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;
