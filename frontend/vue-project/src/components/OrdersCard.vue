<template>
    <div class="fixed top-16 right-4 bg-gray-900 text-white p-6 w-80 rounded-lg shadow-lg z-50">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Orders #{{ orderNumber }}</h2>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div class="space-y-4">
        <div
          v-for="item in items"
          :key="item.id"
          class="flex justify-between items-center"
        >
          <div>
            <p class="text-sm font-medium">{{ item.name }}</p>
            <p class="text-xs text-gray-400">${{ item.price}}</p>
            <input
              type="text"
              placeholder="Order Note..."
              class="w-full mt-2 p-2 bg-gray-800 rounded-md text-gray-300 text-sm"
            />
          </div>
          <div class="text-center">
            <p class="text-sm">{{ item.quantity }}</p>
            <p class="text-sm font-medium">
              ${{ (item.price * item.quantity)}}
            </p>
          </div>
          <button class="text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6 3a1 1 0 011-1h6a1 1 0 011 1v1h3a1 1 0 110 2h-1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h3V3zm3 3a1 1 0 10-2 0v8a1 1 0 102 0V6zm4 0a1 1 0 10-2 0v8a1 1 0 102 0V6z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-4 pt-4">
        <div class="flex justify-between">
          <p class="text-gray-400 text-sm">Desconto</p>
          <p class="text-sm font-semibold">$0</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-400 text-sm">Sub total</p>
          <p class="text-sm font-semibold">${{ calculateTotal(items) }}</p>
        </div>
      </div>
      <button class="w-full bg-orange-500 text-white mt-4 py-2 rounded-md font-medium">
        Continuar Pagamento
      </button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from "vue";
  
  export default defineComponent({
    name: "OrdersCard",
    props: {
      items: Array as PropType<
        Array<{ id: number; name: string; price: number; quantity: number }>
      >,
      orderNumber: Number,
    },
    methods: {
      calculateTotal(items: Array<{ price: number; quantity: number }>) {
        return items
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2);
      },
    },
  });
  </script>
  