import { ofetch } from 'ofetch';

export const appId = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
export const apiWeather = ofetch.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  parseResponse: JSON.parse,
  timeout: 1000,
  retry: 3
});

export const apiGeo = ofetch.create({
  baseURL: 'https://api.openweathermap.org/geo/1.0',
  parseResponse: JSON.parse,
  timeout: 1000,
  retry: 3
});