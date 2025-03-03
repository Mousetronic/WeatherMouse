document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '49f126a2797e53ce7d309834b8901896'; 
    const city = 'Austin'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            const weatherInfo = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            weatherDiv.innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather').textContent = 'Failed to load weather data.';
        });
});