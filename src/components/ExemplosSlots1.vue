<script setup>
import ExemploSlots2 from "./ExemploSlots2.vue";
import { ref } from "vue";

const fields = [
  { name: "name", label: "Nome", type: "input" },
  { name: "email", label: "Email", type: "input" },
  { name: "age", label: "Idade", type: "input" },
];

const formData = ref({
  name: "",
  email: "",
  age: "",
});

function processForm(data) {
  console.log("Dados recebidos do formulário:", data);
}
</script>

<template>
  <div>
    <h1>Formulário Dinâmico</h1>
    <ExemploSlots2 :fields="fields" :formData="formData" @submit="processForm">
      <template #default="{ field, index }">
        <div class="form-group">
          <label :for="'field-' + index">{{ field.label }}</label>
          <component
            :is="field.type"
            :name="'field-' + index"
            v-model="formData[field.name]"
          >
          </component>
        </div>
      </template>
    </ExemploSlots2>
  </div>
</template>

<style scoped>
.form-group {
  margin: 10px 0;
}
</style>
