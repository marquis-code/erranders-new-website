<template>
    <div>
      <h1>Real-Time Orders</h1>
      <ul>
        <li v-for="order in orders" :key="order._id">
          <strong>Order ID:</strong> {{ order._id }} <br>
          <strong>Total Price:</strong> {{ order.totalPrice }} <br>
          <strong>Status:</strong> {{ order.status }} <br>
          <strong>Items:</strong>
          <ul>
            <li v-for="item in order.items" :key="item.product">
              {{ item.quantity }} x {{ item.product.name }} - ${{ item.price }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useOrderEvents } from '@/composables/order/useOrderEvents';
  
  const { orders } = useOrderEvents();
  </script>
  