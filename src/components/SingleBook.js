import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const SingleBook = (props) => {
  SingleBook.propTypes = {
    book: PropTypes.string.isRequired,
  };
  const { book } = props;
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <li id={book.id} key={book.id}>
      {book.category}
      <br />
      {book.title}
      <br />
      {book.author}
      <br />
      <button type="button" onClick={() => handleClick(book.id)}>Remove</button>
    </li>

  );
};

export default SingleBook;
