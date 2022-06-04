import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookPage from './pages/BookPage';
import CategoryPage from './pages/CategoryPage';
import Navbar from './pages/Navbar';
import './App.css';

function App() {
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
