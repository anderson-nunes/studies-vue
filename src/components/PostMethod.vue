<template>
  <div class="postForm">
    <h1>Exemplo de requisição POST</h1>
    <form @submit.prevent="criarPost">
      <input type="text" v-model="title" placeholder="Título" />
      <input type="text" v-model="body" placeholder="Conteúdo" />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },

  methods: {
    criarPost() {
      axios
        .post(url, {
          title: this.title,
          body: this.body,
          userId: 1,
        })
        .then((response) => {
          console.log("Post criado:", response.data);
          (this.title = ""), (this.body = "");
        })
        .catch((error) => {
          console.error("Erro ao criar o post:", error);
        });
    },
  },
};
</script>

<style>
.postForm {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  padding: 2rem;
  gap: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>
