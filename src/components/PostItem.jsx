import React from "react";
import "./PostItem.css";

const PostItem = ({ post }) => {
  return (
    <div className="post-item" key={post.id}>
      <h2>{post.title}</h2>
      <p className="post-description">
        <b>Description: </b>
        {post.description}
      </p>
      <p>
        <b>Price: </b>${post.price}
      </p>
    </div>
  );
};
export default PostItem;
