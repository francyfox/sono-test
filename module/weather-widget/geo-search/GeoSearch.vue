<script setup lang="ts">
import type { Ref } from 'vue';
import type { IGeoLocation } from '~/module/weather-widget/geo-search/geo-search.type';
import { useForecastStore } from '~/stores/forecast';

const store = useForecastStore();
const { fetchGeoLocation } = store;

const emit = defineEmits(['onLocationSelect']);

const inputValue: Ref<string> = ref('');
const autoComplete: Ref<IGeoLocation[]> = ref([]);
const showAutoComplete: Ref<boolean> = ref(false);
const onSubmit = async (e: Event) => {
  e.preventDefault();
  autoComplete.value = await fetchGeoLocation(inputValue.value, 5);
  showAutoComplete.value = autoComplete.value.length > 0;
};
const selectAutoCompleteItem = (item: IGeoLocation) => {
  autoComplete.value = [item];
  showAutoComplete.value = false;
  inputValue.value = `${item.local_names?.ru || item.name}, ${item.country}`;

  emit('onLocationSelect', item);
};
</script>

<template>
  <form @submit="onSubmit"
        action="#"
        class="flex gap-2"
  >
    <div class="relative flex flex-col">
      <input v-model="inputValue"
             type="search"
             placeholder="Название города"
             minlength="3"
             required
             class=":uno: bg-gray-800/30 border-0 outline-none focus:bg-gray-800/50 rounded-md transition-colors px-4 py-2"
      >

      <ul v-if="showAutoComplete"
          @focusout="showAutoComplete = false"
          class=":uno: w-[200px] h-[200px] overscroll-auto absolute top-[105%] flex flex-col bg-gray-800/90 shadow-sm rounded-md transition-colors overflow-hidden"
      >
        <li v-for="(item, index) in autoComplete" :key="index">
          <a @click.prevent="selectAutoCompleteItem(item)"
             href="#"
             class="block px-4 py-2 hover:bg-gray-400/50"
          >
            {{ item.local_names?.ru || item.name }}, {{ item.country }}
          </a>
        </li>
      </ul>
    </div>

    <button type="submit"
            class=":uno: flex items-center bg-indigo-300/30 border-0 outline-none hover:bg-indigo-200/50 rounded-md transition-colors gap-2 px-2"
    >
      <Icon name="material-symbols:search"/>
      Найти
    </button>
  </form>
</template>

<style scoped>

</style>