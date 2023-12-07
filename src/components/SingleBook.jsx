import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById, patchBook } from "../api";
import "../SingleBook.css";
import "../app.css";

const SingleBook = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setAuthToken(storedToken);
  }, []);

  useEffect(() => {
    fetchBookDetails();
  }, [bookId, authToken]);

  const fetchBookDetails = async () => {
    try {
      const bookDetails = await getBookById(bookId);
      setBook(bookDetails);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  const handleCheckout = async () => {
    try {
      if (!authToken) {
        console.error("Authentication token not found.");
        return;
      }

      await patchBook(book.id, "checkout", authToken);
      fetchBookDetails();
    } catch (error) {
      console.error("Error checking out book:", error);
    }
  };

  const handleReturn = async () => {
    try {
      if (!authToken) {
        console.error("Authentication token not found.");
        return;
      }

      await patchBook(book.id, "return", authToken);
      fetchBookDetails();
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  return (
    <div className="book-container">
      {book ? (
        <div className="book-card">
          <h3>Book Details</h3>
          <h2 className="book1">{book.title}</h2>
          <p className="author1">{book.author}</p>
          <img src={book.coverimage} alt={book.title} />
          <p>{book.available ? "Available" : "Not Available"}</p>
          {book.available ? (
            <button onClick={handleCheckout}>Check Out</button>
          ) : (
            <button onClick={handleReturn}>Return</button>
          )}
          <p className="description">{book.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleBook;
