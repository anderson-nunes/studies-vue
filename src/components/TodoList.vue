<script>
export default {
  data() {
    return {
      novaTarefa: "",
      tarefas: [],
    };
  },
  methods: {
    adicionarTarefa() {
      if (this.novaTarefa.trim() !== "") {
        this.tarefas.push(this.novaTarefa);
        this.novaTarefa = "";
      }
    },
    removerTarefa(index) {
      this.tarefas.splice(index, 1);
    },
  },
};
</script>
<template>
  <h1>Lista de tarefas</h1>

  <input
    type="text"
    v-model="novaTarefa"
    @keyup.enter="adicionarTarefa"
    placeholder="Digite uma nova tarefa"
  />

  <ul>
    <li v-for="(tarefa, index) in tarefas" :key="index">
      {{ tarefa }}
      <button @click="removerTarefa(index)">Remover</button>
    </li>
  </ul>
</template>

<style></style>
