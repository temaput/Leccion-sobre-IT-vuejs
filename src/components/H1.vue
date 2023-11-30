<template>
  <h2 :style="props"><slot/></h2>
</template>

<script setup>
  const props = defineProps({
    textAlign: String,
    color: String, 
    textIndent: String,
    textDecoration: String,
    marginBottom: String,
  })
</script>