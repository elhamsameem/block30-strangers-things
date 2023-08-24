import React from "react";
import "./PostItem.css";

const PostItem = ({ post }) => {
  return (
    <>
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
        <p>
          <b>Messages: </b>
          {post.messages}
        </p>
        <p>Is Author: {post.isAuthor.toString()}</p>
      </div>
    </>
  );
};
export default PostItem;
