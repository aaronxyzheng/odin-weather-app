import { format, parseISO } from "date-fns";
import getWeatherCode from "./weather-codes";

class APIService {
    constructor() {
        console.log();
    }

    async fetchData(url) {
        const latitude = 41.144;
        const longitude = -73.8413;

        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,wind_speed_10m_max,precipitation_probability_max,apparent_temperature_max&hourly=temperature_2m&current=temperature_2m&timezone=auto`
        );
        const responseJSON = await response.json();
        console.log(responseJSON);
        return responseJSON;
    }

    parseJSON(responseJSON) {
        const data = responseJSON;
        const days = [];
        for (let i = 0; i < data.hourly.time.length; i += 24) {
            days.push({
                time: data.hourly.time.slice(i, i + 24),
                temperature: data.hourly.temperature_2m.slice(i, i + 24),
            });
        }

        return days;
    }

    getCurrentTemperature(data) {
        return Math.round(data.current.temperature_2m);
    }

    getHighestTemperature(data, day) {
        const temperatureArray = data[day].temperature;
        let highest = temperatureArray[0];
        for (let i = 0; i < temperatureArray.length; i++) {
            if (temperatureArray[i] > highest) {
                highest = temperatureArray[i];
            }
        }

        return Math.round(highest);
    }

    getDayOfWeek(data, day) {
        let date = data.daily.time[0];
        date = parseISO(date);
        date = format(date, "EEE");

        return date;
    }

    getWeatherCode(data, day) {
        const weatherCode = data.daily.weather_code[day];
        return getWeatherCode(weatherCode);
    }

    getWindSpeed(data, day) {
        return data.daily.wind_speed_10m_max[day];
    }

    getRainPercentage(data, day) {
        return data.daily.precipitation_probability_max[day];
    }
}

export default APIService;
