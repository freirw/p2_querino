<template>
  <aside class="sidebar">
    <h1>Jaegar Resto</h1>
    <nav>
      <ul>
        <li><i class="pi pi-home"></i> Home</li>
        <li><i class="pi pi-list"></i> Menu</li>
        <li><i class="pi pi-user"></i> Profile</li>
        <li><i class="pi pi-cog"></i> Settings</li>
        <!-- Adicionando o ícone de sair -->
        <li @click="onLogout"><i class="pi pi-sign-out"></i> Logout</li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
export default {
  name: "Sidebar",
  methods: {
    // Método de logout
    onLogout() {
      console.log("Usuário saiu!");
      // Aqui você pode adicionar a lógica de logout (por exemplo, limpar o token de autenticação, redirecionar para a página de login, etc.)
      // Exemplo de redirecionamento (se você estiver usando Vue Router):
      // this.$router.push("/login");
    },
  },
};
</script>
  
  <style scoped>
  .sidebar {
    width: 10rem; /* Ajuste conforme necessário */
    height: 100vh; /* Altura da sidebar será igual à altura da tela */
    background-color: #1F1D2B;
    color: white;
    padding: 1rem;
    position: fixed; /* Fixa a sidebar à esquerda */
    top: 0;
    left: 0; /* Fixa à esquerda */
    z-index: 1000; /* Garante que a sidebar fique acima de outros elementos */
    border-radius: 5rem;
  
  }
  
  .sidebar h1 {
    font-size: 1.5rem;
    margin-bottom: 10rem;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    margin: 5rem 0;
    cursor: pointer;
  }
  
  .sidebar li i {
    margin-right: 0.5rem;
  }
  </style>
  