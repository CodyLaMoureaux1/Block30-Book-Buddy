import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../app.css";
import { loginUser } from "../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    loginUser(email, password)
      .then((userData) => {
        console.log("Login successful:", userData);

        alert("Login successful!");

        navigate("/");
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
    navigate("/");
  };

  return (
    <>
      <nav className="nav1"></nav>
      <div className="background">
        <div className="login-container">
          <h2 className="form-heading">Login Form</h2>
          <form>
            <label className="form-label">
              Email:
              <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label className="form-label">
              Password:
              <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button className="form-button" type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
          <p className="form-message">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
