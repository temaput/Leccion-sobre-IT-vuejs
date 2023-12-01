<template>
  <div class="cover">
    <img :src="src" class="cover-img"/>
  </div>
</template>
<script setup>
  import {computed} from "vue"
  const props = defineProps({
    book: Object
  })
  const src = computed(() =>`/src/assets/covers/${props.book.room}${props.book.shelf}.png`)
</script>

<style scoped>
  .cover {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    
  }
  .cover-img {
    width: 100%;
    height: auto;
  }
</style>