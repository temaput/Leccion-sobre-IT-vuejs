<template>
  <p :style="props"><slot/></p>
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