<script setup>
import { ref } from "vue";

const emit = defineEmits(["submit"]);

const name = ref("");
const email = ref("");

function submitForm() {
  const data = { name: name.value, email: email.value };
  emit("submit", data);
  name.value = "";
  email.value = "";
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div>
      <label>Nome:</label>
      <input v-model="name" type="text" />
    </div>
    <div>
      <label>Email:</label>
      <input v-model="email" type="email" />
    </div>
    <button type="submit">Enviar</button>
  </form>
</template>

<style>
form {
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
}

input {
  border: 1px solid black;
  margin: 0.5rem;
}

form button {
  background: greenyellow;
  padding: 4px;
}
</style>
