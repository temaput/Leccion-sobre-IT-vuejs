<template>
  <App v-if="path==='/'"/>
  <LayoutA v-else-if="path==='/books'">
    <Books />
  </LayoutA>
  <LayoutA v-else-if="path==='/books/7'">
    <BookDetails />
  </LayoutA>
  <LayoutA v-else-if="path==='/books/nameless-volume'">
    <BookDetails />
  </LayoutA>
   
</template>
<script setup>
  import {computed} from "vue";
  import App from "./App.vue"
  import Books from "./pages/Books.vue"
  import BookDetails from "./pages/BookDetails.vue"

  const path = computed(() => document.location.pathname)

</script>