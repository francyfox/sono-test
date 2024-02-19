import { ofetch } from 'ofetch';

export const appId = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
export const apiWeather = ofetch.create({
  baseURL: 'https://api.openweathermap.org/data/3.0/onecall'
});

export const apiGeo = ofetch.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0'
});