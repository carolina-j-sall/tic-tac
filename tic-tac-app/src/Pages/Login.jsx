import LoginForm from "../Components/Login";

export default function LoginPage({ onLoginSuccess, onSwitchToRegister }) {
  return (
    <main className="auth-page">
      <LoginForm
        onLoginSuccess={onLoginSuccess}
        onSwitchToRegister={onSwitchToRegister}
      />
    </main>
  );
}