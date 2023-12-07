import React, { useState, useEffect } from "react";
import { getAllBooks } from "../api";
import "../app.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksData = await getAllBooks();
        setBooks(booksData);
        setFilteredBooks(booksData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter books based on the search query
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredBooks(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="book-container">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">{book.author}</p>
            <img src={book.coverimage} alt={book.title} />
            <p className="book-availability">
              {book.available ? "Available" : "Not Available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
