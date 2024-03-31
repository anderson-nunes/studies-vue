<script>
export default {
  data() {
    return {
      lista: [
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 30 },
        { nome: "Pedro", idade: 35 },
        { nome: "Ana", idade: 28 },
      ],
      filtroNome: "",
      filtroIdade: "",
    };
  },
  computed: {
    listaFiltrada() {
      return this.lista.filter((item) => {
        const filtroNome = this.filtroNome.toLowerCase();
        const filtroIdade = parseInt(this.filtroIdade);
        return (
          (!filtroNome || item.nome.toLowerCase().includes(filtroNome)) &&
          (!filtroIdade || item.idade === filtroIdade)
        );
      });
    },
  },
};
</script>
<template>
  <div class="container">
    <p>Filtrar por nome</p>
    <input v-model="filtroNome" placeholder="Nome" />
    <p>Filtrar por idade</p>
    <input v-model="filtroIdade" placeholder="Idade" />
    <ul>
      <li v-for="(item, index) in listaFiltrada" :key="index">
        {{ item.nome }} - {{ item.idade }} anos
      </li>
    </ul>
  </div>
</template>

<style>
.container {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>
