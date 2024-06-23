import { authApiFactory } from "@/apiFactory/auth";

export const useVendorSignup = () => {
  const loading = ref(false);
  const registerPayload = ref({
    businessName: "",
    businessEmail: "",
    password: "",
    confirmPassword: "",
    phone: "",
    registrationNumber: '',
    businessAddress: '',
    residentialAddress: '',
  });

  const handleRegister = async () => {
    loading.value = true;
    try {
      const { confirmPassword, ...payload } = registerPayload.value 

      const response = await authApiFactory.register(payload);
      useNuxtApp().$toast.success("Account was successfully created.", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      useRouter().push("/login");
    } catch (error: any) {
      useNuxtApp().$toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      // return error;
    } finally {
      loading.value = false;
    }
  };
  
  const isSecondFormEmpty = computed(() => {
    return !!(
      registerPayload.value.phone &&
      registerPayload.value.registrationNumber &&
      registerPayload.value.businessAddress &&
      registerPayload.value.residentialAddress
    );
  });

  const isFirstFormEmpty = computed(() => {
    return !!(
      registerPayload.value.businessEmail &&
      registerPayload.value.businessEmail &&
      registerPayload.value.confirmPassword &&
      registerPayload.value.password
    );
  });

  return { registerPayload, handleRegister, loading, isSecondFormEmpty, isFirstFormEmpty };
};
