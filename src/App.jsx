import GetAllPosts from "./components/GetAllPosts";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import "./Style.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import React, { useState, useEffect } from "react";
import SinglePost from "./components/SinglePost";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    setIsLoggedIn(token ? true : false);
  }, [token]);

  //  function to handle logout
  const handleLogout = () => {
    // sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    setToken(null);
    navigate("/login");
    // location.reload();
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <div className="canvas">
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route
            path="/posts"
            element={<GetAllPosts isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/posts/:postId"
            element={<SinglePost isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/newpost"
            element={<NewPost isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/register"
            element={<Register isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
