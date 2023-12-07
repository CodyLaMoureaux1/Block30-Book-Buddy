import { useState, useEffect } from "react";
import { getLoggedInUserInfo, patchBook } from "../api";

const Account = () => {
  const [userBooks, setUserBooks] = useState([]);

  useEffect(() => {
    fetchUserBooks();
  }, []);

  const fetchUserBooks = async () => {
    try {
      const userInfo = await getLoggedInUserInfo();

      if (userInfo) {
        const checkedOutBooks = userInfo.books;
        console.log("Checked Out Books:", checkedOutBooks);
        setUserBooks(checkedOutBooks);
      }
    } catch (error) {
      console.error("Error fetching user books:", error);
    }
  };

  const handleReturn = async (bookId) => {
    console.log("Returning book with ID:", bookId);

    try {
      await patchBook(bookId, "return");
      console.log("Book returned successfully");

      fetchUserBooks();
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  return (
    <div>
      <h1 className="myAccount">My Account</h1>
      <div className="book-container">
        {userBooks.map((book) => (
          <div key={book.id} className="book-card">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">{book.author}</p>
            <img src={book.coverimage} alt={book.title} />
            <p className="book-availability">Checked Out</p>
            <button onClick={() => handleReturn(book.id)}>Return</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
