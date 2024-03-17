<template>
  <div>
    <h1>Lista de tarefas</h1>
    <input
      v-model="novaTarefa"
      @keyup.enter="adicionarTarefa"
      placeholder="Digite uma nova tarefa"
      type="text"
    />
    <button @click="filtrarTarefas(true)">Tarefas Realizadas</button>
    <button @click="filtrarTarefas(false)">Tarefas Não Realizadas</button>
    <ul>
      <li v-for="(tarefa, index) in tarefasFiltradas" :key="index">
        <input type="checkbox" v-model="tarefa.checked" />
        <p
          :style="{
            textDecorationLine: tarefa.checked ? 'line-through' : 'none',
          }"
        >
          {{ tarefa.name }}
        </p>
        <button @click="removerTarefa(index)">Remover</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novaTarefa: "", // armazena a nova tarefa digitada pelo usuário
      tarefas: [], // armazena todas as tarefas
      tarefasFiltradas: [], // armazena as tarefas filtradas
    };
  },
  methods: {
    adicionarTarefa() {
      if (this.novaTarefa.trim() !== "") {
        this.tarefas.push({
          name: this.novaTarefa,
          checked: false,
        });
        this.novaTarefa = "";
      }
    },
    removerTarefa(index) {
      this.tarefas.splice(index, 1);
    },
    filtrarTarefas(realizadas) {
      this.tarefasFiltradas = this.tarefas.filter(
        (tarefa) => tarefa.checked === realizadas
      );
    },
  },
};
</script>

<style></style>
