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
<template>
  <div class="card" @click="mudarCor" :style="{ backgroundColor: cor }">
    Clique para mudar a cor
  </div>
</template>

<style>
.card {
  width: 250px;
  height: 250px;
}
</style>
