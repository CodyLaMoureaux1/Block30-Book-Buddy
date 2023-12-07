import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Navigations() {
  const [navigating, setNavigating] = useState(false);

  return (
    <nav className="nav1">
      <h1 className="mainHeader">My Book App</h1>
      <div className="navigation-menu">
        <ul className="navbar">
          <li>
            <Link onClick={() => setNavigating(true)} to={`/register`}>
              Register
            </Link>
          </li>
          <li>
            <Link onClick={() => setNavigating(true)} to={`/login`}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
