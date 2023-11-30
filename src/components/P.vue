<template>
  <p :style="props"><slot/></p>
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