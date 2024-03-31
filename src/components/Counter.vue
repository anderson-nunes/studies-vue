<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    incrementar() {
      this.contador++;
    },
    decrementar() {
      this.contador--;
    },
  },
};
</script>
<template>
  <h1>Contador: {{ contador }}</h1>
  <button @click="incrementar">Incrementar</button>
  <button @click="decrementar">Decrementar</button>
</template>

<style></style>
