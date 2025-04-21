<script setup lang="ts">
import { ConfigProvider, Button, HoldButton } from 'pxd';

</script>

<template>
  <ConfigProvider>
    <Button>Click me</Button>
    <HoldButton durations="1">Hold me</HoldButton>
  </ConfigProvider>
</template>
