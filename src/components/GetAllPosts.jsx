import React, { useState, useEffect } from "react";
import { getAllPosts } from "../api";
import PostItem from "./PostItem.jsx";
import NewPost from "./NewPost.jsx";

const GetAllPosts = ({ isLoggedIn }) => {
  const [posts, setPosts] = useState([]);
  const [showNewPost, setShowNewPost] = useState(false); // State to control NewPost visibility
  const [searchedPost, setSearchedPost] = useState("");

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

  // Filter posts based on the search input
  const filteredPosts = posts
    ? posts.filter(
        (post) =>
          post.description.toLowerCase().includes(searchedPost.toLowerCase()) ||
          post.title.toLowerCase().includes(searchedPost.toLowerCase())
      )
    : [];

  return (
    <div className="posts-container">
      <div className="post">
        <div className="search-bar-div">
          <input
            type="text"
            className="search-bar"
            value={searchedPost}
            placeholder="Search for Text"
            onChange={(event) => {
              setSearchedPost(event.target.value);
            }}
          />
        </div>
        {
          <div className="new-post-button-div">
            {isLoggedIn &&
              (showNewPost ? (
                <>
                  <button className="x-button" onClick={handleClick}>
                    X
                  </button>
                  <NewPost isLoggedIn={isLoggedIn} />
                </>
              ) : (
                <button className="new-post-button" onClick={handleClick}>
                  Add New Post
                </button>
              ))}
          </div>
        }
        {filteredPosts.map((post) => {
          return (
            <PostItem key={post._id} post={post} isLoggedIn={isLoggedIn} />
          );
        })}
      </div>
    </div>
  );
};

export default GetAllPosts;
