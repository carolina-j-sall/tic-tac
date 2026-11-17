import React from 'react';
import './Header.scss';

function Header({ currentUser, onLogout }) {
  return (
    <header className="game-header">
      <div className="logo">
        <h1>POKÉ-TIC-TAC-TOE</h1>
      </div>
      
      <nav className="nav-links">
        <a href="#game">Play</a>
        <a href="#leaderboard">Leaderboard</a>
        
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