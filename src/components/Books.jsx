import React, { useState, useEffect } from "react";
import { getAllBooks } from "../api";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksData = await getAllBooks();
        console.log("Fetched data:", booksData);
        setBooks(booksData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="book-list">
      <div className="book-container">
        {books.map((book) => (
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
