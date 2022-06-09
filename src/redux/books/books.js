import { v4 as uuidv4 } from 'uuid';

export const addBook = (book) => ({
  type: 'bookstore/books/ADD_BOOK',
  payload: book,
});

export const removeBook = (book) => ({
  type: 'bookstore/books/REMOVE_BOOK',
  payload: book,
});

const initialState = [
  {
    id: uuidv4(),
    author: 'Jane Auston',
    title: 'Pride and Prejudice',
    genre: 'Romance',
  },
  {
    id: uuidv4(),
    author: 'Robert',
    title: 'Treasure',
    genre: 'Adventure',
  },
  {
    id: uuidv4(),
    author: 'Bert Love',
    title: 'we want to do more than survive',
    genre: 'Educational',
  },
];
const booksReducer = (books = initialState, action) => {
  switch (action.type) {
    case 'bookstore/books/ADD_BOOK':
      return [...books, action.payload];
    case 'bookstore/books/REMOVE_BOOK':
      return books.filter((book) => book.id !== action.payload.id);
    default:
      return books;
  }
};

export const selectBooks = (state) => state.books;
export default booksReducer;
