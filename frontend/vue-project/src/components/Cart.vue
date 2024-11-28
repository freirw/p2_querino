<template>
  <div class="cart">
    <h2>Carrinho</h2>
    <div v-for="item in cart" :key="item.id">
      <CartItem :item="item" @remove-item="removeFromCart" />
    </div>
    <div class="total">
      Total: R$ {{ total.toFixed(2) }}
    </div>
    <button @click="proceedToPayment">Finalizar Pedido</button>
  </div>
</template>

<script lang="ts">
import CartItem from "./CarItem.vue";
import axios from "axios"; 

interface CartItemType {
  id: number;
  name: string;
  price: number;
}

export default {
  name: "Cart",
  components: { CartItem },
  props: {
    cart: {
      type: Array as () => CartItemType[], 
      required: true,
    },
  },
  computed: {
    total() {
      // Calcula o total dos itens do carrinho
      return this.cart.reduce((sum, item) => sum + item.price, 0); 
    },
  },
  methods: {
    removeFromCart(item: CartItemType) {
      this.$emit("remove-from-cart", item); 
    },
    async proceedToPayment() {
      if (this.cart.length === 0) {
        alert("Carrinho vazio. Adicione itens antes de finalizar o pedido.");
        return;
      }

      try {
        const response = await axios.post("http://localhost:3000/api/pedido", {
          items: this.cart,
          totalPrice: this.total,
        });

        console.log("Pedido finalizado com sucesso:", response.data);
        alert("Pedido realizado com sucesso!");


        this.$emit("clear-cart");
        
      } catch (error) {
        console.error("Erro ao finalizar o pedido:", error);
        alert("Houve um erro ao realizar o pedido.");
      }
    },
  },
};
</script>

  
  <style scoped>
  .cart {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 300px;
    background: #2d2d2d;
    color: white;
    padding: 1rem;
    border-left: 1px solid #444;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    overflow-y: auto;
  }
  .total {
    font-weight: bold;
    margin: 1rem 0;
  }
  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #43a047;
  }
  </style>
  