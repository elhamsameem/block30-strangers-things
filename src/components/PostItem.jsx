import React from "react";
import { useNavigate } from "react-router-dom";
import "./PostItem.css";

const PostItem = ({ post, isLoggedIn }) => {
  const navigate = useNavigate();
  const handleViewClick = () => {
    navigate(`/posts/${post._id}`);
  };

  const handleMessageClick = () => {
    navigate(`/messages/${post._id}`);
  };

  return (
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
        <div>
          {isLoggedIn &&
            (post.isAuthor ? (
              <button className="simple-buttons" onClick={handleViewClick}>
                View
              </button>
            ) : (
              <button className="" onClick={handleMessageClick}>
                Message Seller ✎
              </button>
            ))}
        </div>
      </div>
    </>
  );
};
export default PostItem;
