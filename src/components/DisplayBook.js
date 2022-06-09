import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '../redux/books/books';
import SingleBook from './SingleBook';

const DisplayBook = () => {
  const books = useSelector(selectBooks);
  useEffect(() => {
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <SingleBook key={book.id} book={book} />
      ))}
    </ul>
  );
};

export default DisplayBook;
