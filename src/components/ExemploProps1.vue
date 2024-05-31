<script setup>
import ExemploProps2 from "./ExemploProps2.vue";

let name = "Anderson";
let age = 37;
let city = "Canoas";
let citys = ["Porto Alegre", "Rio de Janeiro", "São Paulo", "Curitiba"];

function message() {
  alert("Funçao criada no componente ExemploProps1");
}
</script>

<template>
  <ExemploProps2
    :name="name"
    :age="age"
    :city="city"
    :citys="citys"
    :message="message"
  >
  </ExemploProps2>
</template>
