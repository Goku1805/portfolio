import React from "react";

import "./App.css";
import Main from "./components/main";
import { Link } from "react-router-dom";
import goku from "./components/goku.pdf";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        {
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        }

        <Link className="navbar-brand" to="/">
          Gokul Parath
        </Link>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link" to={goku} target="_blank">
                Resume <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
