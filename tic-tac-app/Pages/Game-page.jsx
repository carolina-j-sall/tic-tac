import { useState } from "react";
import GameModule from "../Components/Game-module";
import { getCurrentUser, updateUserStats } from "../src/utils/authStorage";
import "../src/game-page.css";

const RESULT_TEXT = {
  win: "You won! 🎉",
  loss: "You lost. Better luck next time!",
  draw: "It's a draw.",
};

/* Game page */
export default function GamePage({ user, onUserUpdate, onLogout }) {
  const [gameKey, setGameKey] = useState(0);
  const [lastResult, setLastResult] = useState(null);

  // Save the result to the user's stats
  function handleGameEnd(result) {
    updateUserStats(user.username, result);
    const fresh = getCurrentUser();
    if (fresh) onUserUpdate(fresh);
    setLastResult(result);
  }

  // New key resets the board
  function handleNewGame() {
    setLastResult(null);
    setGameKey((k) => k + 1);
  }

  const played = user.wins + user.losses + user.draws;

  return (
    <div className="game-page">
      <header className="game-header">
        <h1 className="game-title">Tic-Tac-Toe</h1>
        <div className="game-user">
          <span className="game-username">{user.username}</span>
          <button
            type="button"
            className="btn btnSecondary"
            onClick={onLogout}
          >
            Log Out
          </button>
        </div>
      </header>

      <main className="game-layout">
        <section className="game-panel game-board-panel" aria-label="Game">
          <p
            className={`game-status${lastResult ? ` game-status-${lastResult}` : ""}`}
            role="status"
            aria-live="polite"
          >
            {lastResult ? RESULT_TEXT[lastResult] : "Your turn - you are X"}
          </p>

          <GameModule
            key={gameKey}
            onGameEnd={handleGameEnd}
            disabled={lastResult !== null}
          />

          <button
            type="button"
            className="btn btnPrimary game-new-btn"
            onClick={handleNewGame}
          >
            {lastResult ? "Play Again" : "Restart"}
          </button>
        </section>

        <aside className="game-panel game-stats" aria-label="Your stats">
          <h2>Your Stats</h2>
          <dl className="stats-list">
            <div className="stat stat-win">
              <dt>Wins</dt>
              <dd>{user.wins}</dd>
            </div>
            <div className="stat stat-loss">
              <dt>Losses</dt>
              <dd>{user.losses}</dd>
            </div>
            <div className="stat stat-draw">
              <dt>Draws</dt>
              <dd>{user.draws}</dd>
            </div>
            <div className="stat">
              <dt>Played</dt>
              <dd>{played}</dd>
            </div>
          </dl>
        </aside>
      </main>
    </div>
  );
}