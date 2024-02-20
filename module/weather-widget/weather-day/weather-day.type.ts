import type { IDayForecast } from '~/module/weather-widget/weather-widget.type';

export interface IWeatherDayProps {
  type: 'lg' | 'sm';
  data: IDayForecast;
}