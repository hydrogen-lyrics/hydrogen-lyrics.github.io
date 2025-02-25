<script setup lang="ts">
// Fonts
import { css } from '@assets/LXGWNeoXiHeiPlus.ttf';
</script>

<template>
  <div :style="{ fontFamily: css.family }">
    <RouterView />
  </div>
</template>
