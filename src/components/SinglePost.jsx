import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SinglePost.css";
import { getAllPosts, deletePost, updatePost } from "../api";
import PostItem from "./PostItem";

function SinglePost({ isLoggedIn, posts, setPosts }) {
  const [post, setPost] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  // If user is not logged in then send them to login screen
  !isLoggedIn && navigate("/login");

  useEffect(() => {
    const findPost = posts.filter((post) => post._id === params.postId);
    setPost(findPost[0]);
  }, []);

  async function handleDeleteClick() {
    const response = await deletePost(post._id);
    if (response.success) {
      setPosts(posts.filter((e) => e._id !== post._id));
    }
    navigate("/posts");
  }

  return (
    <>
      <div className="posts-container">
        <div className="post">
          <button className="simple-buttons" onClick={() => history.back()}>
            Back
          </button>
          {isLoggedIn &&
            (post ? (
              <>
                <div className="post-item" key={post.id}>
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
                  {post.isAuthor && (
                    <div className="action-buttons-div">
                      <button
                        className="action-buttons, delete-button"
                        onClick={handleDeleteClick}
                      >
                        Delete
                      </button>
                      <button className="action-buttons">Edit</button>
                    </div>
                  )}
                </div>
                {post.messages.length > 0 && (
                  <div className="messages-container">
                    <div className="messages-div">
                      <h2 className="messages-h2">Messages</h2>
                      {post.messages.map((message) => {
                        return (
                          <div
                            key={message._id}
                            className="post-item message-div"
                          >
                            <h4>From: {message.fromUser.username}</h4>
                            <p>{message.content}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <h1>Post Not Found!</h1>
            ))}
        </div>
      </div>
    </>
  );
}

export default SinglePost;
