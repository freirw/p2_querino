<template>
    <div class="cart-item">
      <p>{{ item.name }}</p>
      <div>
        <span>R$ {{ item.price.toFixed(2) }}</span>
        <button @click="removeItem(item)">Remover</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: "CartItem",
    props: {
      item: Object, 
    },
    methods: {
      removeItem(item) {
        this.$emit("remove-item", item); 
      },
    },
  };
  </script>
  
  <style scoped>
  .cart-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .cart-item p {
    margin: 0;
  }
  .cart-item button {
    background-color: #e53935;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.3rem 0.6rem;
    cursor: pointer;
  }
  cart-item button:hover {
    background-color: #d32f2f;
  }
  </style>
  