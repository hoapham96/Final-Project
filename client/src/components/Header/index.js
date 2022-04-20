import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center position-sticky">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>PokéFriends</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/news">News</Link>
              <Link to="/social">Social</Link>
              <Link to="/profile">Profile</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/news">News</Link>
              <a href="#Shop" >Shop</a>
              <Link to="/social">Social</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
