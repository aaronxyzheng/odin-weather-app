import APIService from "../api-service";
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
}

export default updateSidebar;
