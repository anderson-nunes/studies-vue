<template>
  <div class="container">
    <form class="form">
      <h1 class="text">
        Formulário de contato com validações de campo obrigatórios
      </h1>
      <input type="text" v-model="nome" placeholder="Digite o seu Nome" />
      <input type="email" v-model="email" placeholder="Digite o seu email" />
      <textarea name="mensagem" v-model="mensagem" id="" cols="30" rows="10">
      </textarea>
      <button @click="enviarFormulario">Enviar</button>
      <p v-if="enviado">Formulário enviado com sucesso!</p>
      <p class="error" v-if="erro">
        Por favor, preencha todos os campos obrigatórios.
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      email: "",
      mensagem: "",
      enviado: false,
      erro: false,
    };
  },
  methods: {
    enviarFormulario(e) {
      e.preventDefault();
      if (this.nome && this.email && this.mensagem) {
        console.log("Nome:", this.nome);
        console.log("Email:", this.email);
        console.log("Mensagem:", this.mensagem);
        this.enviado = true;
        this.erro = false;
      } else {
        this.enviado = false;
        this.erro = true;
      }
    },
  },
};
</script>

<style>
.container {
  width: 100%;
}

.form {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  gap: 1rem;
  background: rgb(0, 255, 247);
}

.text {
  text-align: center;
}

.error {
  color: red;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px;
}
</style>
