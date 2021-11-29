<script setup>
import { ref } from 'vue'

defineProps({})

const count = ref(0)
</script>

<template>
  <h3>{{Date()}}</h3>

  <p>
    Author: Herbert Wang
  </p>

  <p>
   Vue3 with vite , quasar
  </p>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
