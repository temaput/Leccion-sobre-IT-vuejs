<template>
    <div class="book-details">
      <div>
        <div class="book-card">
            <Cover :book="book" large/>
        </div>
      </div>
      <div>
          <p class="author">{{ book.author }}</p>
          <p class="title">{{ book.title }}</p>
          <p class="address">Комната: {{ book.room }}</p>
          <p class="address">Полка: {{ book.shelf }}</p>
          <P class="address" textAlign="justify">{{ book.description }}</P>
      </div>
    </div>
</template>
<script setup>
  import data from "/src/assets/books.json"
  const books = data.library
  let book
  for (let b of books) {
    if (b.title === "Безымянный Том") {
      book = b
    }
  }
</script>
<style scoped>
  .book-details {
    margin: 0 auto;
    font-family: 'Press Start 2P', sans-serif;
    line-height: 1.6;
    font-size: 12px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 50px;
    max-width: 1000px;
  }
  .book-card {
    background: #EDE0D4;
    padding: 10px;
    border-radius: 18px;
  }
  .title {
    font-size: 13px;
  }
  .address {
    font-size: 10px;
  }
</style>
