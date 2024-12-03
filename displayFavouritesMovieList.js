import noImage from "./assets/images/missingImage.svg";
import awardImage from "./assets/images/award2.svg";

export const displayFavouritesMovieList = (movieDetails) => {
  const displayFavouritesMovieListContainer = document.querySelector(".display_favourites_movie_list_container");

  displayFavouritesMovieListContainer.innerHTML += `
  <div>
    <div class="movie_list_item_image">
      <img src="${(movieDetails.Poster != "N/A") ? movieDetails.Poster : noImage}" alt="poster">
    </div>

    <section class="search_result_container_movie_info">
      <h3 class="movie_list_item_title">${movieDetails.Title}</h3>
      <p class="movie_list_item_year">Year: ${movieDetails.Year}</p>
    </section>
  </div>
  `;
};
