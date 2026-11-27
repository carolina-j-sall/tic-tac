import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./Pages/Login";
import Leaderboard from "./Pages/ShowLeaderboard";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<LoginPage />}>Login</Route>
          <Route path="/leaderboard" element={<Leaderboard />}>Leaderboard</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
