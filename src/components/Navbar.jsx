import { Link, NavLink } from "react-router-dom";
import React from "react";

function Navbar({ isLoggedIn }) {
  return (
    <div className="navbar">
      <h1 className="navTitle">Stranger's Things</h1>
      <div className="navLinks">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/posts"}>Posts</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to={"/newpost"}>New Post</NavLink>
            <NavLink to={"/logout"}>Log Out</NavLink>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
