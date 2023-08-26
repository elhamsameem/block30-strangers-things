import React from "react";
import GetAllPosts from "./GetAllPosts";

function Home( {isLoggedIn}) {
  return (
    <div>
      <h1>Home</h1>
      <br />
      <GetAllPosts isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Home;
