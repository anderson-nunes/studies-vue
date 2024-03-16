<template>
  <button @click="toggleCor">Troca Cor</button>

  <div :style="{ backgroundColor: cor }">
    Este é um div com cor de fundo dinâmica!
  </div>
</template>

<script>
export default {
  data() {
    return {
      cor: "green",
    };
  },
  methods: {
    toggleCor() {
      this.cor = this.cor === "green" ? "yellow" : "green";
    },
  },
};
</script>

<style></style>
