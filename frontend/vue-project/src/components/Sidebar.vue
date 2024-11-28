<template>
  <aside class="sidebar">
    <h1>Jaegar Resto</h1>
    <nav>
      <ul>
        <li><i class="pi pi-home"></i> Home</li>
        <li><i class="pi pi-list"></i> Menu</li>
        <li><i class="pi pi-user"></i> Profile</li>
        <li><i class="pi pi-cog"></i> Settings</li>
        <li @click="onLogout"><i class="pi pi-sign-out"></i> Logout</li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
export default {
  name: "Sidebar",
  methods: {
    onLogout() {
      console.log("Usuário saiu!");
  
    },
  },
};
</script>
  
  <style scoped>
  .sidebar {
    width: 10rem; 
    height: 100vh; 
    background-color: #1F1D2B;
    color: white;
    padding: 1rem;
    position: fixed; 
    top: 0;
    left: 0; 
    z-index: 1000; 
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
  