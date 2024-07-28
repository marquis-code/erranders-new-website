import { orderApiFactory } from "@/apiFactory/order";
import { useLogin } from '@/composables/auth/login'
export const useFetchOrderList = () => {
    const ordersList = ref([]) as any
    const loading = ref(false) as any
    const { user } = useLogin()
     const fetchOrders = async () => {
        loading.value = true;
        try {
          const response = await orderApiFactory.fetchOrders(user.value._id);
          ordersList.value = response.data || []
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
      return { fetchOrders, ordersList, loading };
}