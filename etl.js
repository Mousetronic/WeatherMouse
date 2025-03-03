const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

// Function to extract data from a weather API
async function extract() {
    const response = await fetch('https://api.example.com/weather');
    const data = await response.json();
    return data;
}

// Function to transform the extracted data
function transform(data) {
    // Example transformation: extract only relevant fields
    return {
        temperature: data.current.temperature,
        humidity: data.current.humidity,
        description: data.current.weather_descriptions[0]
    };
}

// Function to load the transformed data into a JSON file
function load(data) {
    const outputPath = path.join(__dirname, 'output.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log('Data successfully written to', outputPath);
}

// Main ETL function
async function main() {
    try {
        const extractedData = await extract();
        const transformedData = transform(extractedData);
        load(transformedData);
    } catch (error) {
        console.error('Error during ETL process:', error);
    }
}

// Run the ETL process
main();
