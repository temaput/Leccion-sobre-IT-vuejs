<template>
  <div class="container">
    <div class="top-bar"><img src="/src/assets/top-bar.png" class="top-bar-image"/></div>
    <div class="content"><slot/></div>
  </div>
</template>

<style scoped>
  .container {
    min-width: 100vw;
    min-height: 100vh;
    background: #FBEFE3;
  }
  .top-bar {
    width: 100%;
    height: 65px;
  }
  .top-bar-image {
    width: 100%;
    height: auto;
  }
  .content {
    display: flex;
    padding-top: 65px;
  }
</style>