<template>
  <div class="cover">
    <img :src="src" class="cover-img"/>
  </div>
</template>
<script setup>
  import {computed} from "vue"
  const props = defineProps({
    book: Object,
    large: Boolean
  })
  const src = computed(() =>`/src/assets/covers/${props.book.room}${props.book.shelf}.png`)
  const size = computed(() => props.large ? "400px": "200px")
</script>

<style scoped>
  .cover {
    width: v-bind(size);
    height: v-bind(size);
    border-radius: 10px;
    overflow: hidden;
    
  }
  .cover-img {
    width: 100%;
    height: auto;
  }
</style>