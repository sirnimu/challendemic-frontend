import React from 'react';
import logo from '../styles/res/Challendemic-logo-horizontal.png'; 

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo"></img>
      <nav>
        <div>Podium</div>
        <div>Graphs</div>
        <div>Settings</div>
      </nav>
    </header>
  )
}

export default Header
