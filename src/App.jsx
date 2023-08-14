import GetAllPosts from "./components/GetAllPosts";
import { Route, Routes } from "react-router";
import Register from "./components/Register";
import "./Style.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import React, { useState, useEffect } from "react";

function App() {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="canvas">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<GetAllPosts />} />
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
