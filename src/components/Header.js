import React, {useState} from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/images/Challendemic-logo-horizontal.png'; 
import icon from '../assets/images/hamburger-menu-icon.png';

const Header = (e) => {
  const [menuIsExpanded, setMenuState] = useState(false);

  const toggleMenu = function(){
      setMenuState(!menuIsExpanded);
  }

  return (
    <header className={menuIsExpanded ? 'expanded': null}>
      <Link to="/"><img src={logo} className="logo" alt="logo"></img></Link>
      <nav>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/statistics" onClick={toggleMenu}>Statistics</Link>
        <Link to="/podium" onClick={toggleMenu}>Podium</Link>
        <Link to="/settings" onClick={toggleMenu}>Settings</Link>
        <img src={icon} className="expand-icon" onClick={toggleMenu} alt='Expand menu icon'></img>
      </nav>
    </header>
  )
}

export default Header
