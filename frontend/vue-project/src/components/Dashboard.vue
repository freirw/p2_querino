<template>
    <div>
      <h1>Bem-vindo ao Painel!</h1>
      <button @click="logout">Sair</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "Dashboard",
    setup() {
      const logout = () => {
        localStorage.removeItem("authToken"); // Remove o token
        window.location.href = "/login"; // Redireciona para o login
      };
  
      return {
        logout,
      };
    },
  });
  </script>
  
  <style scoped>
  h1 {
    color: white;
  }
  button {
    padding: 10px 20px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: darkred;
  }
  </style>
  