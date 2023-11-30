<template>
  <h1 :style="props"><slot/></h1>
</template>

<script setup>
  const props = defineProps({
    textAlign: String,
    color: String, 
    textIndent: Number,
    textDecoration: String,
    marginBottom: Number,
  })
</script>