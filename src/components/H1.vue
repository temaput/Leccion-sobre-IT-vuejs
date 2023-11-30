<template>
  <h1 :style="props"><slot/></h1>
</template>

<script setup>
  const props = defineProps({
    textAlign: String
  })
</script>