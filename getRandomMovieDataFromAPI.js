import { displayRandomMovieDataFromAPI } from "./displayRandomMovieDataFromAPI.js";

export const getRandomMovieDataFromAPI = async () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const searchTerm = "The Avengers";

  const URL = `${apiUrl}?s=${searchTerm}&page=1?&apikey=${apiKey}`;
  const res = await fetch(`${URL}`);
  const data = await res.json();

  if (data.Response == "True") displayRandomMovieDataFromAPI(data.Search);
};
