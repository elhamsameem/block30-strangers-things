import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";

import "../Login.css";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser(credentials.username, credentials.password);
      if (token) {
        sessionStorage.setItem("token", token);
        navigate("/");
        location.reload();
      } else {
        setError("Invalid Credentials, please try again");
      }
    } catch (error) {
      console.error("Failed to login:", error);
      setError("Invalid Credentials, please try again");
    }
  };

  return (
    <div className="login-container">
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <label>Username</label>
        <input
          name="username"
          type="text"
          onChange={handleChange}
          placeholder="Your username here"
          value={credentials.username}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Your password here"
          value={credentials.password}
        />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
