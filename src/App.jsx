import React, { useState } from 'react';
import WeatherOverView from './Components/WeatherOverView';
import WeatherDetails from './WeatherDetails';
const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar","Multan","Rawalpindi","Kashmir"];
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="w-full max-w-sm p-6 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
        {/* Select Your City */}
        <div className="text-center mb-6">
          <select
            className="bg-gray-700 p-2 rounded text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
          </select>
        </div>
        <WeatherOverView/>
        <WeatherDetails/>
      </div>
    </div>
  );
}

export default App;

