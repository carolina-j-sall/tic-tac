import "./Leaderboard.css";
import trophyIcon from "../assets/trophy.svg";

function Leaderboard (props) {
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
      <>{props.row.map(createRow)}</>
    </div>
  )
}

export default Leaderboard
