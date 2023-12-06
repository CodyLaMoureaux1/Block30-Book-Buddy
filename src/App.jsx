import React from "react";
import Books from "./components/Books";
import "./app.css";

const App = () => {
  return (
    <div>
      <h1 className="mainHeader">My Book App</h1>
      <Books />
    </div>
  );
};

export default App;
