import React, { useState, useEffect } from "react";
import { getAllBooks } from "../api";
import "../app.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const booksData = await getAllBooks();
      setBooks(booksData);
      setFilteredBooks(booksData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (searchQuery) => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="book-container">
        {filteredBooks.map((book) => (
          <Link
            to={`/api/books/${book.id}`}
            key={book.id}
            className="book-card"
          >
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">{book.author}</p>
            <img src={book.coverimage} alt={book.title} />
            <p className="book-availability">
              {book.available ? "Available" : "Not Available"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Books;
