import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/images/Challendemic-logo-horizontal.png'; 

const Header = () => {
  return (
    <header>
      <Link to="/"><img src={logo} alt="logo"></img></Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/sheets">Spreadsheet</Link>
      </nav>
    </header>
  )
}

export default Header
