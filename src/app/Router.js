// src/app/Router.js
import { savedMovieIdsFromComponent } from "../../createMovieListComponent.js";
import { dom } from "../utils/dom.js";
import { show, hide } from "../utils/ui.js";

const Router = {
  init() {
    history.pushState({ route: "/" }, "", "/");

    document.querySelectorAll(".nav_link").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        Router.nav(link.getAttribute("href"));
      });
    });

    window.addEventListener("popstate", e => {
      Router.nav(e.state?.route || "/", false);
    });
  },

  nav(route, addToHistory = true) {
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    // 🛡️ Dev-safe guard
    if (!dom.movieList()) return;

    const searchValue = dom.searchInput()?.value.trim() || "";

    const showHome = () => {
      show(
        dom.searchForm(),
        dom.movieDetails(),
        dom.movieDetailsSection(),
        dom.defaultMovieListSection()
      );

      hide(
        dom.recentDetails(),
        dom.movieDetailsHistory(),
        dom.favourites(),
        dom.searchResultsSection()
      );

      if (searchValue) {
        hide(dom.defaultMovieListSection());
        show(dom.searchResultsSection());
      } else {
        show(dom.defaultMovieListSection());
        hide(dom.searchResultsSection());
      }
    };

    const showRecentMovieDetails = () => {
      show(dom.recentDetails());
      hide(
        dom.searchForm(),
        dom.defaultMovieListSection(),
        dom.searchResultsSection(),
        dom.movieDetails(),
        dom.movieDetailsHistory(),
        dom.favourites(),
        dom.movieDetailsSection()
      );
    };

    const showMovieDetailsHistory = () => {
      show(dom.movieDetailsHistory());
      hide(
        dom.searchForm(),
        dom.defaultMovieListSection(),
        dom.searchResultsSection(),
        dom.movieDetails(),
        dom.recentDetails(),
        dom.favourites(),
        dom.movieDetailsSection()
      );
    };

    const showFavourites = () => {
      show(dom.favourites());
      hide(
        dom.searchForm(),
        dom.defaultMovieListSection(),
        dom.searchResultsSection(),
        dom.movieDetails(),
        dom.recentDetails(),
        dom.movieDetailsHistory(),
        dom.movieDetailsSection()
      );

      const emptyText = dom
        .favourites()
        ?.querySelector(".favorite_movie_list_empty_text");

      if (emptyText) {
        emptyText.classList.toggle(
          "hide_element",
          savedMovieIdsFromComponent.length !== 0
        );
      }

      dom
        .favourites()
        ?.querySelectorAll(".favorite_movie_button")
        .forEach(btn =>
          btn.classList.add("favorite_movie_button_clicked")
        );
    };

    switch (route) {
      case "/":
        showHome();
        break;
      case "/recentMovieDetails":
        showRecentMovieDetails();
        break;
      case "/movieDetailsHistory":
        showMovieDetailsHistory();
        break;
      case "/favourites":
        showFavourites();
        break;
    }

    window.scrollTo(0, 0);
  }
};

export default Router;
