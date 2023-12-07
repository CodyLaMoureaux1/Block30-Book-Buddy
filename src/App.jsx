import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigations from "./components/Navigations";
import SearchBar from "./components/SearchBar";
import Books from "./components/Books";
import Login from "./components/Login";
import Register from "./components/Register";
import SingleBook from "./components/SingleBook";
import Account from "./components/Account";

const App = () => {
  return (
    <Router>
      <div>
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
          <Route path="/api/books/:bookId" element={<SingleBook />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
