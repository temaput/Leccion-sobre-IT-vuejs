<template>
  <div class="books">
    <div class="book-card" v-for="book in books" :key="book.id">
        
          <Cover :book="book"/>
          <p class="author">{{ book.author }}</p>
          <p class="title">{{ book.title }}</p>
          <p class="address">Комната: {{ book.room }}</p>
          <p class="address">Полка: {{ book.shelf }}</p>
    </div>
  </div>
</template>
<style scoped>
  .books {
    margin: 0 auto;
    font-family: 'Press Start 2P', sans-serif;
    line-height: 1.6;
    font-size: 12px;
    display: grid;
    grid-template-columns: repeat(5, 220px);
    gap: 50px;
  }
  .book-card {
    background: #EDE0D4;
    padding: 10px;
    border-radius: 18px;
  }
  .author {
    margin-top: 14px;
  }
  .title {
    font-size: 13px;
  }
  .address {
    font-size: 10px;
  }
</style>
<script setup>
  import data from "/src/assets/books.json"
  const books = data.library
</script>
