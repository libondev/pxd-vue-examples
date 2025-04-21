<script setup lang="ts">
import { ConfigProvider, Button, HoldButton } from 'pxd'
</script>

<template>
  <ConfigProvider class="p-2 flex flex-col gap-2 justify-center items-center h-full">
    <Button>Click me</Button>
    <HoldButton durations="1">Hold me</HoldButton>
  </ConfigProvider>
</template>
