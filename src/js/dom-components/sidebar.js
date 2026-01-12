import APIService from "../api-service";
import createBarChart from "./graph";
const apiService = new APIService();

async function updateSidebar(day) {
    const rawData = await apiService.fetchData();
    const parsedData = apiService.parseJSON(rawData);

    const temperature = document.querySelector("#daily-view-temperature");
    temperature.textContent = apiService.getHighestTemperature(parsedData, day);

    const windSpeed = document.querySelector("#wind-speed div");
    windSpeed.textContent = apiService.getWindSpeed(rawData, day) + " mph";

    const rainPercentage = document.querySelector("#rain-percentage div");
    rainPercentage.textContent = apiService.getRainPercentage(rawData, day) + "% rain";

    const weatherCode = document.querySelector("#content-box-weather-code");
    weatherCode.textContent = apiService.getWeatherCode(rawData, day).short;

    let timeLabels = parsedData[day].time;
    timeLabels = timeLabels.map((timestamp) => {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    });
    createBarChart(timeLabels, parsedData[day].temperature);
}

function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
    if (hour < 4) {
        greeting = "Go to sleep bro";
    } else if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Night";
    }
    document.querySelector("#greeting").textContent = greeting;
}

function updateTime() {
    const time = document.querySelector("#time");
    time.textContent = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export { updateSidebar, updateTime, updateGreeting };
