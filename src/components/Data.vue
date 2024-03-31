<script>
export default {
  data() {
    return {
      infos: [],
      isLoading: true,
      isError: false,
    };
  },
  mounted() {
    this.getInfos();
  },
  methods: {
    getInfos() {
      fetch("http://localhost:3000/infos")
        .then((response) => response.json())
        .then((data) => {
          this.infos = data;
          this.isError = false;
        })
        .catch((error) => {
          console.log(error);
          this.isError = true;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
<template>
  <div>
    <div v-for="role in infos" :key="role.id">
      <h4>Id: {{ role.id }}</h4>
      <h4>Name: {{ role.name }}</h4>
      <h4>Profissão: {{ role.role }}</h4>
    </div>
    <p v-if="isLoading">Carregando...</p>
    <div v-if="isError">
      <p>Erro na requisição</p>
      <button @click="getInfos">Recarregar</button>
    </div>
  </div>
</template>

<style scoped></style>
