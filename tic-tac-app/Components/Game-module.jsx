import { useEffect, useState } from "react";

/* Temporary board, replace with the real game interface. */

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function getWinner(squares) {
  for (const [a, b, c] of LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function resultFor(squares) {
  const winner = getWinner(squares);
  if (winner === "X") return "win";
  if (winner === "O") return "loss";
  if (squares.every(Boolean)) return "draw";
  return null;
}

export default function GameModule({ onGameEnd, disabled }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(true);

  function handleClick(i) {
    if (disabled || !playerTurn || squares[i]) return;
    const next = squares.slice();
    next[i] = "X";
    setSquares(next);

    const result = resultFor(next);
    if (result) {
      onGameEnd(result);
    } else {
      setPlayerTurn(false);
    }
  }

  // Computer plays a random free square
  useEffect(() => {
    if (playerTurn || disabled) return;
    const timer = setTimeout(() => {
      const free = squares.flatMap((s, i) => (s ? [] : [i]));
      const pick = free[Math.floor(Math.random() * free.length)];
      const next = squares.slice();
      next[pick] = "O";
      setSquares(next);

      const result = resultFor(next);
      if (result) onGameEnd(result);
      else setPlayerTurn(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [playerTurn, disabled, squares, onGameEnd]);

  return (
    <div className="board" role="grid" aria-label="Tic-tac-toe board">
      {squares.map((value, i) => (
        <button
          key={i}
          type="button"
          className={`square${value ? ` square-${value}` : ""}`}
          onClick={() => handleClick(i)}
          disabled={disabled || !playerTurn || Boolean(value)}
          aria-label={`Square ${i + 1}${value ? `, ${value}` : ", empty"}`}
        >
          {value}
        </button>
      ))}
    </div>
  );
}