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

export const errorHandler = (error: Error | any, component: string) => {
  if (error.statusCode === 401) {
    throw new Error('Не удалось авторизоваться. Неверный API ключ.' +
      ' Обратитесь по почте 7info7web@gmail.com для поддержки.');
  } else if (error.statusCode >= 500) {
    throw new Error(
      `${ error.statusText }\nОшибка при обращении к сервису OpenWeatherMap.
      Пожалуйста попробуйте повторить попытку позже.`
    );
  } else {
    throw new Error(`${ error.statusText }\nНе удалось получить информацию о ${ component }.
    Обратитесь по почте 7info7web@gmail.com для поддержки.`);
  }
};