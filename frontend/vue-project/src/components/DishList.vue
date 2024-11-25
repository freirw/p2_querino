<template>
    <div class="dish-list">
      <div v-for="dish in dishes" :key="dish.id" class="dish-card">
        <img :src="dish.image" :alt="dish.name" />
        <h3>{{ dish.name }}</h3>
        <p>{{ dish.description }}</p>
        <div class="price">R$ {{ dish.price.toFixed(2) }}</div>
        <button @click="addToCart(dish)">Adicionar</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  interface Dish {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  }
  
  export default {
    name: "DishList",
    props: {
      dishes: {
        type: Array as () => Dish[], // Defina que 'dishes' é um array de objetos do tipo Dish
        required: true,
      },
    },
    methods: {
      addToCart(dish: Dish) {
        this.$emit("add-to-cart", dish); // Passa o dish para o componente pai
      },
    },
  };
  </script>
  
  <style scoped>
  .dish-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .dish-card {
    background-color: #fff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  .dish-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
  .dish-card h3 {
    margin: 0.5rem 0;
  }
  .price {
    font-weight: bold;
    margin: 0.5rem 0;
  }
  button {
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #e64a19;
  }
  </style>
  