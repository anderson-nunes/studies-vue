<script setup>
import { onMounted, ref } from "vue";

// const props = defineProps([
//   "title",
//   "quantitys",
//   "items",
//   "users",
//   "showAlert",
// ]);

const propsProduct = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

let products = ref([]);

onMounted(() => {
  products.value = propsProduct.products;
});
</script>

<template>
  <h1>{{ title }}</h1>
  <p>Quantidade: {{ quantitys }}</p>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
  <ul>
    <li v-for="user in users" :key="user">{{ user }}</li>
  </ul>
  <button @click="props.showAlert">Clique Aqui</button>

  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.name }} - R$ {{ product.price }}
    </li>
  </ul>
</template>
