import Leaderboard from "../Components/Leaderboard";
import PlayAgain from "../Components/PlayAgain";

function App() {
  const players = [
    {username: "user-one", score: 120},
    {username: "user-two", score: 20},
    {username: "user-three", score: 32}, 
  ];
  return (
    <>
      <Leaderboard row = {players} />
      <PlayAgain />
    </>
  )
}

export default App
