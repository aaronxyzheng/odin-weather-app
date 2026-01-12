function getWeatherCode(number) {
    const weatherCodes = {
        0: { full: "Clear sky", short: "Clear" },
        1: { full: "Mainly clear", short: "Clear" },
        2: { full: "Partly cloudy", short: "Cloudy" },
        3: { full: "Overcast", short: "Overcast" },
        45: { full: "Fog", short: "Fog" },
        48: { full: "Depositing rime fog", short: "Fog" },
        51: { full: "Light drizzle", short: "Drizzle" },
        53: { full: "Moderate drizzle", short: "Drizzle" },
        55: { full: "Dense drizzle", short: "Drizzle" },
        56: { full: "Light freezing drizzle", short: "Freezing" },
        57: { full: "Dense freezing drizzle", short: "Freezing" },
        61: { full: "Slight rain", short: "Rain" },
        63: { full: "Moderate rain", short: "Rain" },
        65: { full: "Heavy rain", short: "Rain" },
        66: { full: "Light freezing rain", short: "Freezing" },
        67: { full: "Heavy freezing rain", short: "Freezing" },
        71: { full: "Slight snow", short: "Snow" },
        73: { full: "Moderate snow", short: "Snow" },
        75: { full: "Heavy snow", short: "Snow" },
        77: { full: "Snow grains", short: "Snow" },
        80: { full: "Slight rain showers", short: "Showers" },
        81: { full: "Moderate rain showers", short: "Showers" },
        82: { full: "Violent rain showers", short: "Showers" },
        85: { full: "Slight snow showers", short: "Snow" },
        86: { full: "Heavy snow showers", short: "Snow" },
        95: { full: "Thunderstorm", short: "Storm" },
        96: { full: "Thunderstorm with slight hail", short: "Storm" },
        99: { full: "Thunderstorm with heavy hail", short: "Storm" },
    };

    return weatherCodes[number];
}


export default getWeatherCode;