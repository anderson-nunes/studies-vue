<template>
  <div>
    <h1>Exemplos de Requisições GET</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios
      .get(url)
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        console.log("Error ao carregar os posts", error);
      });
  },
};
</script>

<style></style>
