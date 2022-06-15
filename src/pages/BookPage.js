import React from 'react';
import AddBook from '../components/AddBook';
import DisplayBook from '../components/DisplayBook';

class BookPage extends React.PureComponent {
  render() {
    return (
      <section className="books">
        <DisplayBook />
        <hr className="hori" />
        <h3 className="Addbook-header">ADD NEW BOOK</h3>
        <AddBook />
      </section>
    );
  }
}

export default BookPage;
