<template>
  <button @click="mudarCor" :style="{ backgroundColor: cor }">
    Clique para mudar a cor
  </button>
</template>

<script>
export default {
  data() {
    return {
      cor: "blue",
    };
  },
  methods: {
    mudarCor() {
      this.cor = this.cor === "red" ? "blue" : "red";
    },
  },
};
</script>

<style></style>
