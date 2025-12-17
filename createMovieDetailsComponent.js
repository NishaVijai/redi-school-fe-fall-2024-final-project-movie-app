import noImage from "./public/assets/images/missingImage.svg";
import awardImage from "./public/assets/images/award2.svg";

export const createMovieDetailsComponent = (htmlContainer, movieDetails) => {
  htmlContainer.innerHTML += `
    <div class="search_result_container_movie_poster">
      <img class="movie-poster" alt="poster">
    </div>

    <section class="search_result_container_movie_info">
      <h3 class="search_result_container_movie_title">${movieDetails.Title}</h3>

      <ul class="search_result_container_movie_misc_info">
        <li class="year">Year: ${movieDetails.Year}</li>
        <li class="ratings">Ratings: ${movieDetails.Rated}</li>
        <li class="released">Released: ${movieDetails.Released}</li>
      </ul>

      <p class="genre"><b>Genre:</b> ${movieDetails.Genre}</p>
      <p class="writer"><b>Writer:</b> ${movieDetails.Writer}</p>
      <p class="actors"><b>Actors:</b> ${movieDetails.Actors}</p>
      <p class="plot"><b>Plot:</b> ${movieDetails.Plot}</p>
      <p class="language"><b>Language:</b> ${movieDetails.Language}</p>

      <p class="awards">
        <img src="${awardImage}" alt="Trophy"> ${movieDetails.Awards}
      </p>
    </section>
  `;

  // ✅ Select the last inserted poster image
  const posterImg = htmlContainer.querySelector(
    ".movie-poster:last-of-type"
  );

  posterImg.src =
    movieDetails.Poster && movieDetails.Poster !== "N/A"
      ? movieDetails.Poster
      : noImage;

  posterImg.onerror = function () {
    this.onerror = null; // prevent infinite loop
    this.src = noImage;
  };
};
