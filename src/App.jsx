import GetAllPosts from "./components/GetAllPosts";
import { Route, Routes } from "react-router";
import Register from "./components/Register";
import "./Style.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import React, { useState, useEffect } from "react";
import SinglePost from "./components/singlePost";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token") || null);
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="canvas">
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route
            path="/posts"
            element={<GetAllPosts isLoggedIn={isLoggedIn} />}
          />
          <Route path="/posts/:postId" element={<SinglePost />} />
          <Route
            path="/newpost"
            element={<NewPost isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/register"
            element={<Register isLoggedIn={isLoggedIn} />}
          />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
