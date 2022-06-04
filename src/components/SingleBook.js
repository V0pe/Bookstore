import React from 'react';
import PropTypes from 'prop-types';

class SingleBook extends React.PureComponent {
  render() {
    const { book } = this.props;
    return (
      <li>
        {book.title}
        <br />
        {book.author}
        <br />
        <button type="button">Remove</button>
      </li>

    );
  }
}

SingleBook.propTypes = {
  book: PropTypes.string.isRequired,
};

export default SingleBook;
