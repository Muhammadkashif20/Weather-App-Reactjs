{/* Weather Overview Page*/}

import React from 'react'
import { WiDayCloudy } from 'react-icons/wi';
const WeatherOverView = () => {
  return (
    <div>
      <div className="text-center space-y-2 mb-4">
          <div className="flex justify-center text-5xl text-yellow-300">
            <WiDayCloudy />
          </div>
          <h2 className="text-4xl font-semibold">28°C</h2>
          <p className="text-md text-gray-300">Partly Cloudy</p>
          <p className="text-gray-400 text-sm">Feels like 30°C</p>
        </div>
    </div>
  )
}

export default WeatherOverView
