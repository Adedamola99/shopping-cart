// src/utils/fakeAuth.ts
export type User = {
  id: string;
  name: string;
  email: string;
};

const LS_KEY = "demo_current_user";

/** Simulate async login (resolve with user or reject with message) */
export async function loginUser(
  email: string,
  password: string
): Promise<User> {
  await new Promise((r) => setTimeout(r, 700)); // simulate delay

  // Very simple credential check: registered users are stored in localStorage under "demo_users"
  const usersRaw = localStorage.getItem("demo_users");
  const users = usersRaw ? JSON.parse(usersRaw) : [];

  const found = users.find(
    (u: any) => u.email === email && u.password === password
  );
  if (!found) throw new Error("Invalid email or password");

  const user: User = { id: found.id, name: found.name, email: found.email };
  localStorage.setItem(LS_KEY, JSON.stringify(user));
  return user;
}

/** Simulate registration (reject if email exists) */
export async function registerUser(
  name: string,
  email: string,
  password: string
): Promise<User> {
  await new Promise((r) => setTimeout(r, 900));

  const usersRaw = localStorage.getItem("demo_users");
  const users = usersRaw ? JSON.parse(usersRaw) : [];

  if (users.find((u: any) => u.email === email)) {
    throw new Error("Email already registered");
  }

  const newUser = { id: `u_${Date.now()}`, name, email, password };
  users.push(newUser);
  localStorage.setItem("demo_users", JSON.stringify(users));

  const user = { id: newUser.id, name: newUser.name, email: newUser.email };
  localStorage.setItem(LS_KEY, JSON.stringify(user));
  return user;
}

/** Log out */
export function logout() {
  localStorage.removeItem(LS_KEY);
}

/** Get current user if any */
export function getCurrentUser(): User | null {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
