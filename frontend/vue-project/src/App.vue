<template>
  <div id="app" class="app-container">
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>

<style>

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #1e1e2f; 
  font-family: Arial, sans-serif;
  color: white;
}

#app {
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.app-container {
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e2f; 
}
</style>
