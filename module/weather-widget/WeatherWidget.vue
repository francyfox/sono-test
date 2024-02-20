<script setup lang="ts">
import type { IForecastResponse, IWeatherWidget } from '~/module/weather-widget/weather-widget.type';
import GeoSearch from '~/module/weather-widget/geo-search/GeoSearch.vue';
import type { IGeoLocation } from '~/module/weather-widget/geo-search/geo-search.type';
import { useForecastStore } from '~/stores/forecast';
import WeatherDay from '~/module/weather-widget/weather-day/WeatherDay.vue';

const props = withDefaults(defineProps<IWeatherWidget>(), {
  showDays: 1
});

const store = useForecastStore();
const { fetchForecast } = store;
const { forecast } = storeToRefs(store);

const getForecast = async (location: IGeoLocation) => {
  const { lat, lon } = location;
  const response = await fetchForecast(lat, lon) as IForecastResponse;

  const firstDay = response.list[0];
  const secondDay = response.list[5];
  const thirdDay = response.list[15];

  forecast.value = [ firstDay, secondDay, thirdDay ];
};
</script>

<template>
  <div class=":uno: flex flex-col bg-gradient-to-r from-indigo-500/50 to-rose-600/50 text-white p-3 b-rd-3 gap-3">
    <geo-search @on-location-select="getForecast"/>

    <div class="grid gap-3">
      <div v-for="(day, index) in forecast"
           :key="index"
           :class="index === 0 ? 'col-span-12' : 'col-span-6'">
        <weather-day :data="day" :type="index === 0 ? 'lg' : 'sm'" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>