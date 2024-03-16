<template>
  <button @click="toggleExibicao">Toggle Exibição</button>
  <p v-if="exibido">Este paragrafo está sendo exibido!</p>
</template>

<script>
export default {
  data() {
    return {
      exibido: true,
    };
  },
  methods: {
    toggleExibicao() {
      this.exibido = !this.exibido;
    },
  },
};
</script>

<style></style>
