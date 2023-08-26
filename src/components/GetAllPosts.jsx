import React, { useState, useEffect } from "react";
import { getAllPosts } from "../api";
import PostItem from "./PostItem.jsx";
import NewPost from "./NewPost";

const GetAllPosts = ({ isLoggedIn }) => {
  const [posts, setPosts] = useState([]);
  const [showNewPost, setShowNewPost] = useState(false); // State to control NewPost visibility
  isLoggedIn = true;
  console.log(`${isLoggedIn}`);

  const handleClick = () => {
    setShowNewPost(!showNewPost); // Toggle the showNewPost state
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
        {
          <div className="new-post-button-div">
            {showNewPost ? (
              <>
                <NewPost isLoggedIn={isLoggedIn} />
                <button onClick={handleClick}>Close Form</button>
              </>
            ) : (
              <button className="new-post-button" onClick={handleClick}>
                Add New Post
              </button>
            )}
          </div>
        }
        {posts.map((post) => {
          return <PostItem key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default GetAllPosts;
