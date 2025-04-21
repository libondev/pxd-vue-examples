<template>
  <ConfigProvider size="sm" class="p-2 flex flex-col gap-2 items-center justify-center">
    <Button>Click me</Button>
    <HoldButton durations="1">Hold me</HoldButton>
  </ConfigProvider>
</template>

<script lang="ts">
import Vue from 'vue'
import { Button, ConfigProvider } from 'pxd'

export default Vue.extend({
  name: 'App',
  components: {
    ConfigProvider,
    Button
  }
});
</script>
