import "./style.css";
import { startApp } from "./startApp.js";

const appDiv = document.getElementById("app");

appDiv.innerHTML = `
  <header>
    <h1>Movie Details App</h1>
    <p>Search by movie name to read more details about the movie</p>
  </header>

  <main id="main">

  </main>

  <footer>
    <p>Copyright footer</p>
  </footer>
`;

startApp();
