import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./NewPost.css";

function NewPost({ isLoggedIn }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();
  function navigateToLogin() {
    <Navigate to="/login" replace />;
    return navigate("/login");
  }

  function handleSubmit(event) {
    event.preventDefault();

    setTitle("");
    setDescription("");
    setPrice("");
    setLocation("");
  }

  return (
    <div className="new-post-container">
      {isLoggedIn ? (
        <div className="new-post-form-container">
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <label htmlFor="item-name">
              Title
              <input
                type="text"
                name="item-name"
                id="item-name"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </label>
            <label htmlFor="description">
              Description
              <input
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </label>
            <label htmlFor="price">
              Price
              <input
                type="text"
                name="price"
                id="price"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </label>
            <label htmlFor="location">
              Location
              <input
                type="text"
                name="location"
                id="location"
                value={location}
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />
            </label>
            <button type="submit">Create</button>
          </form>
        </div>
      ) : (
        <>
          <h1>Please log in to Add a new post</h1>
          {navigateToLogin()}
        </>
      )}
    </div>
  );
}

export default NewPost;
