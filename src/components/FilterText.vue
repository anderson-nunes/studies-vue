<script>
export default {
  data() {
    return {
      lista: ["Maçã", "Banana", "Abacaxi", "Morango"],
      filtro: "",
    };
  },
  computed: {
    listaFiltrada() {
      return this.lista.filter((item) =>
        item.toLowerCase().includes(this.filtro.toLowerCase())
      );
    },
  },
};
</script>
<template>
  <div>
    <input v-model="filtro" placeholder="Digite para filtrar" />
    <ul>
      <li v-for="(item, index) in listaFiltrada" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
