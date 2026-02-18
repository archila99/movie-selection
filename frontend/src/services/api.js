const API_KEY = "5af5e15c00d01f07b4bc7ee3416a9a95";
const BASE_URL = "https://api.themoviedb.org/3";

const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.status_message || `API error: ${response.status}`);
  }
  return data.results ?? [];
};

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return handleResponse(response);
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  return handleResponse(response);
};