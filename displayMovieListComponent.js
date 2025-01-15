import { createMovieListComponent } from "./createMovieListComponent.js";
import { getRandomMovieDetailsFromAPI } from "./getRandomMovieDetailsFromAPI.js";

export const displayMovieListComponent = (htmlContainer, movieData, htmlParentContainer) => {
  for (let i = 0; i < movieData.length; i++) {
    createMovieListComponent(htmlContainer, movieData[i]);
  };
  getRandomMovieDetailsFromAPI(htmlParentContainer);
};
