// src/components/createMovieDetailsComponent.js
import noImage from "./public/assets/images/missingImage.svg";
import awardImage from "./public/assets/images/award2.svg";

/**
 * Render a movie's details into a given container.
 * @param {HTMLElement} container - The parent element to insert the movie details.
 * @param {Object} movie - Movie details from OMDb API.
 */
export const createMovieDetailsComponent = (container, movie) => {
  container.innerHTML = `
    <div class="movie_poster_container">
      <img class="movie-poster" alt="${movie.Title} poster">
    </div>

    <section class="movie_info_container">
      <h3 class="movie_title">${movie.Title}</h3>

      <ul class="movie_misc_info">
        <li><b>Year:</b> ${movie.Year}</li>
        <li><b>Ratings:</b> ${movie.Rated}</li>
        <li><b>Released:</b> ${movie.Released}</li>
      </ul>

      <p class="genre"><b>Genre:</b> ${movie.Genre}</p>
      <p class="writer"><b>Writer:</b> ${movie.Writer}</p>
      <p class="actors"><b>Actors:</b> ${movie.Actors}</p>
      <p class="plot"><b>Plot:</b> ${movie.Plot}</p>
      <p class="language"><b>Language:</b> ${movie.Language}</p>
      <p class="awards">
        <img src="${awardImage}" alt="Award"> ${movie.Awards}
      </p>
    </section>
  `;

  // Poster image with fallback
  const posterImg = container.querySelector(".movie-poster");
  posterImg.src = movie.Poster && movie.Poster !== "N/A" ? movie.Poster : noImage;
  posterImg.onerror = () => { posterImg.src = noImage; };
};
