import { useState } from "react";
import LoginPage from "../Pages/Login";
import CreateAccountPage from "../Pages/Create-account";
import GamePage from "../Pages/Game-page";
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
      <GamePage
        user={currentUser}
        onUserUpdate={setCurrentUser}
        onLogout={handleLogout}
      />
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