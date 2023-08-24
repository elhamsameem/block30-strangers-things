import React, { useState, useEffect } from "react";
import { getAllPosts } from "../api";
import PostItem from "./PostItem.jsx";
import NewPost from "./NewPost";

const GetAllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [showNewPost, setShowNewPost] = useState(false); // State to control NewPost visibility

  const handleClick = () => {
    const newPostButtonDiv = document.querySelector(".new-post-button-div");
    setShowNewPost(true);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getAllPosts();
      setPosts(response);
    };
    fetchPosts();
  }, []);
  return (
    <div className="posts-container">
      <div className="post">
        <div className="new-post-button-div">
          {showNewPost ? (
            <NewPost /> // Render NewPost component if showNewPost is true
          ) : (
            <button className="new-post-button" onClick={handleClick}>
              Add New Post
            </button>
          )}{" "}
        </div>
        {posts.map((post) => {
          return <PostItem key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default GetAllPosts;
