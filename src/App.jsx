import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
    <div className='flex flex-col min-h-screen bg-theme-adaptive'>
        
      <main className='flex-grow container mx-auto px-4 pb-12 '>
      <Navbar onSearch={fetchWeather}/>
       
      <div className='mt-20'><h1 className="text-4xl font-bold text-center mb-8">SunNews for Today</h1>
      <SearchBar onSearch={fetchWeather} /></div>
      {loading && <p className="text-center">Loading...</p>}
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherCard weatherData={weatherData} />}
      
      </main>   
    <Footer />
      
    </div>
    
  );
  
};

export default App;
