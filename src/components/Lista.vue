<script>
export default {
  name: "Lista",

  data() {
    return {
      backend_technologies: ["Javascript", "PHP", "Java"],
      frontend_technologies: [
        { id: 1, linguage: "HTML" },
        { id: 2, linguage: "CSS" },
        { id: 3, linguage: "VUE" },
      ],
    };
  },
};
</script>
<template>
  <div>
    <h3>Tecnologias para back-end</h3>
    <ul>
      <li
        v-for="(technology, index) in backend_technologies"
        v-bind:key="index"
      >
        {{ technology }}
      </li>
    </ul>
    <h3>Tecnologias para front-end</h3>
    <ul>
      <li v-for="technology in frontend_technologies" :key="technology.id">
        {{ technology.linguage }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
