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
      <small>
        <a
          href="https://github.com/ffionwyn/weather-app-react.git"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>
        <span> by Ffion Griffiths</span>
      </small>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
