import { WeatherDataType } from "./constants/data";
import { cold, cool, warm, hot } from "./assets/map";



//Obtain weather forecast for today and tomorrow from week-long data returned
export const getForecastData = (forecastData: WeatherDataType[] | null) => {

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const todayForecast = forecastData?.find((item) => {
        const itemDate = new Date(item.dt * 1000);
        return itemDate.getDay() === today.getDay();
    });

    const tomorrowForecast = forecastData?.find((item) => {
        const itemDate = new Date(item.dt * 1000);
        return itemDate.getDay() === tomorrow.getDay();
    });

    return [todayForecast, tomorrowForecast];
}


//select weather icon
export const weatherIconPicker = (dayTemp: number) => {
    let temperatureIcon: string;

    switch (true) {
        case dayTemp < 5:
            temperatureIcon = cold;
            break;
        case dayTemp >= 5 && dayTemp < 15:
            temperatureIcon = cool;
            break;
        case dayTemp >= 15 && dayTemp < 25:
            temperatureIcon = warm;
            break;
        default:
            temperatureIcon = hot;
            break;
    }

    return temperatureIcon;
}





