<template>
  <h1 :style="props"><slot/></h1>
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