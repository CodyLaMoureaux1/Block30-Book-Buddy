import React from "react";
import Books from "./components/Books";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigations from "./components/Navigations";
import SearchBar from "./components/SearchBar";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navigations />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SearchBar />
                <Books />
              </div>
            }
          />
          <Route path="/books" element={<Books />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
