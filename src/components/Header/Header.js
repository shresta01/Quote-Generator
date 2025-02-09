import React from 'react';
import Logo from '../../assets/logo.svg'; // Corrected path to the logo.svg
import './Header.css'; // Ensure this path is correct

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo" />
    </header>
  );
};

export default Header;
