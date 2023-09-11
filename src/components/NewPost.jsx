import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./NewPost.css";
import { createPost } from "../api";
import PostItem from "./PostItem";

function NewPost({ isLoggedIn, posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [err, setErr] = useState(null);
  const [postResult, setPostResult] = useState(null);
  const [postData, setPostData] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const post = {
      title,
      description,
      price,
      location,
    };

    const response = await createPost(post);
    setPostResult(response.success);
    setErr(response.error);
    setPostData(response.data.post);

    /*     setPosts([...posts, response.data.post]);
     */
    setPosts((prevPosts) => [...prevPosts, response.data.post]);
  }

  useEffect(() => {
    if (postResult) {
      const successTimeout = setTimeout(() => {
        setPostResult(null); // Clear the success message after 5 seconds
      }, 2000);

      setTitle("");
      setDescription("");
      setPrice("");
      setLocation("");
    }
  }, [postResult, err]);

  return (
    <div className="new-post-container">
      {isLoggedIn ? (
        <>
          <div className="new-post-form-container">
            <h2>Create New Post</h2>
            <div className="message-box">
              {err && (
                <>
                  <h4 className="error-heading">{err.name}</h4>
                  <p className="error-message">{err.message}</p>
                </>
              )}
              {postResult && <h3 className="success-message">Post Created!</h3>}
            </div>
            <form
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              <label htmlFor="item-name">Title</label>
              <input
                type="text"
                name="item-name"
                id="item-name"
                placeholder="ex: New Computer"
                required
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                id="description"
                placeholder="ex: Works Well or Write Some Specs"
                required
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="ex: 500"
                required
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="ex: Woodbridge, VA"
                value={location}
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />
              <button type="submit">Create Post</button>
            </form>
          </div>
          {postData && (
            <div className="post-container">
              <div className="post">
                <PostItem post={postData} isLoggedIn={isLoggedIn} />
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <h1>Please log in to Add a new post</h1>
          <Navigate to="/login" replace />;
        </>
      )}
    </div>
  );
}

export default NewPost;
