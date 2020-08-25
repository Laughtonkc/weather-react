import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function ForecastInformation(props) {

  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "CPARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

function hours() {
  let date = new Date(props.data.dt * 1000);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${hours}:00`
}

  return (
      
    <div className="col" id="forecast-card">
      <h5 id="day-of-the-week">{hours()}</h5>
      <span id="forecast-img">
        <ReactAnimatedWeather
          icon={codeMapping[props.data.weather[0].icon]}
          color="#213044"
          size={75}
          animate={true}
        />
      </span>
      <p id="weeks-tempature">
        <span className="forecast-temperature">
          {Math.round(props.data.main.temp)}º
        </span>
      </p>
      <p id="description-of-temp">
        {props.data.weather[0].description}
      </p>
    </div>
  );
}