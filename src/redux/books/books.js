import { nanoid } from 'nanoid';

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
    id: nanoid(),
    author: 'Jane Auston',
    title: 'Pride and Prejudice',
    genre: 'Romance',
  },
  {
    id: nanoid(),
    author: 'Robert',
    title: 'Treasure',
    genre: 'Adventure',
  },
  {
    id: nanoid(),
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
