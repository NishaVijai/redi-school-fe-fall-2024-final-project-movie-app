const Router = {
  init: () => {
    history.pushState({}, null, "/");
    document.querySelectorAll('.nav_link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();

        const url = e.target.getAttribute('href');
        Router.nav(url);
      });
    });

    window.addEventListener('popstate', (e) => {
      Router.nav(e.state.route, false);
    });
  },
  nav: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, null, route);
    }

    const searchFormControl = document.querySelector(".search_form_control");
    const displayMovieListContainer = document.querySelector(".display_movie_list_container");
    const displaySearchResultMovieListContainer = document.querySelector(".search_result_movies_container");
    const movieDetailsContainer = document.querySelector(".movie_details_container");
    const recentMovieDetailsContainer = document.querySelector(".recent_movie_details_container");
    const movieDetailsHistoryContainer = document.querySelector(".movie_details_history_container");
    const displayFavouritesMovieListContainer = document.querySelector(".display_favourites_movie_list_container");
    const favButtons = displayFavouritesMovieListContainer.querySelectorAll(".favorite_movie_button");

    const searchInput = document.getElementById("search_input_box");

    let searchInputValue = (searchInput.value).trim();

    if (!recentMovieDetailsContainer) {
      return;
    }

    const addElement = (content) => {
      if (content === "Home") {
        displayMovieListContainer.classList.remove("hide_element");
        displaySearchResultMovieListContainer.classList.add("hide_element");
        searchFormControl.classList.remove("hide_element");
        movieDetailsContainer.classList.remove("hide_element");
        recentMovieDetailsContainer.classList.add("hide_element");
        movieDetailsHistoryContainer.classList.add("hide_element");
        displayFavouritesMovieListContainer.classList.add("hide_element");

        if (searchInputValue.length > 0) {
          displayMovieListContainer.classList.add("hide_element");
          displaySearchResultMovieListContainer.classList.remove("hide_element");
        }
      }

      if (content === "Recent Movie Details") {
        searchFormControl.classList.add("hide_element");
        displayMovieListContainer.classList.add("hide_element");
        displaySearchResultMovieListContainer.classList.add("hide_element");
        movieDetailsContainer.classList.add("hide_element");
        recentMovieDetailsContainer.classList.remove("hide_element");
        movieDetailsHistoryContainer.classList.add("hide_element");
        displayFavouritesMovieListContainer.classList.add("hide_element");
      }

      if (content === "Movie Details History") {
        searchFormControl.classList.add("hide_element");
        displayMovieListContainer.classList.add("hide_element");
        displaySearchResultMovieListContainer.classList.add("hide_element");
        movieDetailsContainer.classList.add("hide_element");
        recentMovieDetailsContainer.classList.add("hide_element");
        movieDetailsHistoryContainer.classList.remove("hide_element");
        displayFavouritesMovieListContainer.classList.add("hide_element");
      }

      if (content === "Favourites") {
        searchFormControl.classList.add("hide_element");
        displayMovieListContainer.classList.add("hide_element");
        displaySearchResultMovieListContainer.classList.add("hide_element");
        movieDetailsContainer.classList.add("hide_element");
        recentMovieDetailsContainer.classList.add("hide_element");
        movieDetailsHistoryContainer.classList.add("hide_element");
        displayFavouritesMovieListContainer.classList.remove("hide_element");
        favButtons.forEach(favButton => favButton.classList.add("favorite_movie_button_clicked"));
      }

      window.scrollX = 0;
      window.scrollY = 0;
    };

    switch (route) {
      case "/":
        return addElement("Home");
      case "/recentMovieDetails":
        return addElement("Recent Movie Details");
      case "/movieDetailsHistory":
        return addElement("Movie Details History");
      case "/favourites":
        return addElement("Favourites");
    }
  }
};

export default Router;
