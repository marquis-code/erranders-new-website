import { productApiFactory } from "@/apiFactory/product";
import { useLogin } from '@/composables/auth/login'
import { useRoute } from 'vue-router';
export const useFetchProductsList = () => {
    const products = ref([]) as any
    const loading = ref(false) as any
    const route = useRoute();
    const { user } = useLogin()
     const fetchProducts = async () => {
        loading.value = true;
        try {
          const userId = route.params.userId || user.value._id;
          const response = await productApiFactory.fetchProducts(userId);
          products.value = response.data || []
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