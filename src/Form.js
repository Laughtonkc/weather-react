import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handelSubmit(event) {
    event.preventDefault();
    setMessage(`${city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form id="search-for-city" onSubmit={handelSubmit}>
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
            onChange={changeCity}
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
      <div class="media">
        <div class="media-body">
          <h5 class="col-sm" id="main-city">
            {message}
          </h5>
        </div>
      </div>
    </div>
  );
}
