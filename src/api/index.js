import axios from 'axios';

const baseUrl = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com";

const getAllBooks = async () => {
    const response = await axios.get('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
    return response.data.books || []; 

};



const registerUser = async () => {
    try {
      const response = await axios.post(
        'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register',
        {
          firstname: 'Sam',
          lastname: 'Smith',
          email: 'ssmith@example.com',
          password: 'sam345',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.message);
      
    }
  };
  


  const loginUser = async (email, password) => {
    try {
      const response = await axios.post(
        'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      // Extract the token from the response data
      const authToken = response.data.token;
  
      // Store the token in localStorage (or another storage mechanism of your choice)
      localStorage.setItem("authToken", authToken);
  
      console.log('Authentication successful. Token:', authToken);
  
      return authToken;
    } catch (error) {
      console.error('Error:', error.message);
      throw error;
    }
  };
  
  // Function for fetching user-specific data
  const getLoggedInUserInfo = async () => {
    try {
      // Retrieve the authentication token from localStorage
      const authToken = localStorage.getItem("authToken");
  
      if (!authToken) {
        console.error('Authentication token not found');
        return null;
      }
  
      // Make a request to fetch user information
      const response = await axios.get('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        }
      });
  
      // Extract the user information from the response data
      const userInfo = response.data;
  
      return userInfo;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  };
 


const getBookById = async (bookId) => {
    const apiUrl = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`;
  
    try {
      const response = await axios.get(apiUrl);
      return response.data.book || null;
    } catch (error) {
      console.error("Error fetching book details:", error);
      throw error;
    }
  };
  
 
 

  const patchBook = async (bookId, action, token) => {
    const apiUrl = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`;
  
    try {
      console.log(`Returning book with ID: ${bookId}`); // Add this log statement
  
      const response = await axios.patch(
        apiUrl,
        { action },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.error(`Error updating book (${action}):`, error);
      throw error;
    }
  };


  
  
 
  



export { getAllBooks, registerUser, loginUser, getBookById, patchBook ,getLoggedInUserInfo};