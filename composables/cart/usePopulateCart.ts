import { useUUID } from '@/composables/core/useUUID'
import { useCreateCart } from '@/composables/cart/create'
const { uuid, generateUUID } = useUUID()
const { addToCart, cartList } = useCreateCart()
export const usePopulateCart = () => {
  const populateCart = ({productCount, productSize, ...rest}) => {
    generateUUID();
    const payload = {
      id: uuid.value,
      count: productCount,
      size: productSize,
      ...rest,
    };
    addToCart(payload);
    useNuxtApp().$toast.success("Item was successfully added to cart.", {
      autoClose: 5000,
      dangerouslyHTMLString: true,
    });
  };

  return { populateCart}
};
