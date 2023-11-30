<template>
  <H1>Список книг</H1>

  <table>
      <tr>
          <th>Автор</th>
          <th>Название</th>
          <th>Год издания</th>
          <th>Комната</th>
          <th>Полка</th>
      </tr>
    
      <tr v-for="book in books">
          <td>{{ book.author }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.year }}</td>
          <td>{{ book.room }}</td>
          <td>{{ book.shelf }}</td>
      </tr>
  </table>

</template>

<script setup>
  import data from "/src/assets/books.json"
  const books = data.library
</script>