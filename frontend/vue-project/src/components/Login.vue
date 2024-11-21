<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Jaegar Resto</h1>
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input
          type="email"
          placeholder="USUÁRIO OU E-MAIL"
          v-model="form.email"
          required
        />
        <input
          type="password"
          placeholder="SENHA"
          v-model="form.password"
          required
        />
        <button type="submit">ENTRAR</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p class="register">
        Não tem acesso?
        <router-link to="/register">Cadastre-se aqui.</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
//import axiosInstance from "../utils/axiosInstance";

export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter();
    const form = reactive({ email: "", password: "" });
    const errorMessage = reactive("");

    const handleLogin = async () => {
      try {
        const response = await axiosInstance.post("/auth/login", {
          email: form.email,
          password: form.password,
        });

        const { token } = response.data;
        localStorage.setItem("authToken", token);
        router.push("/dashboard");
      } catch (error: any) {
        errorMessage.value =
          error.response?.data?.message || "E-mail ou senha inválidos.";
      }
    };

    return {
      form,
      errorMessage,
      handleLogin,
    };
  },
});
</script>
  <style scoped>
  /* Estilos que já estão no componente */
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  
  .login-box {
    background-color: #2a2a40;
    padding: 100px 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-align: center;
    max-width: 400px;
    width: 100%;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  input {
    display: block;
    width: 60%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    background-color: #3b3b5e;
    color: white;
    font-size: 14px;
    margin-left: 5rem;
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
    background-color: #5555ff;
  }
  
  .register {
    margin-top: 15px;
    font-size: 14px;
  }
  
  .register a {
    color: #8888ff;
    text-decoration: none;
  }
  
  .register a:hover {
    text-decoration: underline;
  }
  </style>
  