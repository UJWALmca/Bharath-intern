function getWeather() {
    const cityInput = document.getElementById('city');
    const cityName = cityInput.value;

    if (!cityName) {
        alert('Please enter a city name.');
        return;
    }

    const apiKey = '2d9d4f129fe49648d748c90d9df8bf3e'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfoContainer = document.getElementById('weather-info');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    const weatherInfoHTML = `
        <h2>Current Weather in ${data.name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <img src="${iconUrl}" alt="Weather Icon">
    `;

    weatherInfoContainer.innerHTML = weatherInfoHTML;
}

