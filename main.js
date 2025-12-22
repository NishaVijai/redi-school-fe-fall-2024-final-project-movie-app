import "./style.css";
import github from "./public/assets/images/github.svg";
import { startApp } from "./startApp.js";
import Router from "./Router.js";

const appDiv = document.getElementById("app");

appDiv.innerHTML = `
  <header>
    <nav id="nav-tab">
      <a class="nav_link" href="/">Home</a>
      <a class="nav_link" href="/recentMovieDetails">Recent Movie Details</a>
      <a class="nav_link" href="/favourites">Favourites</a>
      <a class="nav_link" href="/movieDetailsHistory">Movie Details History</a>
    </nav>
  </header>

  <main id="main">
    <section id="main_title_section">
      <h1>OpenMovie Search</h1>
      <p>Search. Discover. Explore movies instantly.</p>
    </section>
  </main>

  <footer>
    <p>Copyright &copy; 2024 - <span id="footer_year"></span></p>

    <a href="https://github.com/NishaVijai/redi-school-fe-fall-2024-final-project-movie-app" target="_blank" rel="noopener noreferrer" title="GitHub Repo project link will open on a new tab"> <img src="${github}" alt="GitHub Logo"> GitHub Repo Link</a>
  </footer>
`;

const getFullYear = () => new Date().getFullYear();

const footerYear = document.getElementById('footer_year');
footerYear.textContent = getFullYear();

window.app = {};
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  startApp();
  app.router.init();
});
