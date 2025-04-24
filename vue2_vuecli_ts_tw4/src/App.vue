<template>
  <ConfigProvider size="sm" class="p-2 flex flex-col gap-2 items-center justify-center">
    <Button>Click me</Button>
    <HoldButton durations="1">Hold me</HoldButton>
    <MoreButton v-model="isExpanded">Hold me</MoreButton>
  </ConfigProvider>
</template>

<script lang="ts">
import Vue from 'vue'
import { Button, ConfigProvider, HoldButton, MoreButton } from 'pxd'

export default Vue.extend({
  name: 'App',
  components: {
    ConfigProvider,
    Button,
    HoldButton,
    MoreButton
  },
  data() {
    return {
      isExpanded: false
    }
  }
});
</script>
