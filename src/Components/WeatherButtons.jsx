import React from 'react';

const WeatherButtons = () => {
  return (
    <div className="flex mt-6 space-x-4">
      <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
        Today
      </button>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
        Tomorrow
      </button>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
        5-Day Forecast
      </button>
    </div>
  );
};

export default WeatherButtons;
