import React from 'react';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import LocationInput from './components/LocationInput';
import WeatherButtons from './components/WeatherButtons';

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen flex flex-col items-center justify-center">
      <Header />
      <LocationInput />
      <WeatherButtons />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Add multiple WeatherCard components */}
        <WeatherCard day="Monday" temperature="25°C" condition="Sunny" />
        <WeatherCard day="Tuesday" temperature="22°C" condition="Cloudy" />
        <WeatherCard day="Wednesday" temperature="18°C" condition="Rainy" />
        {/* You can add more weather cards as needed */}
      </div>
    </div>
  );
}

export default App;
