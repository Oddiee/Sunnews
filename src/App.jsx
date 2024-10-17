// Importation of the components 
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import './app.css';
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    const API_KEY = '4af46341dca475a9ec52e7bbd1bb5459';  // Get your API key from OpenWeatherMap
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${'4af46341dca475a9ec52e7bbd1bb5459'}`;

    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-blue-500 p-60">
      <h1 className="text-4xl font-roboto font-bold text-center mb-8">SunNews for Today</h1>
      <SearchBar onSearch={fetchWeather} />
      {loading && <p className="text-center">Loading...</p>}
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
    
  );
  
};

export default App;
