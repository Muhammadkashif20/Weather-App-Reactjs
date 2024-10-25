// import React, { useEffect, useState } from "react";
// import { FaCloud, FaWater , FaTemperatureHigh, FaCompressArrowsAlt } from "react-icons/fa";
// const popularPkCities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Peshawar", "Quetta"];
// function App() {
//   const [selectedCity,SetselectedCity]=useState(popularPkCities[0])// multiple value select ai nahi asakti hai islye [0] index number 0 dy ahai take value 1 hi aye.
//   const [weatherData,setWeatherData]=useState(null)
//   const [loader,SetLoader]=useState(false)
//   const City=(e)=>{
//     SetselectedCity(e.target.value)
//     console.log(e.target.value);
//   }
//   const [weatherDetail, setWeatherDetail] = useState({
//     temperature: "25°C",
//     condition: "Sunny",
//     clouds: "20%",
//     pressure: "1013 hPa",
//   });
//   useEffect(()=>{
//     SetLoader(true)
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=6d52ba4bdbe7bfce20a037fd45a54371`)
//     .then((res)=>res.json())
//     .then((res)=>{
//       console.log(res)
//       setWeatherData(res)})
//     SetLoader(false)
//   },[selectedCity])
//   if(loader)
//       return  <h1>Loading....</h1>
//       console.log('weatherData=>',weatherData);
//       // const temp =Math.round(weatherData?.main?.temp-273.15)
//       // const temp = Math.round((weatherData?.main?.temp - 273.15))
//       const temp=Math.round(weatherData?.main?.temp -273.15)
//       const humidity=Math.round(weatherData?.main?.humidity)
//       const feels_like=Math.round(weatherData?.main?.feels_like -273.15)
//       const pressure=Math.round(weatherData?.main?.pressure -273.15)
      
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center items-center">
//       <div className="max-w-md w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
//         <h1 className="text-center text-2xl font-bold text-purple-600 mb-4">Weather App</h1>
//         <select className="w-full p-2 mb-4 border-2 border-purple-500 rounded-md"
//         value={selectedCity}
//         onChange={City}
//         >
//             {popularPkCities.map((city,index)=>{
//           return(
//             <option key={index} value={city} >{city}</option>
//           )
//         })}
//         </select>
//         <button className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600">
//           Get Weather
//         </button>
//         {/* Weather Information */}
//         <div className="mt-6 space-y-4">
          
//           <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg border border-purple-300">
//             <FaTemperatureHigh className="text-purple-500" />
//             <p className="text-purple-600 font-medium">Temperature</p>
//             <p className="text-lg">{temp} <sup>o</sup></p>
//           </div>
//           <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg border border-purple-300">
//             <FaWater  className="text-yellow-500" />
//             <p className="text-purple-600 font-medium">Humidity </p>
//             <p className="text-lg">{humidity} <sup>o</sup></p>
//           </div>
//           <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg border border-purple-300">
//             <FaCloud className="text-gray-500" />
//             <p className="text-purple-600 font-medium">feels_like</p>
//             <p className="text-lg">{feels_like} <sup>o</sup></p>
//           </div>
//           <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg border border-purple-300">
//             <FaCompressArrowsAlt className="text-blue-500" />
//             <p className="text-purple-600 font-medium">Pressure</p>
//             <p className="text-lg">{pressure} <sup>o</sup></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;
// App.jsx
import React, { useState } from 'react';
import { WiDayCloudy } from 'react-icons/wi'; // Using react-icons for a placeholder weather icon

function App() {
  const [city, setCity] = useState("Karachi");
  const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="w-full max-w-sm p-6 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
        
        {/* City Selector */}
        <div className="text-center mb-6">
          <select
            className="bg-gray-700 p-2 rounded text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Weather Overview */}
        <div className="text-center space-y-2 mb-4">
          <div className="flex justify-center text-5xl text-yellow-300">
            <WiDayCloudy />
          </div>
          <h2 className="text-4xl font-semibold">28°C</h2>
          <p className="text-md text-gray-300">Partly Cloudy</p>
          <p className="text-gray-400 text-sm">Feels like 30°C</p>
        </div>

        {/* Weather Details */}
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

