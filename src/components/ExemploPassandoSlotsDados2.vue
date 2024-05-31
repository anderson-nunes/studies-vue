<script setup></script>

<template>
  <div class="cartao">
    <header>
      <slot name="title"></slot>
    </header>
    <main>
      <slot name="content"></slot>
    </main>
  </div>
</template>

<style scoped>
.cartao {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 4px;
}
</style>
