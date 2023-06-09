# METCAST

## Overview
A React app that displays weather information for a list of cities on a map using Mapbox and a weather API.


This project was generated with Vite version 4.3.2.


## Screenshot
![Screenshot](https://github.com/Adedeji-Taiwo/Metcast/blob/main/src/assets/screenshots/Metcast.png)
  
  
## Link
- Live link: https://metcasting.netlify.app/location/lagos


**NOTE:** Zoom in to see weather card in full.


## Third Party Libraries used.

Below are the third party libraries used in this project:

| Feature  | Package | Benefits |
| ------------- | ------------- | ------------- |
| React  |  `react` | A JavaScript library for building user interfaces. |
| Typescript |  `typescript` | A superset of JavaScript that adds static type definitions. |
| React-Map-GL | `react-map-gl`  | A React wrapper for Mapbox GL JS, a JavaScript library that uses WebGL to render interactive maps. |
| OpenWeather API | `openweathermap`  | 	A weather API that provides current weather data, hourly forecasts, and 16-day forecasts for any location in the world. |
| TailwindCSS | `tailwindcss`  | A utility-first CSS framework for rapidly building custom designs |
| Axios | `axios`  |  Allows for communication with the APIs |
| React Hot Toast | ` react-hot-toast`  | A customizable toast notification library for React applications.|


## Features
- A sidebar with a list of random cities from all over the world.
- An input field for filtering cities by entered value with lists of matching cities.
- Clicking on a city name from the list selects the city on the map and displays a marker on the selected city.
- Clicking on the marker displays a Mapbox popup with weather information for today and tomorrow.
  

## Environment Variables
To run the project locally, you need to set up the following environment variables:

- Please replace `YOUR_MAPBOX_ACCESS_TOKEN` and `YOUR_OPEN_WEATHER_API_KEY` with your actual access tokens for Mapbox and OpenWeather API, respectively.

        - VITE_MAPBOX_ACCESS_TOKEN=your_actual_mapbox_access_token
        - VITE_OPEN_WEATHER_APIKEY=your_actual_open_weather_apikey 


## Setup
- Clone project `git clone https://github.com/Adedeji-Taiwo/Metcast.git`
- Install dependencies using `npm install`.
- Generate API_KEY for the weather API by signing up at [openweatherapi](https://openweathermap.org/).
- Sign up for a Mapbox account at [mapbox](https://mapbox.com/) and visit the Mapbox Studio to get the desired map style and generate a Mapbox Access Token.
- Create `.env` file to store config variables such as Openweather API Key, Mapbox Access Token, and any other necessary variables. Add `.env` file to gitignore before committing to keep keys and other information private.
- Start the development server by running npm run dev.


## Contributions
Contributions to this project are welcome. If you find a bug or would like to suggest new features, please create an issue on the project's GitHub repository.