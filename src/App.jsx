  import React, { useEffect, useState } from "react";
  import WeatherOverView from "./Components/WeatherOverView";
  import WeatherDetails from "./WeatherDetails";
  const Allcities = ['pakistan',"New York","Los Angeles","London","Paris","Tokyo","Dubai","Sydney","Toronto","Moscow","Mumbai","Hong Kong","Seoul","Rome","Istanbul","Barcelona", "Singapore",];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  function App() {
    const [choseCity, setChoseCity] = useState(Allcities[0]);
    const [weatherData, setWeatherData] = useState(null);
    const [loading,setLoading]=useState(false)
    //  1st Function:-
    const handleCityChange = (e) => {
      setChoseCity(e.target.value);
    };
    console.log("choseCity=>", choseCity);
    useEffect(() => {
      setLoading(true)
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${choseCity}&appid=9cd5806461ac968d83fa18eb58801936`
      )
        .then((res) => res.json())
        .then((res) => {
          res;
          console.log(res);
          setWeatherData(res);
          setLoading(false)
        });
    }, [choseCity]);
    // WeatherOverview:
    const temp=Math.round(weatherData?.main?.temp-273.15)
    const weather=weatherData?.weather[0]?.main
    const feels_like=Math.round(weatherData?.main?.feels_like-273.15)
    const iconCode=weatherData?.weather[0]?.icon
    const urlIcon=`https://openweathermap.org/img/wn/${iconCode}@2x.png`
  // WeatherDetails:
    const humidity=Math.round(weatherData?.main?.humidity)
    const currentDay=days[new Date().getDay()]
    const currentTime=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
    const day_Time=`${currentDay} ${currentTime}`
    const pressure=weatherData?.main?.pressure
    const speed=Math.round(weatherData?.wind?.speed)
    const sunrise = Math.round(weatherData?.sys?.sunrise);
    const sunset = Math.round(weatherData?.sys?.sunset);
    const sunriseTime=new Date(sunrise*1000).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
    const sunsetTime=new Date(sunset*1000).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
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
          {loading?(
            <div className="flex justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div> 
          </div>)
          :(
            <>
          <WeatherOverView feels_like={feels_like} weather={weather} temp={temp} urlIcon={urlIcon}/>
          <WeatherDetails humidity={humidity} day_Time={day_Time} pressure={pressure} speed={speed} sunrise={sunriseTime} sunset={sunsetTime}/>
          </>
        )}
          </div>
          </div>
    );
  }

  export default App;
