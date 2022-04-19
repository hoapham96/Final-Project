import React from 'react';
import "./style.css";

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4" id="footerid">
      <div className="container">
        &copy;{new Date().getFullYear()} by Team No Name 
      </div>
    </footer>
  );
};

export default Footer;
