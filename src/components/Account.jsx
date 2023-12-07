import React, { useState, useEffect } from "react";
import { patchBook } from "../api";

const Account = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    handleCheckout("bookId123");
  }, []);

  const handleCheckout = async (bookId) => {
    try {
      await patchBook(bookId, "checkout");
    } catch (error) {
      console.error("Error checking out book:", error);
    }
  };

  const handleReturn = async (bookId) => {
    try {
      await patchBook(bookId, "return");
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  return (
    <div>
      <button onClick={() => handleCheckout("bookId123")}>
        Check Out Book
      </button>
      <button onClick={() => handleReturn("bookId123")}>Return Book</button>
    </div>
  );
};

export default Account;
