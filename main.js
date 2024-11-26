import "./style.css";
import github from "./assets/images/github.svg";
import { startApp } from "./startApp.js";

const appDiv = document.getElementById("app");

appDiv.innerHTML = `
  <header>
    <nav>
      <ul id="nav-tab">
        <li class="active"><a href="">Home</a></li>
        <li><a href="#displayMovies">Display Movies</a></li>
        <li><a href="#movieDetails">Movie Details</a></li>
        <li><a href="#">Seen</a></li>
        <li><a href="#">Watch Later</a></li>
      </ul>
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

startApp();
