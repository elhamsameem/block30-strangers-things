import { Link, NavLink } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to={"/register"}>Register</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
}

export default Navbar;
