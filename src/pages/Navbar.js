import React from 'react';
import { NavLink } from 'react-router-dom';
import './pages.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOK',
    },
    {
      id: 2,
      path: '/CategoryPage',
      text: 'CATEGORIES',
    },
  ];

  return (
    <header>
      <h1>BookStore Idumota</h1>
      <nav className="navBar">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
