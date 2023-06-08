import { createContext, useState, useMemo, useEffect, useCallback } from "react";
import { CitiesDataType, WeatherDataType , CITIES} from "../constants/data";
import { getForecastData } from "../functions";
import axios from "axios";
import { toast } from "react-hot-toast";


const openWeatherAPIKey = import.meta.env.VITE_OPEN_WEATHER_APIKEY


export interface MetCastContextType {
    openMenu: boolean,
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>,
    selectedCity: CitiesDataType | null,
    setSelectedCity: React.Dispatch<React.SetStateAction<CitiesDataType | null>>
    popupInfo: CitiesDataType | null,
    setPopupInfo: React.Dispatch<React.SetStateAction<CitiesDataType | null>>
    weatherData:(WeatherDataType | undefined)[] | null, 
    setWeatherData: React.Dispatch<React.SetStateAction<(WeatherDataType | undefined)[] | null>>
    searchTerm:string, 
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
    searchResults: CitiesDataType[],
    setSearchResults:  React.Dispatch<React.SetStateAction<CitiesDataType[]>>
    handleSearch: (event: React.FormEvent<HTMLFormElement>) => void
}


export const MetCastContext = createContext<MetCastContextType | null>(null);



const MetCastProvider = ({ children }:{ children: React.ReactNode }) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [selectedCity, setSelectedCity] = useState<CitiesDataType | null>(null);
    const [popupInfo, setPopupInfo] = useState<CitiesDataType | null>(null);
    const [weatherData, setWeatherData] = useState<(WeatherDataType | undefined)[] | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<CitiesDataType[]>([]);




//obtain forecast for today and tomorrow from api
useEffect(() => {
  const fetchWeatherData = async () => {
    if (!selectedCity) {
      setWeatherData(null);
      return;
    }
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${selectedCity.latitude}&lon=${selectedCity.longitude}&exclude=hourly,minutely,current,alerts&appid=${openWeatherAPIKey}&cnt=2`);
    const data = response.data;
    setWeatherData(getForecastData(data.daily));
  };
  fetchWeatherData();
}, [selectedCity]);


//for city listing
useEffect(() => {
  const filteredCities = CITIES.filter((c) =>
    c.city.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  searchTerm ? setSearchResults(filteredCities) : setSearchResults([]);
}, [searchTerm]);




  // Update selectedCity state based on the search input
  const handleSearch = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchTerm) {
      // Display an error toast
      toast.error(<span className='text-blackish xl:text-base lg:text-sm text-xs'>Enter a city name!</span>, {duration: 4000})
      return;
    }
   
    //for city click/ city input
    const city = CITIES.find((c) => c.city.toLowerCase() === searchTerm.toLowerCase());
    if (city) {
      setSelectedCity(city);
      setPopupInfo(null);
    } else {
      // Display an error toast
      toast.error(<span className='text-blackish xl:text-base lg:text-sm text-xs'>City not found!</span>, {duration: 4000})
      setSearchTerm('');
    }

    //reset list
    setSearchResults([]);
  }, [searchTerm, setSelectedCity, setPopupInfo]);
  
  
  



    const values = useMemo(
        () => ({ 
            openMenu,
            setOpenMenu,
            selectedCity,
            setSelectedCity,
            searchTerm,
            setSearchTerm,
            popupInfo,
            setPopupInfo,
            weatherData,
            setWeatherData,
            searchResults,
            setSearchResults,
            handleSearch
           
        }),
        [
            openMenu,
            setOpenMenu,
            selectedCity,
            setSelectedCity,
            searchTerm,
            setSearchTerm,
            popupInfo,
            setPopupInfo,
            weatherData,
            setWeatherData,
            searchResults,
            setSearchResults,
            handleSearch
        ])

    return (
        <MetCastContext.Provider 
            value={values }
        >
            {children}
        </MetCastContext.Provider>
    )
}

export default MetCastProvider;