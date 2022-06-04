import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookPage from './pages/BookPage';
import CategoryPage from './pages/CategoryPage';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookPage />} />
        <Route exact path="CategoryPage" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
