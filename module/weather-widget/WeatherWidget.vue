<script setup lang="ts">
import type { IForecastResponse } from '~/module/weather-widget/weather-widget.type';
import GeoSearch from '~/module/weather-widget/geo-search/GeoSearch.vue';
import type { IGeoLocation } from '~/module/weather-widget/geo-search/geo-search.type';
import { useForecastStore } from '~/stores/forecast';
import WeatherDay from '~/module/weather-widget/weather-day/WeatherDay.vue';
import ErrorNotification from '~/module/weather-widget/error-notification/ErrorNotification.vue';
import { errorHandler } from '~/module/api';

const store = useForecastStore();
const {fetchForecast} = store;
const {forecast} = storeToRefs(store);

const hasError = ref(false);
const errorMessage = ref('');

const getForecast = async (location: IGeoLocation) => {
  const {lat, lon} = location;

  try {
    const response = await fetchForecast(lat, lon) as IForecastResponse;

    const firstDay = response.list[0];
    const secondDay = response.list[5];
    const thirdDay = response.list[15];

    forecast.value = [firstDay, secondDay, thirdDay];
  } catch (error) {
    errorHandler(error, 'прогнозе погоды');
  }
};

onErrorCaptured((error) => {
  errorMessage.value = error.message;
  hasError.value = true;
});
</script>

<template>
  <div
      class=":uno: flex flex-col bg-gradient-to-r from-indigo-500/50 to-rose-600/50 shadow-sm text-white p-3 b-rd-3 gap-3">
    <ErrorNotification v-if="hasError" :message="errorMessage"/>

    <geo-search @on-location-select="getForecast"/>

    <div class="grid gap-3">
      <div v-for="(day, index) in forecast"
           :key="index"
           :class="index === 0 ? 'col-span-12' : 'col-span-6'">
        <weather-day :data="day" :type="index === 0 ? 'lg' : 'sm'"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>