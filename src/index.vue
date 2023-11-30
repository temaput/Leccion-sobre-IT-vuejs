<template>
  <App v-if="path==='/'"/>
  <Books v-else-if="path==='/books'"/>
  
</template>
<script setup>
  import {computed} from "vue";
  import App from "./App.vue"
  import Books from "./pages/Books.vue"

  const path = computed(() => document.location.pathname)

  console.log("PAth is: ", path.value)
</script>