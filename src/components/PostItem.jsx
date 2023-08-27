import React from "react";
import { useNavigate } from "react-router-dom";
import "./PostItem.css";

const PostItem = ({ post }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/posts/${post._id}`);
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
          <div style={{ paddingLeft: "1rem" }}>{post.description}</div>
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
          <button className="simple-buttons" onClick={handleClick}>
            View
          </button>
        </div>
      </div>
    </>
  );
};
export default PostItem;
