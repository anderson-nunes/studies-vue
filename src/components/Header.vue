<template>
  <header>
    <div>
      <img src="" alt="logo" />
    </div>
    <nav class="navBar">
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Sobre-nós</a>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
  background: yellow;
}

.navBar {
  background: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

ul {
  display: flex;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
