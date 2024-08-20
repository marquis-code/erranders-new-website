<template>
    <div v-if="visible" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
  
        <!-- Modal panel -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Order Details</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">Order ID: {{ order?._id }}</p>
                  <p class="text-sm text-gray-500">Total Price: ${{ order?.totalPrice }}</p>
                  <p class="text-sm text-gray-500">Status: {{ order?.status }}</p>
                  <h4 class="mt-2 text-sm font-semibold text-gray-900">Items:</h4>
                  <ul class="text-sm text-gray-500">
                    <li v-for="item in order?.items" :key="item.product._id">
                      {{ item.quantity }} x {{ item.product.name }} - ${{ item.price }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button @click="closeModal" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  
  interface Order {
    _id: string;
    totalPrice: number;
    status: string;
    items: Array<{
      product: {
        _id: string;
        name: string;
      };
      quantity: number;
      price: number;
    }>;
  }
  
  const props = defineProps<{ order: Order | null }>();
  const visible = ref(false);
  
  watch(() => props.order, (newOrder) => {
    if (newOrder) {
      visible.value = true;
    }
  });
  
  function closeModal() {
    visible.value = false;
    // Emit an event to notify the parent component that the modal is closed
    emit('close');
  }
  </script>
  