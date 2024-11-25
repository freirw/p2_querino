<template>
  <header class="header">
    <div class="header-left">
      <h1>Jaegar Resto</h1>
      <p>{{ currentDate }}</p>
      <p v-if="cliente">Cliente: {{ cliente.nome }}</p>  <!-- Exibe o nome do cliente -->
    </div>
    <div class="header-center">
      <input
        type="text"
        placeholder="Search for food, coffee, etc..."
        v-model="searchQuery"
        @input="onSearch"
      />
    </div>
    <div class="header-right">
      <div class="cart-icon" @click="$emit('toggle-cart')">
        <i class="pi pi-shopping-cart"></i>
        <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { getCliente } from "@/services/clienteService";  // Importa a função para obter o cliente

export default defineComponent({
  name: "Header",
  props: {
    cartCount: {
      type: Number,
      required: true, // Número de itens no carrinho
    },
  },
  setup() {
  const searchQuery = ref("");
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const cliente = ref<any>(null);

  // Função para carregar o cliente do backend
  const carregarCliente = async () => {
  try {
    console.log("Carregando cliente...");
    const clienteData = await getCliente();
    cliente.value = Array.isArray(clienteData) ? clienteData[0] : clienteData;
    console.log("Cliente carregado:", cliente.value);
  } catch (error) {
    console.error("Erro ao carregar o cliente:", error);
  }
};



  onMounted(() => {
    carregarCliente();
  });

  // A função onSearch agora é retornada para ser usada no template
  const onSearch = () => {
    console.log("Busca realizada:", searchQuery.value);
  };

  return {
    searchQuery,
    currentDate,
    cliente,
    onSearch, // Expondo a função onSearch
  };
},
});
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2d2d2d;
  color: white;
  border-bottom: 1px solid #444;
  
  position: fixed; /* Fixa o cabeçalho no topo */
  top: 0; /* Coloca no topo */
  left: 0; /* Garante que fique alinhado à esquerda */
  width: 100%; /* Ocupa toda a largura da tela */
  z-index: 1000; /* Garante que o cabeçalho fique acima de outros elementos */
  box-sizing: border-box; /* Inclui padding e border no cálculo do tamanho total */
}

.header-left h1 {
  font-size: 1.8rem;
  margin: 0;
}

.header-left p {
  margin: 0;
  font-size: 0.9rem;
  color: #bbb;
}

.header-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; /* Faz com que a área central ocupe o espaço restante */
}

.header-center input {
  width: 40rem; /* Ajuste o tamanho conforme necessário */
  padding: 0.5rem;
  border: 1px solid #444;
  border-radius: 5px;
  background-color: #3c3c3c;
  color: white;
}

.header-center input::placeholder {
  color: #aaa;
}

.header-center input:focus {
  outline: none;
  border-color: #ff5722;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cart-icon {
  position: relative;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: #ff5722;
  color: white;
  font-size: 0.8rem;
  padding: 0.2rem 0.4rem;
  border-radius: 50%;
}
</style>
