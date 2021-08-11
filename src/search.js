import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "6b953ee073bb6d456951bd28c1caeaaf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city or town..."
        onChange={updateCity}
      />
      <button type="Submit">Search</button>
      <button type="Submit">Current Location</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>{city} </li>
          <li> {Math.round(weather.temperature)}°C</li>
          <li> {weather.description}</li>
          <li>{weather.humidity}% Humidity</li>
          <li>{weather.wind}mph Wind</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
    <small>
      <a
        href="https://github.com/ffionwyn/weather-app-react.git"
        target="_blank"
        rel="noreferrer"
      >
        Open source code
      </a>
      <span> by Ffion Griffiths</span>
    </small>;
}
