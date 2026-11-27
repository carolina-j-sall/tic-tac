import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

function Header({ currentUser, onLogout }) {
  return (
    <header className="game-header">
      <div className="logo">
        <h1>POKÉ-TIC-TAC-TOE</h1>
      </div>
      
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Login</Link></li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
        {/* <a href="#game">Play</a>
        <a href="#leaderboard">Leaderboard</a> */}
        
        {currentUser && (
          <div className="user-info">
            <span>Logged in as: {currentUser}</span>
            <button onClick={onLogout}>Log out</button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
