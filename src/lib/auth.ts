// Temporary auth state management until we add a proper backend
const AUTH_KEY = "enthos_auth";

export const setAuth = (data: { email: string }) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(data));
};

export const getAuth = () => {
  const data = localStorage.getItem(AUTH_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearAuth = () => {
  localStorage.removeItem(AUTH_KEY);
};
