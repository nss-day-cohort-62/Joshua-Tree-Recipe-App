const API = "http://localhost:8088";

export const fetchAllRecipes = () => {
  return fetch(`${API}/recipes`).then((response) => response.json());
};
