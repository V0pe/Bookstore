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
    <section className="book-container">
      <li id={book.id} key={book.id} className="book-col book-info">
        <h5>{book.category}</h5>
        <h3>{book.title}</h3>
        <h6>{book.author}</h6>
        <div className="interaction">
          <button type="button">Comments</button>
          <hr className="vertical" />
          <button type="button" onClick={() => handleClick(book.id)}>Remove</button>
          <hr className="vertical" />
          <button type="button">Edit</button>
        </div>
      </li>
      <div className="book-col progress-container">
        <div className="circular-progress-container">
          <div className="circular-progress" />
        </div>
        <div className="progress-stat">
          <p className="percent-complete">50%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="progress-divider" />
      <div className="book-col current-chapter-container">
        <div>
          <p className="current-chapter-label">CURRENT CHAPTER</p>
          <p className="current-chapter">Chapter 8</p>
        </div>
        <div>
          <button className="primary-button" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </section>

  );
};

export default SingleBook;
