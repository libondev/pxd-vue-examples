<template>
  <ConfigProvider size="sm" class="p-4">
    <Button>按钮</Button>
  </ConfigProvider>
</template>

<script lang="ts">
import { Button, ConfigProvider } from 'pxd'
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  components: {
    ConfigProvider,
    Button
  }
});
</script>
