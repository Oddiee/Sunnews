import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city); // Calls the API with the entered city name
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search Location"
        className="input input-bordered w-full max-w-xs font-roboto font-black"
      />
      <button type="submit" className="btn btn-primary ml-3 font-roboto">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

