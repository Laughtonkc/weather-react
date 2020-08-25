import React, { useState } from "react";
import Loader from "react-loader-spinner";
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
          <button
            type="button"
            id="location"
            className="col-3 ml-md-5 pl-4 pr-4 mr-md-3"
          >
            <img
              id="search-img"
              src="https://www.pngkit.com/png/full/109-1093253_find-a-location-icon-png-white.png"
              alt="search"
            />
          </button>
          <span id="search-form" className="col-sm-6 ml-5 ml-md-4 mr-2">
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
          <Forecast city={weatherData.city}/>
        </div>
      </div>
    );
  } else {
    search();
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
