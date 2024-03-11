<template>
  <div class="container">
    <header>
      <div>
        <img src="" alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre-nós</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  padding: 0 60px;
}

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #fafafa;
  border: 1px solid #010101;
}

ul {
  display: flex;
  gap: 20px;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
