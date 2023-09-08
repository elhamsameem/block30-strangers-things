import React, { useState, useEffect } from "react";
import PostItem from "./PostItem.jsx";
import NewPost from "./NewPost.jsx";

const GetAllPosts = ({ posts, setPosts, isLoggedIn }) => {
  const [showNewPost, setShowNewPost] = useState(false); // State to control NewPost visibility
  const [searchedPost, setSearchedPost] = useState("");

  // Hangles the X button click
  const handleClick = () => {
    setShowNewPost(!showNewPost); // Toggle the showNewPost state
  };

  // Filter posts based on the search input
  const filteredPosts = posts
    ? posts.filter(
        (post) =>
          post.description.toLowerCase().includes(searchedPost.toLowerCase()) ||
          post.author.username
            .toLowerCase()
            .includes(searchedPost.toLowerCase()) ||
          post.location.toLowerCase().includes(searchedPost.toLowerCase()) ||
          post.title.toLowerCase().includes(searchedPost.toLowerCase())
      )
    : [];

  return (
    <div className="posts-container">
      <div className="post">
        {posts && (
          <>
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
          </>
        )}
        {
          <div className="new-post-button-div">
            {isLoggedIn &&
              (showNewPost ? (
                <>
                  <button className="x-button" onClick={handleClick}>
                    X
                  </button>
                  <NewPost
                    isLoggedIn={isLoggedIn}
                    posts={posts}
                    setPosts={setPosts}
                  />
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
