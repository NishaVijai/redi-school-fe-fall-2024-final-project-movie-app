import "./style.css";
import github from "./assets/images/github.svg";
import { startApp } from "./startApp.js";
import Router from "./Router.js";

const appDiv = document.getElementById("app");
{/* <a class="nav_link" href="/liked">Liked</a>
<a class="nav_link" href="/watchLater">Watch Later</a> */}

appDiv.innerHTML = `
  <header>
    <nav id="nav-tab">
      <a class="nav_link" href="/">Home</a>
      <a class="nav_link" href="/movieDetails">Recent Movie Details</a>
      <a class="nav_link" href="/favourites">Favourites</a>
      <a class="nav_link" href="/movieDetailsHistory">Movie Details History</a>
    </nav>

    <section>
      <h1>Movie Details API search App</h1>
      <p>Search by movie name to read more details about the movie</p>
    </section>
  </header>

  <main id="main">

  </main>

  <footer>
    <p>Copyright &copy; 2024 - <span id="footer_year"></span></p>

    <a href="https://github.com/NishaVijai/redi-school-fe-fall-2024-final-project-movie-app" target="_blank" rel="noopener noreferrer" title="GitHub Repo project link will open on a new tab"> <img src="${github}"> GitHub Repo Link</a>
  </footer>
`;

const getFullYear = () => new Date().getFullYear();

const footerYear = document.getElementById('footer_year');
footerYear.textContent = getFullYear();

// startApp();

window.app = {};
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  startApp();
  app.router.init();
});
