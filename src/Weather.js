import React, { useState } from "react";
import "./Weather.css";
import Axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TempatureChanger from "./TempatureChanger";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      tempature: response.data.main.temp,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
    
  }

  function search() {
  const apiKey = "e225c6d111cb3447388ed224dda3872f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
   Axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    
  }
  function handlecityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form id="search-for-city" onSubmit={handleSubmit}>
          <div className="row">
            <span id="search-form" className="col-9">
              <input
                id="search-city"
                type="search"
                placeholder="Search for a city..."
                autoComplete="off"
                onChange={handlecityChange}
              />
            </span>
            <button
              id="submit-button"
              className="col-1 mr-5 "
              type="submit"
            >
              <img
                id="search-img"
                src="https://www.vippng.com/png/full/493-4938160_magnifying-glass-png-white-search-icon-white-png.png"
                alt="search"
              />
            </button>
          </div>
        </form>
        <div className="media">
          <div className="media-body">
            <h5 className="col-sm" id="main-city">
              {weatherData.city}
            </h5>
          </div>
        </div>
        <p id="todays-date">
          <FormattedDate date={weatherData.date} />
        </p>
        <TempatureChanger imperial={weatherData.tempature} />
        <div id="current-weather-img" className="col-6">
          <WeatherIcon code={weatherData.icon} />
        </div>
        <div className="row">
          <p className="col-sm-3" id="current-weather-attributes-description">
            {weatherData.description}
          </p>
          <p className="col-sm-4" id="current-weather-attributes-humidity">
            humidity{" "}
            <span id="humidity"> {Math.round(weatherData.humidity)}% </span>
          </p>
          <p className="col-sm-3" id="current-weather-attributes-windspeed">
            Wind Speed {Math.round(weatherData.windSpeed)}m/h
          </p>
          <Forecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
