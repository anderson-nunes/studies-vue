<script setup lang="ts">
import { PropType, ref } from "vue";
import DetailsPokemon from "../../components/Details/DetailsPokemon.vue";

const selectedPokemon = ref<any | null>(null);

const props = defineProps({
  item: {
    type: Object as PropType<any>,
    required: true,
  },
});
</script>

<template>
  <div class="card text-center">
    <div class="title">
      <slot name="name"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="description">
      <slot name="description"></slot>
    </div>

    <DetailsPokemon :selectedPokemon="props.item" />
  </div>
</template>

<style scoped>
.card {
  width: 250px;
  border-radius: 0.5rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.title,
.content,
.description {
  padding: 1rem;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
