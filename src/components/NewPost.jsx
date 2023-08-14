import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPost({ isLoggedIn }) {
  const [newPost, setNewPost] = useState("");

  return (
    <>
      <h1>New Post Compo</h1>
      {isLoggedIn ? <div>True</div> : <div>False</div>}
    </>
  );
}

export default NewPost;
