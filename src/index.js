import "./styles.css";
import getWeatherCode from "./js/weather-codes";
import APIService from "./js/api-service";
import Chart from "chart.js/auto";
import bindElements from "./js/event-binder";

class App {
    constructor() {
        this.apiService = new APIService();

        this.setData();
        bindElements();
        //this.createGraph();
    }

    async setData() {
        const responseJSON = await this.apiService.fetchData();

        const mainTemperature = document.querySelector("#temperature-number");
        mainTemperature.textContent = this.apiService.getCurrentTemperature(responseJSON);
        const mainWeatherCode = document.querySelector("#weather");
        mainWeatherCode.textContent = getWeatherCode(responseJSON.daily.weather_code[0]).full;

        // Setting each of the day-view tokens
        for (let i = 1; i <= 6; i++) {
            const dayView = document.querySelector("#week-overview").children[i - 1];

            const dateDiv = dayView.querySelector(".day-view-day");
            dateDiv.textContent = this.apiService.getDayOfWeek(responseJSON, i);

            const temperatureDiv = dayView.querySelector(".day-view-temperature");
            const temperatureArray = this.apiService.parseJSON(responseJSON);
            temperatureDiv.textContent = this.apiService.getHighestTemperature(temperatureArray, i);

            const weatherCodeDiv = dayView.querySelector(".day-view-weather-code");
            weatherCodeDiv.textContent = this.apiService.getWeatherCode(responseJSON, i).short;
        }
    }

    // createGraph() {
    //     const graph = document.querySelector("#graph")

    //     const lables =
    //     const data =

    //     const chart = new Chart(graph, {
    //         type: "line",
    //         data: data
    //     })
    // }
}

new App();
