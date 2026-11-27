import React, { useState, useEffect } from 'react';
import './Scoreboard.css';

function Scoreboard({ wins = 0, losses = 0, isGameActive }) {
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (!isGameActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isGameActive]);

  return (
    <aside className="scoreboard">
      <h2>SCOREBOARD</h2>
      
      <div className="score-box">
        <p className="wins">Wins: <span>{wins}</span></p>
        <p className="losses">Losses: <span>{losses}</span></p>
      </div>

      <div className="timer-box">
        <p>Time left: <strong>{timeLeft}s</strong></p>
      </div>
    </aside>
  );
}

export default Scoreboard;