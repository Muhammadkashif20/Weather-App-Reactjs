import React, { useEffect, useState } from "react";
import WeatherOverView from "./Components/WeatherOverView";
import WeatherDetails from "./WeatherDetails";
const Allcities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Quetta",
  "Peshawar",
  "Multan",
  "Rawalpindi",
];
function App() {
  const [choseCity, setChoseCity] = useState(Allcities[0]);
  const [weatherData, setWeatherData] = useState(null);
  //  1st Function:-
  const handleCityChange = (e) => {
    setChoseCity(e.target.value);
  };
  console.log("choseCity=>", choseCity);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${choseCity}&appid=9cd5806461ac968d83fa18eb58801936`
    )
      .then((res) => res.json())
      .then((res) => {
        res;
        console.log(res);
        setWeatherData(res);
      });
  }, [choseCity]);
const humidity=Math.round(weatherData?.main?.humidity)
const weather=weatherData?.weather[0]?.main
const temp=Math.round(weatherData?.main?.temp-273.15)
const feels_like=Math.round(weatherData?.main?.feels_like-273.15)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="w-full max-w-sm p-6 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
        {/* Select Your City */}
        <div className="text-center mb-6">
          <select
            className="bg-gray-700 p-2 rounded text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            onChange={handleCityChange}
            value={choseCity}
          >
            {Allcities.map((city, index) => {
              return (
                <option key={index} value={city}>
                  {city}
                </option>
              );
            })}
          </select>
        </div>
        <WeatherOverView feels_like={feels_like} weather={weather} temp={temp}/>
        <WeatherDetails humidity={humidity}/>
      </div>
    </div>
  );
}

export default App;
