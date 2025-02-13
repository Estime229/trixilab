<script setup>
import { RouterView } from 'vue-router'
import background from '@/assets/images/background.webp'
</script>

<template>
  <div class="app" :style="{ backgroundImage: `url(${background})` }">
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  margin: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
