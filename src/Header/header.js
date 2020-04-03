import React from 'react';
import './style.css';
import logo from './Challendemic-logo-horizontal.png'; 

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo"></img>
      <nav>
        <div>My profile</div>
        <div>Data</div>
      </nav>
    </header>
  )
}

export default Header
