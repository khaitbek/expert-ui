<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
export interface Props extends /* @vue-ignore */ HTMLAttributes {}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    v-bind="props"
  >
    <path d="M21 12a9 9 0 11-6.219-8.56"></path>
  </svg>
</template>
