import React from "react";
import GetAllPosts from "./GetAllPosts";

function Home({ isLoggedIn, posts, setPosts }) {
  return (
    <div>
      <h1>Home</h1>
      <br />
      <GetAllPosts isLoggedIn={isLoggedIn} posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default Home;
