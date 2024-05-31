<script setup>
import ExemploProps4 from "./ExemploProps4.vue";

let title = "Exemplo de props";
let quantity = 10;
let items = ["item 1", "item 2", "item 3"];
let user = { name: "Anderson", age: 37, job: "Desenvolvedor web" };

let product = [
  { id: 1, name: "Produto A", price: 100 },
  { id: 2, name: "Produto B", price: 200 },
  { id: 3, name: "Produto C", price: 300 },
];

function showAlert() {
  alert("Função chamada pelo componente filho!");
}
</script>

<template>
  <ExemploProps4
    :showAlert="showAlert"
    @submit="processForm"
    :products="product"
    :title="title"
    :quantitys="quantity"
    :users="user"
    :items="items"
  />
</template>
