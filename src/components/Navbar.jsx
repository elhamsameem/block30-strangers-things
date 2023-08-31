import { Link, NavLink, useNavigate } from "react-router-dom";
import React from "react";

function Navbar({ isLoggedIn, handleLogout }) {
  const navigate = useNavigate();

  // lets create a const for function to handle logout
  /*   const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    setToken(null);
    navigate("/");
  }; */

  return (
    <div className="navbar">
      <h1 className="navTitle">Stranger's Things</h1>
      <div className="navLinks">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/posts"}>Posts</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to={"/newpost"}>New Post</NavLink>
            {/* <NavLink to={"/logout"}>Log Out</NavLink> */}
            <NavLink to={"/logout"} onClick={handleLogout}>
              Log out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>Login</NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
