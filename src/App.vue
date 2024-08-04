<script setup lang="ts">
import { Button } from './components/button'
import Loader from './components/loader/Loader.vue'
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold underline">Hello, Vue.js!</h1>
    <Button :icon="Loader"> Button </Button>
  </main>
</template>
