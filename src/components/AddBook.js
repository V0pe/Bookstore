import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
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

    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));
    setBook({
      title: '',
      author: '',
      category: '',
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
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={category}
        onChange={handleChange}
        required
      />
      <input type="submit" value="Add Book" className="add-btn" />

    </form>
  );
};

export default AddBook;
