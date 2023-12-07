import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../api";
import "../SingleBook.css";

const SingleBook = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const bookDetails = await getBookById(bookId);
        console.log("Fetched book details:", bookDetails);
        setBook(bookDetails);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  return (
    <div className="book-card1">
      <h1>Book Details</h1>
      {book ? (
        <div className="book-details1">
          <h2 className="book-title1">{book.title}</h2>
          <p className="book-author1">{book.author}</p>
          <img src={book.coverimage} alt={book.title} />
          <p className="book-availability1">
            {book.available ? "Available" : "Not Available"}
          </p>
          <p className="book-description1">{book.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleBook;
