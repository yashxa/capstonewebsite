import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Autonomous Document Delivery Robot</h1>
      <nav>
        <a href="#features">Features</a>
        <a href="#specifications">Specifications</a>
        <a href="#design-process">Design Process</a>
        <a href="#team">Team</a>
      </nav>
    </header>
  );
};

export default Header;
