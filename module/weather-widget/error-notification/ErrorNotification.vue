<script setup lang="ts">
defineProps<{
  message: string
}>();
</script>

<template>
  <div class="max-w-[332px] flex flex-col bg-rose/50 text-md p-3 rounded-md shadow-md">
    <div class="flex items-center gap-2">
      <Icon name="material-symbols:error" size="32" class="text-white/90"/>
      <div class="flex flex-col gap-2">
        <span class="font-bold">
          Ошибка!
        </span>
      </div>
    </div>
    <span class="text-sm">
      {{ message }}
    </span>
  </div>
</template>

<style scoped>

</style>