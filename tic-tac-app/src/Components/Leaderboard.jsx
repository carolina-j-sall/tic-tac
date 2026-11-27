import "./Leaderboard.css";
import trophyIcon from "../assets/trophy.svg";
import PlayAgain from "../Components/PlayAgain";

function Leaderboard () {
    const players = [
    {username: "user1", score: 120},
    {username: "user2", score: 32},
    {username: "user3", score: 78},
  ]

  function createRow (row) {
    return (
      <div className="rowContainer" key={row.username}>
        <img src={trophyIcon} alt="" className="rowContainer_img"/>
        <h5 className="rowContainer_username">{row.username}</h5>
        <h5 className="rowContainer_score">Score: {row.score}</h5>
      </div>
    )
  }
  return (
    <div className="leaderboardContainer">
      <h1 className="leaderboardTitle">Leaderboard Poké-tic-tac</h1>
      <p>Let's see who's the leader in our game! Might it be you?</p>
      <>{players.map(createRow)}</>
       <PlayAgain />
    </div>
  )
}

export default Leaderboard;
