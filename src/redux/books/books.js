export const addBook = (book) => ({
  type: 'bookstore/books/ADD_BOOK',
  payload: book,
});

export const removeBook = (book) => ({
  type: 'bookstore/books/REMOVE_BOOK',
  payload: book,
});

const booksReducer = (books = [], action) => {
  switch (action.type) {
    case 'bookstore/books/ADD_BOOK':
      return [...books, action.payload];
    case 'bookstore/books/REMOVE_BOOK':
      return books.filter((book) => book.id !== action.payload.id);
    default:
      return books;
  }
};

export default booksReducer;
