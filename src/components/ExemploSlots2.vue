<script setup>
import { defineProps, defineEmits, toRaw } from "vue";

const props = defineProps({
  fields: {
    type: Array,
    required: true,
  },
  formData: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["submit"]);

function submitForm() {
  // Emitir os dados do formulário como um objeto plano
  emit("submit", toRaw(props.formData));
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <slot
      v-for="(field, index) in fields"
      :field="field"
      :index="index"
      :key="index"
    ></slot>
    <button type="submit">Enviar</button>
  </form>
</template>
