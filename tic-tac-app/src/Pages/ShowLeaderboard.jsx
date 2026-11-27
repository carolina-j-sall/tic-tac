import Leaderboard from "../Components/Leaderboard";
import PlayAgain from "../Components/PlayAgain";

function ShowLeaderboard () {
  const players = [
    {username: "user1", score: 120},
    {username: "user2", score: 32},
    {username: "user3", score: 78},
  ]

  return (
    <>
      <Leaderboard row={players} />
      <PlayAgain />
    </>
  )
}

export default ShowLeaderboard;
