import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-5">
      <Link to="/" className="navbar-brand">
        Crud test
      </Link>
      <ul className="navbar-nav flex-row">
        <li className="nav-item">
          <Link to="/" className="nav-link py-1 pr-3">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/create" className="nav-link py-1 pr-3">
            Create Task
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signin" className="nav-link py-1 pr-3">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
