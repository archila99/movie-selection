const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

if (!API_KEY) {
  console.warn(
    "VITE_TMDB_API_KEY is missing. Create a .env file with VITE_TMDB_API_KEY=your_key. Get one at https://www.themoviedb.org/settings/api"
  );
}

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