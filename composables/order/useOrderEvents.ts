import { ref, onMounted, onUnmounted } from 'vue';

export function useOrderEvents() {
  const orders = ref<any[]>([]);
  const eventSource = ref<EventSource | null>(null);
  const latestOrder = ref<any | null>(null);

  onMounted(() => {
    eventSource.value = new EventSource('https://erranders-api-service.onrender.com/api/v1/orders/events');


    eventSource.value.onmessage = (event) => {
      const order = JSON.parse(event.data);
      orders.value.push(order);
      latestOrder.value = order; // Set the latest order for toast notification
    };

    eventSource.value.onerror = (error) => {
      console.error('EventSource failed:', error);
      eventSource.value?.close();
    };
  });

  onUnmounted(() => {
    eventSource.value?.close();
  });

  return {
    orders,
    latestOrder,
  };
}
