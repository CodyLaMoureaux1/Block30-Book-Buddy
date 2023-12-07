import React from "react";
import Books from "./components/Books";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigations from "./components/Navigations";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigations />
        <SearchBar />
        <Routes>
          <Route path="/api/users/register" element={<Navigations />} />
          <Route path="/" element={<Books />} />
        </Routes>
      </BrowserRouter>

      <Books />
    </>
  );
};

export default App;
