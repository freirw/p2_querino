<template>
    <div class="register-container">
      <div class="register-box">
        <h1>Jaegar Resto</h1>
        <h2>Cadastro</h2>
        <form @submit.prevent="onSubmit">
          <input type="email" placeholder="E-MAIL" v-model="email" />
          <input type="email" placeholder="CONFIRMAÇÃO E-MAIL" v-model="confirmEmail" />
          <input type="password" placeholder="SENHA" v-model="password" />
          <input type="password" placeholder="CONFIRMAÇÃO SENHA" v-model="confirmPassword" />
          <button type="submit">ENTRAR</button>
        </form>
        <p class="login">
         Já tem acesso? <router-link to="/login">Faça login aqui.</router-link>
        </p>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Register",
    data() {
      return {
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
      };
    },
    methods: {
      onSubmit() {
        if (this.email !== this.confirmEmail) {
          alert("Os e-mails não coincidem!");
          return;
        }
        if (this.password !== this.confirmPassword) {
          alert("As senhas não coincidem!");
          return;
        }
        alert("Cadastro realizado com sucesso!");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilo do fundo */
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
  }
  
  /* Caixa de cadastro */
  .register-box {
    background-color: #2a2a40;
    border-radius: 10px;
    padding: 2rem;
    width: 400px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .register-box h1 {
    color: #ffffff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .register-box h2 {
    color: #cccccc;
    margin-bottom: 1.5rem;
  }
  
  /* Campos de entrada */
  input[type="email"],
  input[type="password"] {
    width: 70%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #3b3b5e;
    color: #ffffff;
    font-size: 1rem;
  }
  
  input::placeholder {
    color: #8888aa;
  }
  
  button {
    width: 30%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #4444ff;
    color: white;
    font-size: 14px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #6666cc;
  }
  
  .login {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #aaaaaa;
  }
  
  .login a {
    color: #8888ff;
    text-decoration: none;
  }
  
  .login a:hover {
    text-decoration: underline;
  }
  </style>
  