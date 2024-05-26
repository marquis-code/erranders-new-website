const cartList = ref([]) as Record<string, any>;
const isCartOpen = ref(false);
export const useCreateCart = () => {
  const addToCart = (item: any) => {
    const existingItem = cartList.value.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartList.value.push({ ...item, quantity: 1 });
    }

    console.log(cartList.value, "card list");
  };

  const removeItem = (id: number) => {
    cartList.value = cartList.value.filter((item) => item.id !== id);
  };

  const clearCart = () => {
    cartList.value = [];
  };

  const openCart = () => {
    isCartOpen.value = true;
  };

  const closeCart = () => {
    isCartOpen.value = false;
  };

  const totalPrice = computed(() =>
    cartList.value.reduce((acc, item) => acc + item.price * item.count, 0)
  );

  return {
    cartList,
    addToCart,
    removeItem,
    clearCart,
    totalPrice,
    isCartOpen,
    openCart,
    closeCart,
  };
};
