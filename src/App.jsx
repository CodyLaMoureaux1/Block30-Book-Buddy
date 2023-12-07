import React from "react";
import Books from "./components/Books";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigations from "./components/Navigations";
import SearchBar from "./components/SearchBar";
import Login from "./components/Login";
import Register from "./components/Register";
import SingleBook from "./components/SingleBook";

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
                <Books />
              </div>
            }
          />
          <Route path="/books" element={<Books />} />
          <Route path="/login" element={<Login />} />
          <Route path="/api/books/:bookId" element={<SingleBook />} />{" "}
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
