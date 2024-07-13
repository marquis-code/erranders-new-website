// fetchCarouselProducts

import { productApiFactory } from "@/apiFactory/product";
export const useFetchProductsList = () => {
    const products = ref([]) as any
    const loading = ref(false) as any
     const fetchProducts = async () => {
        loading.value = true;
        try {
          const response = await productApiFactory.fetchCarouselProducts();
          products.value = response.data.products || []
          return response;
        } catch (error) {
            useNuxtApp().$toast.error("Something went wrong!", {
                autoClose: 5000,
                dangerouslyHTMLString: true,
              });
              loading.value = false;
        } finally{
            loading.value = false
        }
      };
      return { fetchProducts, products, loading };
}