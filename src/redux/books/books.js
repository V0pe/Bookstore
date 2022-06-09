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
    author: 'Peter Jefferson',
    title: '12 Goals for life',
    category: 'Category1',
  },
  {
    id: uuidv4(),
    author: 'Mark Manson',
    title: 'Subtle art of not giving a fuck',
    category: 'Category2',
  },
  {
    id: uuidv4(),
    author: 'Napoleon Hill',
    title: 'Think and grow rich',
    category: 'Category3',
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
