<template>
  <h1>Lista de tarefas</h1>
  <input
    v-model="novaTarefa"
    @keyup.enter="adicionarTarefa"
    placeholder="Digite uma nova tarefa"
    type="text"
  />
  <ul>
    <li v-for="(tarefa, index) in tarefas" :key="index">
      {{ tarefa }}
      <button @click="removerTarefa(index)">Remover</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      novaTarefa: "", // armazena a nova tarefa digitada pelo usuário
      tarefas: [], // armazena todas as tarefas
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

<style></style>
