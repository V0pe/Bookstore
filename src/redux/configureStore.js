export const addBook = (book) => ({
    type: 'ADDBOOK',
    payload: book,
  });
  
  export const removeBook = (book) => ({
    type: 'REMOVEBOOK',
    payload: book,
  });
  
  const booksReducer = (books = [], action) => {
    switch (action.type) {
      case 'ADDBOOK':
        return [...books, action.payload];
      case 'REMOVEBOOK':
        return books.filter((book) => book.id !== action.payload.id);
      default:
        return books;
    }
  };
  
  export default booksReducer;