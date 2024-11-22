import { displayMovieList } from "./displayMovieList.js";

export const getMovieAPIdata = async (inputValue) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const URL = `${apiUrl}?s=${inputValue}&page=1&apikey=${apiKey}`;
  const res = await fetch(`${URL}`);
  const data = await res.json();

  if (data.Response == "True") displayMovieList(data.Search);
};
