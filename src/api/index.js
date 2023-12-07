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
           
        console.log(response.data);
        return response.data; 
    } catch (error) {
        console.error('Error:', error.message);
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
  
 

  const patchBook = async (bookId, action) => {
    const apiUrl = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`;
  
    try {
      const response = await axios.patch(apiUrl, { action });
  
      // Log the response or handle it as needed
      console.log(response.data);
  
      return response.data;
    } catch (error) {
      console.error('Error patching book:', error);
      throw error;
    }
  };
  
 
  


export { getAllBooks, registerUser, loginUser, getBookById, patchBook   };