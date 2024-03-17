<template>
  <div>
    <select v-model="categoria">
      <option value="">Todos</option>
      <option v-for="cat in categorias" :value="cat" :key="cat">
        {{ cat }}
      </option>
    </select>
    <ul>
      <li v-for="(item, index) in listaFiltrada" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: ["Maçã", "Banana", "Abacaxi", "Morango"],
      categorias: ["Frutas", "Legumes", "Verduras"],
      categoria: "",
    };
  },
  computed: {
    listaFiltrada() {
      if (!this.categoria) return this.lista;
      return this.lista.filter((item) =>
        item.toLowerCase().startsWith(this.categoria.toLowerCase())
      );
    },
  },
};
</script>
