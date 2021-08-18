import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [temperatureUnit, setTemperatureUnit] = useState("metric");

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
    if (city.length > 0) {
      let apiKey = "6b953ee073bb6d456951bd28c1caeaaf";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${temperatureUnit}`;
      axios.get(apiUrl).then(displayWeather);
    }
  }

  function getTemperature(celsius) {
    if (temperatureUnit === "metric") {
      return celsius;
    }
    return (celsius * 9) / 5 + 32;
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
          <li> {Math.round(getTemperature(weather.temperature))}°C</li>
          <li> {weather.description}</li>
          <li>{weather.humidity}% Humidity</li>
          <li>{weather.wind}mph Wind</li>
        </ul>
        <input
          type="radio"
          id="metric"
          name="temperature-unit"
          value="metric"
          checked={temperatureUnit === "metric"}
          onChange={() => setTemperatureUnit("metric")}
        />
        <label htmlFor="metric">°C</label>
        <input
          type="radio"
          id="imperial"
          name="temperature-unit"
          value="imperial"
          checked={temperatureUnit === "imperial"}
          onChange={() => setTemperatureUnit("imperial")}
        />
        <label htmlFor="imperial">°F</label>
      </div>
    );
  } else {
    return form;
  }
}
