import { usersApiFactory } from "@/apiFactory/users";
export const useFetchVendorsList = () => {
    const vendors = ref([]) as any
    const loading = ref(false) as any
     const fetchVendors = async () => {
        loading.value = true;
        try {
          const response = await usersApiFactory.fetchVendors()
          vendors.value = response?.data?.vendors || []
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
        fetchVendors()
      })

      return { fetchVendors, vendors, loading };
}