import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import BookPage from './pages/BookPage';
import CategoryPage from './pages/CategoryPage';
import Navbar from './pages/Navbar';
import './App.css';
import { fetchBooks } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookPage />} />
        <Route exact path="CategoryPage" element={<CategoryPage />} />
      </Routes>
    </main>
  );
}

export default App;
