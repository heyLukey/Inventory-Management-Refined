// Get auth-token from local storage

export const getJwt = () => {
  return localStorage.getItem("auth-token");
};
