import React from 'react';
import { NavLink } from 'react-router-dom';
import './pages.css';
import Person from '@material-ui/icons/Person';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/CategoryPage',
      text: 'CATEGORIES',
    },
  ];

  return (
    <header>
      <div className="header-nav">
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
      </div>
      <span id="user-avatar"><Person color="#0290ff" /></span>
    </header>
  );
};
export default Navbar;
