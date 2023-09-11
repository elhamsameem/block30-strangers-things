import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SinglePost.css";
import "./NewPost.css";
import { getAllPosts, deletePost, updatePost } from "../api";
import PostItem from "./PostItem";

function SinglePost({ isLoggedIn, posts, setPosts }) {
  const [post, setPost] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  // If user is not logged in then send them to login screen
  !isLoggedIn && navigate("/login");

  useEffect(() => {
    /*     const findPost = posts.filter((post) => post._id === params.postId);
    setPost(findPost[0]); */
    if (Array.isArray(posts)) {
      const findPost = posts.filter(
        (post) => post && post._id === params.postId
      );
      setPost(findPost[0]);
    }
  }, [posts, params.postId]);

  const handleChange = (event) => {
    setUpdatedData({ ...updatedData, [event.target.name]: event.target.value });
  };

  async function handleDeleteClick() {
    const response = await deletePost(post._id);
    if (response.success) {
      setPosts(posts.filter((e) => e._id !== post._id));

      navigate("/posts");
    }
  }

  const handleEditClick = () => {
    setEditing(true);
    setUpdatedData(post);
  };

  const handleSaveClick = async () => {
    const updatedPost = await updatePost(post._id, updatedData);
    if (updatedPost.success) {
      const updatedPosts = posts.map((p) => {
        return p._id === post._id ? updatedPost.data.post : p;
      });
      setPosts(updatedPosts);
      setPost(updatedPost.data.post);
      setEditing(false);

      navigate(`/posts/${post._id}`);
    } else {
      console.error("Failed to update post:", updatedPost.error);
    }
  };

  return (
    <div className="posts-container">
      <div className="post">
        <button className="simple-buttons" onClick={() => navigate(-1)}>
          Back
        </button>
        {isLoggedIn && post ? (
          <>
            {editing ? (
              <div className="new-post-form-container">
                <form>
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={updatedData.title}
                    onChange={handleChange}
                  />
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    value={updatedData.description}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    value={updatedData.price}
                    onChange={handleChange}
                  />
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={updatedData.location}
                    onChange={handleChange}
                  />
                  <button type="button" onClick={handleSaveClick}>
                    Save
                  </button>
                </form>
              </div>
            ) : (
              <>
                <PostItem post={post} isLoggedIn={isLoggedIn} />
                {post.isAuthor && (
                  <div className="action-buttons-div">
                    <button
                      className="action-buttons delete-button"
                      onClick={handleDeleteClick}
                    >
                      Delete
                    </button>
                    <button
                      className="action-buttons"
                      onClick={handleEditClick}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <h1>Post Not Found!</h1>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
