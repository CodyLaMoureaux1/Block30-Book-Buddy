import axios from 'axios';

const baseUrl = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com";

const getAllBooks = async () => {
    const response = await axios.get('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
    return response.data.books || []; 

};

export { getAllBooks };