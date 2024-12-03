import noImage from "./assets/images/missingImage.svg";
import awardImage from "./assets/images/award2.svg";

export const displayMovieDetailsHistory = (movieDetails) => {
  const movieDetailsHistoryContainer = document.querySelector(".movie_details_history_container");

  movieDetailsHistoryContainer.innerHTML += `
  <div>
    <div class="search_result_container_movie_poster">
      <img src="${(movieDetails.Poster != "N/A") ? movieDetails.Poster : noImage}" alt="poster">
    </div>

    <section class="search_result_container_movie_info">
      <h3 class="search_result_container_movie_title">${movieDetails.Title}</h3>

      <ul class="search_result_container_movie_misc_info">
          <li class="year">Year: ${movieDetails.Year}</li>
          <li class="ratings">Ratings: ${movieDetails.Rated}</li>
          <li class="released">Released: ${movieDetails.Released}</li>
      </ul>

      <p class="genre">
        <b>Genre:</b> ${movieDetails.Genre}
      </p>

      <p class="writer">
        <b>Writer:</b> ${movieDetails.Writer}
      </p>

      <p class="actors">
        <b>Actors: </b>${movieDetails.Actors}
      </p>

      <p class="plot">
        <b>Plot:</b> ${movieDetails.Plot}
      </p>

      <p class="language">
        <b>Language:</b> ${movieDetails.Language}
      </p>

      <p class="awards">
        <img src="${awardImage}" alt="Trophy"> ${movieDetails.Awards}
      </p>
    </section>
  </div>
  `;
};
