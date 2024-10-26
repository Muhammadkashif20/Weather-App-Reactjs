{/* Weather Overview Page*/}

import React from 'react'
const WeatherOverView = ({feels_like,weather,temp,urlIcon}) => {
  return (
    <div>
      <div className="text-center space-y-2 mb-4">
          <div className="flex justify-center text-5xl text-yellow-300">
            <img src={urlIcon} alt="" className='w-16 h-16'/>
          </div>
          <h2 className="text-4xl font-semibold">{temp}°C</h2>
          <p className="text-md text-gray-300">{weather}</p>
          <p className="text-gray-300 text-md">Feels like {feels_like}°C</p>
        </div>
    </div>
  )
}

export default WeatherOverView
