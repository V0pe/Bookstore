import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
  });

  const { title, author, genre } = book;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: uuidv4(),
      title,
      author,
      genre,
    }));
    setBook({
      title: '',
      author: '',
      genre: '',
    });
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Author"
        name="author"
        value={author}
        onChange={handleChange}
        required
      />
      <select
        name="genre"
        id="genre"
        value={genre}
        onChange={handleChange}
        required
      >
        <option selected="true" value="">GENRE</option>
        <option value="Romance">ROMANCE</option>
        <option value="Adventure">ADVENTURE</option>
        <option value="Educational">EDUCATIONAL</option>
        <option value="Historical">HISTORICAL</option>
      </select>
      <input type="submit" value="Submit" className="add-btn" />

    </form>
  );
};

export default AddBook;
