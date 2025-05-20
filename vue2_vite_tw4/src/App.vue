<script setup>
import { ref } from 'vue';

const value = ref(0)
const isExpanded = ref(false);
</script>

<template>
  <PConfigProvider size="md" class="p-2 flex flex-col gap-2 items-center justify-center w-64 mx-auto">
    <PButton block>Click me</PButton>
    <PHoldButton block durations="1">Hold me</PHoldButton>
    <PMoreButton v-model="isExpanded" less-text="lesssss" more-text="moreeeee"></PMoreButton>
    <PInput v-model="value" />
    <PSlider class="w-full" v-model="value" />
    <PProgress v-model="value" />
    <PTooltip content="This is a tooltip">
      <PButton>Hover me</PButton>
    </PTooltip>
  </PConfigProvider>
</template>
