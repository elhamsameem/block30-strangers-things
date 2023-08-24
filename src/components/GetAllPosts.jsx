import React, { useState, useEffect } from "react";
import { getAllPosts } from "../api";
import PostItem from "./PostItem";

const GetAllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getAllPosts();
      setPosts(response);
    };
    fetchPosts();
  }, []);
  return (
    <div className="posts-container">
      <div className="post">
        {posts.map((post) => {
          return <PostItem key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default GetAllPosts;
