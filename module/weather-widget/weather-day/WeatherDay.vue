<script setup lang="ts">
import type { IWeatherDayProps } from '~/module/weather-widget/weather-day/weather-day.type';

const props = defineProps<IWeatherDayProps>();
const urlWeatherIcon = (icon: string, size: number) => `https://openweathermap.org/img/wn/${ icon }@${ size.toString() }x.png`;
const iconMain = props.data.weather[0];
</script>

<template>
  <div class=":uno: flex flex-col bg-gray-800/80 rounded-md gap-2 p-3">
    <picture class="flex justify-center items-center">
      <img :src="urlWeatherIcon(iconMain.icon, type === 'lg' ? 4 : 2)" :alt="iconMain.description">
    </picture>

    <div :class="type === 'lg' ? 'text-3xl font-black' : 'text-md font-bold'" class="text-center">
      {{ data.main.temp }} °C
    </div>

    <ul class="text-sm">
      <li>
        <span class="font-bold">
          Но по ощущениям:
        </span>
        <span>
          {{ data.main.feels_like }} °C
        </span>
      </li>
      <li>
        <span class="font-bold">
          Ветер:
        </span>
        <span>
          {{ data.wind.speed }} км/ч
        </span>
      </li>
      <li>
        <span class="font-bold">
          Влажность:
        </span>
        <span>
          {{ data.main.humidity }} %
        </span>
      </li>
      <li>
        <span>
          {{ iconMain.description }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>