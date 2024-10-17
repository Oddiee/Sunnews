// WeatherCard.jsx
import React from "react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return <p>Loading...</p>; // Handle case when data isn't ready yet
  }

  const { name, main, wind, weather } = weatherData;

  return (
    <div className="card shadow-lg bg-white rounded-xl p-6 text-center max-w-md mx-auto">
      {/* Weather Icon */}
      <div className="flex justify-center mb-4">
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
          alt="Weather Icon"
          className="w-24"
        />
      </div>
      {/* Location */}
      <h2 className="text-2xl font-bold">
        {name} <span>📍</span>
      </h2>
      {/* Temperature */}
      <div className="text-6xl font-bold my-4">
        {Math.round(main.temp)}<span className="align-top text-2xl">°C</span>
      </div>
      {/* Weather Info */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-sm font-roboto font-semibold">Humidity</p>
          <p className="font-roboto font-semibold">{main.humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-roboto font-semibold">{weather[0].description}</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-roboto font-semibold">Wind Speed</p>
          <p className="font-roboto font-semibold">{wind.speed} Km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
