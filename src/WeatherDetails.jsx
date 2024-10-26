{/* Weather Details  Like Modern Feature's Page*/}
import React from 'react'

const WeatherDetails = ({humidity,day_Time,pressure,speed,sunrise,sunset}) => {
  return (
    <div>
       <div className="grid grid-cols-2 gap-3 text-center text-xs">
          <div className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
            <p className="font-semibold">Humidity</p>
            <p className="text-lg">{humidity}<sup>o</sup></p>
          </div>
          <div className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
            <p className="font-semibold">Weather</p>
            <p className="text-[15px] mt-1">{day_Time}</p>
          </div>
          <div className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
            <p className="font-semibold">Sunrise</p>
            <p className="text-lg">{sunrise}</p>
          </div>
          <div className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
            <p className="font-semibold">Sunset</p>
            <p className="text-lg">{sunset}</p>
          </div>
          <div className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
            <p className="font-semibold">Pressure</p>
            <p className="text-lg">{pressure} hPa</p>
          </div>
          <div className="bg-gray-700 p-3 rounded hover:bg-gray-600 transition">
            <p className="font-semibold">Wind Speed</p>
            <p className="text-lg">{speed} m/s</p>
          </div>
        </div>
    </div>
  )
}

export default WeatherDetails
