export async function loggedIn() {
  return await (await fetch("/auth/loggedIn")).json();
}
