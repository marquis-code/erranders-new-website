import { erranderApiFactory } from "@/apiFactory/errander";
import { useLogin } from '@/composables/auth/login'
export const useFetchErranderOrderList = () => {
    const ordersList = ref([]) as any
    const loading = ref(false) as any
    const { user } = useLogin()
     const fetchErranderOrders = async () => {
        loading.value = true;
        try {
          const response = await erranderApiFactory.fetchErranderOrders(user.value._id);
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

      onMounted(() => {
        fetchErranderOrders()
      })
      
      return { fetchErranderOrders, ordersList, loading };
}