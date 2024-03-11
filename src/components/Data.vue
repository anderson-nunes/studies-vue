<template>
  <div>
    <div v-for="role in infos" :key="role.id">
      <h4>Id: {{ role.id }}</h4>
      <h4>Name: {{ role.name }}</h4>
      <h4>Profissão: {{ role.role }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/infos")
      .then((response) => response.json())
      .then((data) => (this.infos = data));
  },
};
</script>

<style scoped></style>
