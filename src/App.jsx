import React, { useState } from "react";
import { FaCloud, FaSun, FaTemperatureHigh, FaCompressArrowsAlt } from "react-icons/fa";
const popularPkCities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Peshawar", "Quetta"];
function App() {
  const [selectedCity,SetselectedCity]=useState(popularPkCities[0])// multiple value select ai nahi asakti hai islye [0] index number 0 dy ahai take value 1 hi aye.
  const City=(e)=>{
    SetselectedCity(e.target.value)
    console.log(e.target.value);
  }
  const [weatherData, setWeatherData] = useState({
    temperature: "25°C",
    condition: "Sunny",
    clouds: "20%",
    pressure: "1013 hPa",
  });
 
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center items-center">
      <div className="max-w-md w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-center text-2xl font-bold text-purple-600 mb-4">Weather App</h1>
        <select className="w-full p-2 mb-4 border-2 border-purple-500 rounded-md"
        value={selectedCity}
        onChange={City}
        >
            {popularPkCities.map((city,index)=>{
          return(
            <option key={index} value={city} >{city}</option>
          )
        })}
        </select>
      
      
        <button className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600">
          Get Weather
        </button>

        {/* Weather Information */}
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg border border-purple-300">
            <FaTemperatureHigh className="text-purple-500" />
            <p className="text-purple-600 font-medium">Temperature</p>
            <p className="text-lg">{weatherData.temperature}</p>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg border border-purple-300">
            <FaSun className="text-yellow-500" />
            <p className="text-purple-600 font-medium">Condition</p>
            <p className="text-lg">{weatherData.condition}</p>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg border border-purple-300">
            <FaCloud className="text-gray-500" />
            <p className="text-purple-600 font-medium">Clouds</p>
            <p className="text-lg">{weatherData.clouds}</p>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg border border-purple-300">
            <FaCompressArrowsAlt className="text-blue-500" />
            <p className="text-purple-600 font-medium">Pressure</p>
            <p className="text-lg">{weatherData.pressure}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
