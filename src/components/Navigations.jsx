import React from "react";
import { Link } from "react-router-dom";

export default function Navigations() {
  return (
    <nav className="nav1">
      <h1 className="mainHeader">My Book App</h1>
      <div className="navigation-menu">
        <ul className="navbar">
          <li>
            <Link to={`/register`}>Register</Link>
          </li>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/login`}>Login</Link>
          </li>
          <li>
            <Link to={`/account`}>Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
