<template>
  <div class="cover">
    <img :src="src" class="cover-img"/>
  </div>
</template>
<script setup>
  const props = defineProps({
    book: Object
  })
  const src = computed(() =>`/src/assets/covers/${props.book.room}${props.book.shelf}.png`)
</script>