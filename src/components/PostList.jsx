import React, { useState, useEffect } from "react";
import useFetch from "../fetch/UseFetch";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  return (
    <div>
      <h2>Posts</h2>
      {data && data.map((post) => <li key={post.id}>{post.title}</li>)}
    </div>
  );
}

export default PostList;
