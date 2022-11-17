import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => (
  <nav className="navbar">
    <h1 className="navbar-title">Bookstore CMS</h1>
    <div>
      <Link to="/" className="link">BOOKS</Link>
      <Link to="/Categories" className="link">CATEGORIES</Link>
    </div>
  </nav>
);

export default NavBar;
