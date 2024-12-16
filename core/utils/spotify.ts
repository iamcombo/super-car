export const storeAccessToken = (token: string) => {
  localStorage.setItem("spotify_access_token", token);
};

export const getStoredAccessToken = () => {
  return localStorage.getItem("spotify_access_token");
};
