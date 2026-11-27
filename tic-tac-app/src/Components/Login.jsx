import { useState } from "react";
import { loginUser } from "../utils/authStorage";
import "../src/auth.css";

export default function LoginForm({ onLoginSuccess, onSwitchToRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const result = loginUser(username, password);
    if (!result.success) {
      setError(result.message);
      return;
    }

    onLoginSuccess(result.user);
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Log In</h2>

      {error && <p className="auth-error">{error}</p>}

      <div className="form-group">
        <label htmlFor="login-username">Username</label>
        <input
          id="login-username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
      </div>

      <button type="submit" className="btn btnPrimary">
        Log In
      </button>

      <p className="auth-switch">
        Don&apos;t have an account?{" "}
        <button type="button" className="link-btn" onClick={onSwitchToRegister}>
          Create Account
        </button>
      </p>
    </form>
  );
}
