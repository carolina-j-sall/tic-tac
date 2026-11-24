import { useState } from "react";
import LoginPage from "../Pages/Login";
import CreateAccountPage from "../Pages/Create-account";
import { getCurrentUser, logoutUser } from "./utils/authStorage";

export default function App() {
  const [currentUser, setCurrentUser] = useState(() => getCurrentUser());
  const [authView, setAuthView] = useState("login");

  function handleLogout() {
    logoutUser();
    setCurrentUser(null);
    setAuthView("login");
  }

  if (currentUser) {
    return (
      <main className="auth-page">
        <div className="auth-form" style={{ textAlign: "center" }}>
          <h2>Welcome, {currentUser.username}!</h2>
          <p>
            Wins: {currentUser.wins} | Losses: {currentUser.losses} | Draws:{" "}
            {currentUser.draws}
          </p>
          <button
            type="button"
            className="btn btnSecondary"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </main>
    );
  }

  return authView === "login" ? (
    <LoginPage
      onLoginSuccess={(user) => setCurrentUser(user)}
      onSwitchToRegister={() => setAuthView("register")}
    />
  ) : (
    <CreateAccountPage
      onRegisterSuccess={(user) => setCurrentUser(user)}
      onSwitchToLogin={() => setAuthView("login")}
    />
  );
}