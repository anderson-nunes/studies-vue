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
<template>
  <button @click="toggleExibicao">Toggle Exibição</button>
  <p v-if="exibido">Este paragrafo está sendo exibido!</p>
</template>

<style></style>
