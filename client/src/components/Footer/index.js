import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
      <h2>Pokémon Card Shopping App</h2>
        &copy;{new Date().getFullYear()} by Team No Name 
      </div>
    </footer>
  );
};

export default Footer;
