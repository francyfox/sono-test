<script setup lang="ts">
import type { IWeatherWidget } from '~/module/weather-widget/weather-widget.type';
import { apiGeo, appId } from '~/module/api';

const props = withDefaults(defineProps<IWeatherWidget>(), {
  showDays: 1,
})
</script>

<template>
  <div class=":uno: flex bg-gradient-to-r from-indigo-500/50 to-rose-600/50 text-white p-3 b-rd-3">

  </div>
</template>

<style scoped>

</style>