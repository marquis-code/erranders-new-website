import { productApiFactory } from "@/apiFactory/product";
import { useLogin } from '@/composables/auth/login'
export const useFetchProductsList = () => {
    const products = ref([]) as any
    const loading = ref(false) as any
    const { user } = useLogin()
     const fetchProducts = async () => {
        loading.value = true;
        try {
          const response = await productApiFactory.fetchProducts(user.value._id);
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