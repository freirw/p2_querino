<template>
  <div class="dashboard">
    <Sidebar />
    <div class="main-content">
      <Header
        :cartCount="cart.length"
        @toggle-cart="toggleCart"
      />
      <DishList :dishes="dishes" @add-to-cart="addToCart" />
    </div>
    <OrdersCard
      v-if="isCartVisible"
      :items="cart"
      :orderNumber="orderNumber"
      @close="toggleCart"
    />
  </div>
</template>

<script lang="ts">
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import DishList from "../components/DishList.vue";
import OrdersCard from "../components/OrdersCard.vue";

export default {
  name: "Dashboard",
  components: { Sidebar, Header, DishList, OrdersCard },
  data() {
    return {
      dishes: [
        { id: 1, name: "Spicy Noodles", price: 9.99, quantity: 1 },
        { id: 2, name: "Beef Dumplings", price: 12.99, quantity: 1 },
        // Adicione mais pratos
      ],
      cart: [],
      isCartVisible: false, // Controla se o card de pedidos está visível
      orderNumber: 34562, // Número fictício do pedido
    };
  },
  methods: {
    addToCart(dish) {
      const existingItem = this.cart.find((item) => item.id === dish.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...dish, quantity: 1 });
      }
    },
    toggleCart() {
      this.isCartVisible = !this.isCartVisible;
    },
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
}
.main-content {
  flex: 1;
  padding: 1rem;
}
</style>
