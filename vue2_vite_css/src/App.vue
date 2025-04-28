<script setup lang="ts">
import { ConfigProvider, Button, HoldButton, MoreButton } from 'pxd'
import { ref } from 'vue';

// Import style sheet
import 'pxd/styles.css'

const isExpanded = ref(false);

</script>

<template>
  <ConfigProvider class="config-provider">
    <Button>Click me</Button>
    <HoldButton durations="1">Hold me</HoldButton>
    <MoreButton v-model="isExpanded">Hold me</MoreButton>
  </ConfigProvider>
</template>

<style>
body {
  margin: 0;
}

.config-provider {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  max-width: 680px;
  margin: 0 auto;
}
</style>
