<template>
  <div>
    <NavigationBar class="z-50"/>
    <CoreToastNotification :order="latestOrder" />
    <NuxtPage class="z-10" />
    <!-- <ChatbotIcon /> -->
    <SupportForm />
    <ModalsCartListSlideOver />
  </div>
</template>

<script setup lang="ts">
import { useOrderEvents } from '@/composables/order/useOrderEvents';
const { latestOrder } = useOrderEvents();
</script>
