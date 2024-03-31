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
        this.tarefas.push({ texto: this.novaTarefa, concluida: false });
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
  <input
    type="text"
    v-model="novaTarefa"
    @keyup.enter="adicionarTarefa"
    placeholder="Adicionar nova tarefa"
  />

  <ul>
    <li v-for="(tarefa, index) in tarefas" :key="index">
      <input type="checkbox" v-model="tarefa.concluida" />
      {{ tarefa.texto }}
      <button @click="removerTarefa(index)">Remover</button>
    </li>
  </ul>
</template>

<style></style>
