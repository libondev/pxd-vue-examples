<script setup>
import { ref } from 'vue';

const isExpanded = ref(false);
</script>

<template>
  <PConfigProvider size="md" class="p-2 flex flex-col gap-2 items-center justify-center w-64 mx-auto">
    <PButton block>Click me</PButton>
    <PHoldButton block durations="1">Hold me</PHoldButton>
    <PMoreButton v-model="isExpanded" less-text="lesssss" more-text="moreeeee"></PMoreButton>
  </PConfigProvider>
</template>
