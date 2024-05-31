<script lang="ts" setup>
import { PropType, ref } from "vue";

const isDetailsVisible = ref<boolean>(false);

const props = defineProps({
  selectedPokemon: {
    type: Object as PropType<any>,
    required: true,
  },
});
</script>

<template>
  <VDialog v-model="isDetailsVisible" width="500">
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn
        style="
          background-color: transparent;
          font-size: 12px;
          font-weight: bold;
        "
        v-bind="props"
        @click="isDetailsVisible = true"
      >
        Detalhes
      </VBtn>
    </template>
    <DialogCloseBtn @click="isDetailsVisible = false" />
    <VCard title="Detalhes do Pokémon">
      <VCardText v-if="selectedPokemon">
        <p>Nome: {{ selectedPokemon.name }}</p>
        <p>Tipos: {{ selectedPokemon.types.join(", ") }}</p>
        <img :src="selectedPokemon.image" :alt="selectedPokemon.name" />
      </VCardText>
      <VCardActions>
        <VBtn @click="isDetailsVisible = false">Fechar</VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<style></style>
