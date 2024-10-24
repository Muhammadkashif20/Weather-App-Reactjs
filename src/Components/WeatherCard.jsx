import React from 'react';

const WeatherCard = ({ day, temperature, condition }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center transition transform hover:scale-105">
      <h2 className="text-2xl font-bold">{day}</h2>
      <p className="text-4xl mt-4">{temperature}</p>
      <p className="text-lg mt-2">{condition}</p>
    </div>
  );
};

export default WeatherCard;
