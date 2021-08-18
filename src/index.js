import React from "react";
import ReactDOM from "react-dom";
import Search from "./search";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
          </div>
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/ffionwyn/weather-project-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source code
        </a>
        <span> by Ffion Griffiths hosted on Netlify</span>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
