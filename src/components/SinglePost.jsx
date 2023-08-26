import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SinglePost.css";
import { fetchSinglePost, getAllPosts } from "../api";
import PostItem from "./PostItem";

function SinglePost() {
  const [post, setPost] = useState(null);
  const params = useParams();
  useEffect(() => {
    // const getPost = async () => {
    //   const response = await fetchSinglePost(params.postId);
    //   console.log(params);
    //   console.log(response);
    // };
    // getPost();

    const getPosts = async () => {
      const posts = await getAllPosts();
      const findPost = posts.filter((post) => post._id === params.postId);
      setPost(findPost[0]);
    };
    getPosts();
  }, []);

  return (
    <>
      <div className="posts-container">
        <div className="post">
          <button className="simple-buttons" onClick={() => history.back()}>
            Back
          </button>
          {post ? (
            <div className="post-item" key={post.id}>
              <div className="actions">{post.isAuthor && "Delete"}</div>
              <div className="post-title">
                <h2>{post.title}</h2>
                <b className="seller-username">{post.author.username}</b>
              </div>
              <p>
                <b>Price: </b>
                {post.price}
              </p>
              <p className="post-description">
                <b>Description: </b>
                {post.description}
              </p>
              <p>
                <b>Location: </b>
                {post.location}
              </p>
              <p>
                <b>Will Deliver: </b> {post.willDeliver ? "Yes" : "No"}
              </p>
              <br />
              <div className="action-buttons-div">
                <button className="action-buttons, delete-button">
                  Delete
                </button>
                <button className="action-buttons">Edit</button>
              </div>
            </div>
          ) : (
            <h1>Post Not Found!</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default SinglePost;
