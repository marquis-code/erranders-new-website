import { ref, watch, computed } from 'vue';
import { useCreateCart } from "@/composables/cart/create";

export function useOrderPriceCalculation() {
  const { totalPrice } = useCreateCart();
  const startDate = ref('');
  const endDate = ref('');
  const pricePerDay = totalPrice.value

  const daysDifference = computed(() => {
    if (startDate.value && endDate.value) {
      const start = new Date(startDate.value);
      const end = new Date(endDate.value);
      const timeDiff = end.getTime() - start.getTime();
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return days > 0 ? days : 0;
    }
    return 0;
  });

  const computedTotalPrice = computed(() => daysDifference.value * pricePerDay);

  const displayText = computed(() => {
    if (startDate.value && endDate.value) {
      return `From ${startDate.value} to ${endDate.value}, the total cost is ${computedTotalPrice.value.toLocaleString()} Naira.`;
    }
    return '';
  });

  return {
    startDate,
    endDate,
    daysDifference,
    totalPrice: computedTotalPrice,
    displayText,
  };
}
