import React, { useState } from "react";
import "./Forecast.css";
import ForecastInformation from "./ForecastInformation";
import axios from "axios";


export default function Forecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);

function showForecast(response) {
setForecast(response.data);
setLoaded(true);
    }
    
   
if (loaded && props.city === forecast.city.name) {
return (
  <div className="weatherForecast row">
      <ForecastInformation data={forecast.list[0]} />
      <ForecastInformation data={forecast.list[1]} />
      <ForecastInformation data={forecast.list[2]} />
      <ForecastInformation data={forecast.list[3]} />
      <ForecastInformation data={forecast.list[4]} />
    </div>

);
} else {
 let apiKey = "e225c6d111cb3447388ed224dda3872f";
 let forecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
 axios.get(forecastApi).then(showForecast);

 return null;
}
    
}