<script setup>
import { onMounted, ref } from "vue";

let posts = ref([]);

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log("@response=>>", data);
      posts.value = data;
    });
});
</script>

<template>
  <h1>Requisições</h1>
  <table>
    <tr v-for="post in posts" :key="post.id">
      <td>{{ post.userId }}</td>
      <td>{{ post.id }}</td>
      <td>{{ post.title }}</td>
      <td>{{ post.body }}</td>
    </tr>
  </table>
</template>
