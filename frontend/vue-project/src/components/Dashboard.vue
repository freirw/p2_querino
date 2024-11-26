<template>
  <div class="dashboard">
    <Sidebar />
    <div class="main-content">
      <Header
        :cartCount="cart.length"
        @toggle-cart="toggleCart"
      />
      <DishList :dishes="pedidos" @add-to-cart="addToCart" />
    </div>
    <OrdersCard
      v-if="isCartVisible"
      :items="cart"
      :orderNumber="orderNumber"
      @close="toggleCart"
    />
    <!-- Adicionando um bloco para mostrar os pedidos -->
    <div v-if="pedidos.length > 0">
      <h3>Pedidos Recentes</h3>
      <ul>
        <li v-for="pedido in pedidos" :key="pedido.id" style="color: black;">
          Pedido #{{ pedido.id }} - Status: {{ pedido.idCliente }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import DishList from "../components/DishList.vue";
import OrdersCard from "../components/OrdersCard.vue";
import ProdutoService from "../services/produtoService"


export default {
  name: "Dashboard",
  components: { Sidebar, Header, DishList, OrdersCard },
  data() {
    return {
      cart: [],
      isCartVisible: false, // Controla se o card de pedidos está visível
      orderNumber: 34562, // Número fictício do pedido
      pedidos: [] // Array para armazenar os pedidos
    };
  },
  methods: {
    // Método para buscar os pedidos
    async fetchPedidos() {
      try {
        // Chama o método do serviço para obter os pedidos
        const pedidos = await ProdutoService.obterPedidos();
        this.pedidos = pedidos;
        console.log(pedidos) // Armazena os pedidos no estado
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    },
    // Método para adicionar pratos ao carrinho
    addToCart(dish) {
      const existingItem = this.cart.find((item) => item.id === dish.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...dish, quantity: 1 });
      }
    },
    // Método para alternar a visibilidade do carrinho
    toggleCart() {
      this.isCartVisible = !this.isCartVisible;
    },
  },
  mounted() {
    // Chama o método para buscar pedidos assim que o componente for montado
    this.fetchPedidos();
  }
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
