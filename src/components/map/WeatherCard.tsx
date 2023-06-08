import { useContext, useState } from "react";
import { MetCastContext, MetCastContextType } from "../../context/metcast.context";
import { weatherIconPicker } from "../../functions";
import { wind, humidityImg } from "../../assets/map";
import { WeatherDataType } from "../../constants/data";


const WeatherCard = () => {
  const { weatherData } = useContext(MetCastContext) as MetCastContextType;
  const [selectedTab, setSelectedTab] = useState<string>("today");

  const todayData = weatherData?.[0];
  const tomorrowData = weatherData?.[1];


  const renderWeatherData = (data: WeatherDataType) => {
    const { temp, weather, humidity, wind_speed } = data;


    return (
      <div className="font-mulish bg-white rounded-md mb-2">
        <div className="text-3xl text-gray-700 font-bold mb-4 flex items-center">
          <img src={weatherIconPicker(Math.round(temp.day - 273.15))} alt="weather icon" className="w-full h-auto xl:max-w-[80px] lg:max-w-[60px] max-w-[50px]" />
          <span className="ml-2">{Math.round(temp.day - 273.15)}°C</span>
        </div>
        <div className="flex flex-col items-start justify-start md:gap-2 gap-1">
          <p className="xl:text-xl lg:text-lg text-base font-medium text-blackish capitalize">{weather[0].description}</p>
          <p className="flex items-center gap-2">
            <img src={wind} alt="wind icon" className="w-full h-auto xl:max-w-[20px] lg:max-w-[20px] max-w-[15px]" />
            <span><span className="font-semibold">Wind: </span>{wind_speed} km/h</span>
          </p>
          <p className="flex items-center gap-2">
            <img src={humidityImg} alt="humidity icon" className="w-full h-auto xl:max-w-[20px] lg:max-w-[20px] max-w-[15px]" />
            <span><span className="font-semibold">Humidity: </span>{humidity}</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-start justify-start gap-3">
      <div className="flex justify-center my-4 gap-2">
        <button
          className={`px-4 py-1 rounded-md ${selectedTab === "today"
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-600"
            }`}
          onClick={() => setSelectedTab("today")}
        >
          Today
        </button>
        <button
          className={`mx-2 px-4 py-1 rounded-md ${selectedTab === "tomorrow"
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-600"
            }`}
          onClick={() => setSelectedTab("tomorrow")}
        >
          Tomorrow
        </button>
      </div>
      {selectedTab === "today" && renderWeatherData(todayData!)}
      {selectedTab === "tomorrow" && renderWeatherData(tomorrowData!)}
    </div>
  );
};

export default WeatherCard;
