import React, { useState } from "react";
 import Loader from "react-loader-spinner";
import "./Weather.css";
import Axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
 
  function displayWeather(response) {
    setWeatherData({
      tempature: response.data.main.temp,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: "Monday, August 21, 2020",
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div>
        <form id="search-for-city">
          <button
            type="button"
            id="location"
            className="col-3 ml-md-5 pl-4 pr-4 mr-md-3"
          >
            <img
              id="search-img"
              src="https://i.dlpng.com/static/png/3964068-free-location-icon-white-png-375681-download-location-icon-white-marker-png-black-and-white-1200_1200_preview.webp"
              alt="search"
            />
          </button>
          <span id="search-form" className="col-sm-6 ml-5 ml-md-4 mr-2">
            <input
              id="search-city"
              type="search"
              placeholder="Search for a city..."
              autocomplete="off"
            />
          </span>
          <button
            id="submit-button"
            className="col-3 ml-md-3 pl-4 pr-4 mr-md-2"
            type="submit"
          >
            <img
              id="search-img"
              src="https://www.vippng.com/png/full/493-4938160_magnifying-glass-png-white-search-icon-white-png.png"
              alt="search"
            />
          </button>
        </form>
        <div className="media">
          <div className="media-body">
            <h5 className="col-sm" id="main-city">
              {weatherData.city}
            </h5>
          </div>
        </div>
    <p id="todays-date">{weatherData.date}</p>
        <div className="weather-tempature">
          <div className="row">
            <p className="col-6" id="current-temp">
              {Math.round(weatherData.tempature)}
            </p>
            <span className="active">
              <a href="/" className="col-.5" id="fahrenheit-main">
                Fº
              </a>
            </span>
            <a href="/" className="col-.5" id="slash-main">
              /
            </a>
            <span className="inactive">
              <a href="/" className="col-.5" id="celsius-main">
                Cº
              </a>
            </span>
          </div>
        </div>
        <img
          id="current-weather-img"
          className="col-6"
          src={weatherData.icon}
          alt={weatherData.description}
        />
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
        </div>
      </div>
    );
  } else {
    let apiKey = "e225c6d111cb3447388ed224dda3872f";
    let city = "London"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    Axios.get(apiUrl).then(displayWeather);
    return (
      <Loader
        id="loader"
        type="ThreeDots"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={7000}
      />
    );
  }
}
