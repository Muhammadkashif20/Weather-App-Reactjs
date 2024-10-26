{/* Weather Details  Like Modern Feature's Page*/}
import React from 'react'

const WeatherDetails = ({humidity}) => {
  return (
    <div>
       <div className="grid grid-cols-2 gap-3 text-center text-xs">
          <div className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
            <p className="font-semibold">Humidity</p>
            <p className="text-lg">{humidity}<sup>o</sup></p>
          </div>
          <div className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
            <p className="font-semibold">Weather</p>
            <p className="text-lg"></p>
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
  )
}

export default WeatherDetails
