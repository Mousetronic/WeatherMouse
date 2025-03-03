require('dotenv').config();

const openWeatherApiKey = process.env.OPEN_WEATHER_API_KEY;
const githubPat = process.env.GITHUB_PAT;
const githubUsername = process.env.GITHUB_USERNAME;
const githubRepoName = process.env.GITHUB_REPO_NAME;

console.log(openWeatherApiKey, githubPat, githubUsername, githubRepoName);
