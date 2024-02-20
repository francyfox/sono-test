import type { Ref } from 'vue';
import { apiGeo, apiWeather, appId } from '~/module/api';
import type { IDayForecast } from '~/module/weather-widget/weather-widget.type';

export const useForecastStore = defineStore('forecast', () => {
  const forecast: Ref<IDayForecast[]> = ref([]);
  const fetchGeoLocation = (q: string, limit: number) => apiGeo('/direct', {
    params: {
      q,
      limit,
      appId
    }
  });

  // вообще наверное мы должны брать средние показатели, тогда должно быть cnt 24
  // но апи тупое, поэтому лучше выбирать другое
  const fetchForecast = (lat: number, lon: number) => apiWeather('/forecast', {
    params: {
      lat,
      lon,
      appid: appId,
      units: 'metric',
      cnt: 16,
      lang: 'ru'
    }
  });

  return {
    forecast,
    fetchGeoLocation,
    fetchForecast
  };
});