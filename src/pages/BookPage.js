import React from 'react';
import AddBook from '../components/AddBook';
import DisplayBook from '../components/DisplayBook';

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          title: 'Tales on the moon light',
          author: 'Victor',
        },
        {
          id: 2,
          title: 'Joy on the ride',
          author: 'Damola',
        },
        {
          id: 3,
          title: 'Jesus is the way, the truth and the light',
          author: 'The HolyBible',
        },

      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <DisplayBook books={books} />
        <AddBook />
      </div>
    );
  }
}

export default BookPage;
