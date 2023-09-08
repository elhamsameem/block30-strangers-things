import React from "react";
import GetAllPosts from "./GetAllPosts";

function Home({ isLoggedIn, posts }) {
  return (
    <div>
      <h1>Home</h1>
      <br />
      <GetAllPosts isLoggedIn={isLoggedIn} posts={posts} />
    </div>
  );
}

export default Home;
