const fetch = require('node-fetch');

async function run() {
    const apiKey = process.env.openWeatherApiKey;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    // Add your ETL logic here
}

module.exports = { run };
