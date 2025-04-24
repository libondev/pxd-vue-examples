<script setup lang="ts">
import { ConfigProvider, Button, HoldButton, MoreButton } from 'pxd';
import { ref } from 'vue';

const isExpanded = ref(false);

</script>

<template>
  <ConfigProvider class="p-2 flex flex-col gap-2 justify-center items-center h-full">
    <Button>Click me</Button>
    <HoldButton durations="1">Hold me</HoldButton>
    <MoreButton v-model="isExpanded">Hold me</MoreButton>
  </ConfigProvider>
</template>
