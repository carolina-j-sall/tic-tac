import CreateAccountForm from "../Components/Create-account";

export default function CreateAccountPage({ onRegisterSuccess, onSwitchToLogin }) {
  return (
    <main className="auth-page">
      <CreateAccountForm
        onRegisterSuccess={onRegisterSuccess}
        onSwitchToLogin={onSwitchToLogin}
      />
    </main>
  );
}