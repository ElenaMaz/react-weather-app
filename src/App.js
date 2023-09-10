import "./App.css";
import React from "react";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer>
        This project was coded by Olena Mazurenko and is{" "}
        <a
          href="https://github.com/ElenaMaz/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on Github
        </a>{" "}
        and{" "}
        <a
          href="https://vocal-tapioca-489c64.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify{" "}
        </a>
      </footer>
    </div>
  );
}
