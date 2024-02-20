<script setup lang="ts">
import '@unocss/reset/tailwind-compat.css';
import WeatherWidget from '~/module/weather-widget/WeatherWidget.vue';
</script>

<template>
  <section class="h-full w-full bg-gray-700 py-5">
    <div class="container">
      <div class="flex">
        <WeatherWidget :show-days="1"/>
      </div>
    </div>
  </section>
</template>

<style>
  html, body, #__nuxt {
    display: block;
    height: 100%;
  }

  body {
    font-family: 'JetBrains Mono', sans-serif;
  }
</style>