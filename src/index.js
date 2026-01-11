import "./styles.css";
import getWeatherCode from "./src/weather-codes";
import { parse, format } from "date-fns";

async function fetchData() {
    const latitude = 41.144;
    const longitude = -73.8413;

    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,weather_code`
    );
    const responseJSON = await response.json();
    console.log(responseJSON);
    return responseJSON;
}

async function setData() {
    const responseJSON = await fetchData();

    //Set Main Info's
    const mainTemperature = document.querySelector("#temperature-number");
    mainTemperature.textContent = Math.round(
        responseJSON.daily.temperature_2m_max[0]
    );
    const mainWeatherCode = document.querySelector("#weather");
    mainWeatherCode.textContent = getWeatherCode(
        responseJSON.daily.weather_code[0]
    ).full;

    for (let i = 1; i <= 6; i++) {
        const dayView =
            document.querySelector("#week-overview").children[i - 1];

        const date = responseJSON.daily.time[i];
        const dateObject = parse(date, "yyyy-MM-dd", new Date());
        const dateDiv = dayView.querySelector(".day-view-day");
        dateDiv.textContent = format(dateObject, "EEE");

        const temperatureDiv = dayView.querySelector(".day-view-temperature");
        const temperature = responseJSON.daily.temperature_2m_max[i];
        temperatureDiv.textContent = Math.round(temperature);

        const weatherCodeDiv = dayView.querySelector(".day-view-weather-code");
        const weatherCode = getWeatherCode(responseJSON.daily.weather_code[i]).short;
        weatherCodeDiv.textContent = weatherCode;
    }
}

fetchData();
setData();
