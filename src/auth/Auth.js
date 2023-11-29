export const login = () => {
  localStorage.setItem("isLoggedIn", "true");
};

export const logout = () => {
  localStorage.setItem("isLoggedIn", "false");
};

export const isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};
