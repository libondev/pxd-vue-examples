<script setup lang="ts">
import { ConfigProvider, Button, HoldButton, MoreButton } from 'pxd';
import { ref } from 'vue';

const isExpanded = ref(false);

</script>

<template>
  <ConfigProvider>
    <Button>Click me</Button>
    <HoldButton durations="1">Hold me</HoldButton>
    <MoreButton v-model="isExpanded">Hold me</MoreButton>
  </ConfigProvider>
</template>
