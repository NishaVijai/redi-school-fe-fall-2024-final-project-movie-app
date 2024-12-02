const Router = {
  init: () => {
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
    // console.log("Running - route: ", route);

    if (addToHistory) {
      history.pushState({ route }, null, route);
    }

    const displayMovieListContainer = document.querySelector(".display_movie_list_container");
    const searchResultContainer = document.querySelector(".search_result_container");
    const movieDetailsHistoryContainer = document.querySelector(".movie_details_history_container");
    const displayFavouritesMovieListContainer = document.querySelector(".display_favourites_movie_list_container");

    const addElement = (content) => {
      if (content === "Home") {
        displayMovieListContainer.classList.remove("hide_element");
        searchResultContainer.classList.remove("hide_element");
        movieDetailsHistoryContainer.classList.add("hide_element");
        displayFavouritesMovieListContainer.classList.add("hide_element");
      }

      if (content === "Movie Details") {
        displayMovieListContainer.classList.add("hide_element");
        searchResultContainer.classList.remove("hide_element");
        movieDetailsHistoryContainer.classList.add("hide_element");
        displayFavouritesMovieListContainer.classList.add("hide_element");
      }

      if (content === "Movie Details History") {
        displayMovieListContainer.classList.add("hide_element");
        searchResultContainer.classList.add("hide_element");
        movieDetailsHistoryContainer.classList.remove("hide_element");
        displayFavouritesMovieListContainer.classList.add("hide_element");
      }

      if (content === "Favourites") {
        displayMovieListContainer.classList.add("hide_element");
        searchResultContainer.classList.add("hide_element");
        movieDetailsHistoryContainer.classList.add("hide_element");
        displayFavouritesMovieListContainer.classList.remove("hide_element");
      }

      window.scrollX = 0;
      window.scrollY = 0;
    };

    switch (route) {
      case "/":
        return addElement("Home");
      case "/movieDetails":
        return addElement("Movie Details");
      case "/movieDetailsHistory":
        return addElement("Movie Details History");
      case "/favourites":
        return addElement("Favourites");
    }
  }
};

export default Router;
