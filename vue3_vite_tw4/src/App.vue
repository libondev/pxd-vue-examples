<script setup lang="ts">
import { ConfigProvider, Button, HoldButton, MoreButton } from 'pxd'
import { ref } from 'vue';

const value = ref(10)
const isExpanded = ref(false);
</script>

<template>
  <ConfigProvider class="p-2 flex flex-col gap-2 justify-center max-w-lg mx-auto items-center h-full">
    <Button>Click me</Button>
    <HoldButton durations="1">Hold me</HoldButton>
    <MoreButton v-model="isExpanded">Hold me</MoreButton>
    <PInput v-model="value" />
    <PSlider class="w-full" v-model="value" />
    <PProgress v-model="value" />
    <PTooltip content="This is a tooltip">
      <PButton>Hover me</PButton>
    </PTooltip>
  </ConfigProvider>
</template>
