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
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <img src={book.coverimage} alt={book.title} />
            <p>{book.available ? "Available" : "Not Available"}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Books;
