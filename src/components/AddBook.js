import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const { title, author, category } = book;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setBook({
      title: '',
      author: '',
      category: '',
    });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setBook({
      ...book,
      [name]: value,
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
        name="category"
        id="category"
        value={category}
        onChange={handleChange}
        required
      >
        <option value="">GENRE</option>
        <option value="ROMANCE">ROMANCE</option>
        <option value="ADVENTURE">ADVENTURE</option>
        <option value="EDUCATIONAL">EDUCATIONAL</option>
        <option value="HISTORICAL">HISTORICAL</option>
      </select>
      <input type="submit" value="ADD BOOK" className="add-btn" />

    </form>
  );
};

export default AddBook;
