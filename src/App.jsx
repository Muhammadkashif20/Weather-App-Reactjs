import React, { useState } from 'react';
import { WiDayCloudy } from 'react-icons/wi'; // Using react-icons for a placeholder weather icon

function App() {
  const [city, setCity] = useState("Karachi");
  const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar","Multan","Rawalpindi","Kashmir"];

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

        {/* Weather Overview*/}
        <div className="text-center space-y-2 mb-4">
          <div className="flex justify-center text-5xl text-yellow-300">
            <WiDayCloudy />
          </div>
          <h2 className="text-4xl font-semibold">28°C</h2>
          <p className="text-md text-gray-300">Partly Cloudy</p>
          <p className="text-gray-400 text-sm">Feels like 30°C</p>
        </div>

        {/* Weather Details  Like Modern Feature's*/}
        <div className="grid grid-cols-2 gap-3 text-center text-xs">
          <div className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
            <p className="font-semibold">Humidity</p>
            <p className="text-lg">60%</p>
          </div>
          <div className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
            <p className="font-semibold">Cloudiness</p>
            <p className="text-lg">40%</p>
          </div>
          <div className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
            <p className="font-semibold">Sunrise</p>
            <p className="text-lg">6:15 AM</p>
          </div>
          <div className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
            <p className="font-semibold">Sunset</p>
            <p className="text-lg">6:45 PM</p>
          </div>
          <div className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
            <p className="font-semibold">Pressure</p>
            <p className="text-lg">1012 hPa</p>
          </div>
          <div className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
            <p className="font-semibold">Wind Speed</p>
            <p className="text-lg">15 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

