const USERS_KEY = "tictac_users";
const CURRENT_USER_KEY = "tictac_current_user";

// Get all registered users
export function getUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

// Create a new account and save to localStorage
export function registerUser(username, password) {
  const trimmedName = username.trim();

  if (!trimmedName || !password) {
    return { success: false, message: "Username and password are required." };
  }

  const users = getUsers();
  const exists = users.some(
    (u) => u.username.toLowerCase() === trimmedName.toLowerCase()
  );

  if (exists) {
    return { success: false, message: "Username is already taken." };
  }

  const newUser = {
    id: Date.now().toString(),
    username: trimmedName,
    password,
    wins: 0,
    losses: 0,
    draws: 0,
  };

  localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
  localStorage.setItem(CURRENT_USER_KEY, newUser.username);

  return { success: true, user: newUser };
}

// Validate credentials and log in
export function loginUser(username, password) {
  const trimmedName = username.trim();
  const users = getUsers();

  const user = users.find(
    (u) =>
      u.username.toLowerCase() === trimmedName.toLowerCase() &&
      u.password === password
  );

  if (!user) {
    return { success: false, message: "Invalid username or password." };
  }

  localStorage.setItem(CURRENT_USER_KEY, user.username);
  return { success: true, user };
}

// Keep user logged in on page reload
export function getCurrentUser() {
  const activeUsername = localStorage.getItem(CURRENT_USER_KEY);
  if (!activeUsername) return null;
  return getUsers().find((u) => u.username === activeUsername) || null;
}

// Log out current user
export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

// Shared helper for Denis/Carolina to record match outcomes ("win" | "loss" | "draw")
export function updateUserStats(username, result) {
  const users = getUsers();
  const updated = users.map((user) => {
    if (user.username !== username) return user;
    return {
      ...user,
      wins: result === "win" ? user.wins + 1 : user.wins,
      losses: result === "loss" ? user.losses + 1 : user.losses,
      draws: result === "draw" ? user.draws + 1 : user.draws,
    };
  });

  localStorage.setItem(USERS_KEY, JSON.stringify(updated));
}