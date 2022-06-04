import React from 'react';
import PropTypes from 'prop-types';
import SingleBook from './SingleBook';

class DisplayBook extends React.PureComponent {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map((book) => (
          <SingleBook key={book.id} book={book} />
        ))}
      </ul>
    );
  }
}

DisplayBook.propTypes = {
  books: PropTypes.string.isRequired,
};

export default DisplayBook;
