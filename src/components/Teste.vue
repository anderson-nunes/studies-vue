<script setup lang="ts">
import { ref } from "vue";
import Picture from "./Picture.vue";
import NewLista from "./NewLista.vue";

const name: string = "Anderson";
const profissao: boolean = true;
const mostrar_email = ref(false);
const email = "anderson@email.com";
const web = "https://google.com";

let textoBotao = "Mostrar e-mail";

const showEmail = () => {
  mostrar_email.value = !mostrar_email.value;
  if (!mostrar_email.value) {
    textoBotao = "Mostrar e-mail";
  } else {
    textoBotao = "Esconder e-mail";
  }
};
</script>

<template>
  <div>
    <p>Meu nome é {{ name }}</p>
    <p v-if="profissao">A minha profissão é Desenvolvedor front end</p>
    <p v-else>A minha profissão é Desenvolvedor back end</p>
    <p v-if="4 > 2">Testando</p>
    <p>Acesso ao site <a v-bind:href="web">Clicar</a></p>
    <Picture />
  </div>
  <div>
    <p v-show="mostrar_email">mande uma mensagem para: {{ email }}</p>
    <button @click="showEmail">{{ textoBotao }}</button>
  </div>
  <NewLista />
</template>
