<template>
  <App v-if="path==='/'"/>
  <LayoutA v-else-if="path==='/books'">
    <Books />
  </LayoutA>
  
</template>
<script setup>
  import {computed} from "vue";
  import App from "./App.vue"
  import Books from "./pages/Books.vue"

  const path = computed(() => document.location.pathname)

  console.log("PAth is: ", path.value)
</script>