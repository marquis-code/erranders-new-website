import { authApiFactory } from "@/apiFactory/auth";
export const useErranderSignup = () => {
  const loading = ref(false);
  const router = useRouter()
  const registerPayload = ref({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    homeAddress: '',
    residentialAddress: '',
    referral: '',
    coordinates: []
  }) as any

  const handleRegister = async () => {
    loading.value = true;
    try {
      const payload = {
        name: registerPayload.value.name,
        email: registerPayload.value.email,
        phone: registerPayload.value.phone,
        password: registerPayload.value.password,
        referral: registerPayload.value.referral,
        role: 'errander',
        homeAddress: registerPayload.value.homeAddress,
        residentialAddress: registerPayload.value.residentialAddress,
        location: {
          type: 'Point',
          coordinates: registerPayload.value.coordinates
        }
      };

      const response = await authApiFactory.register(payload);
      if(response?.status === Number(201)){
        useNuxtApp().$toast.success("Account was successfully created.", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
         });
        router.push("/login");
       }
      } catch (error: any) {
      console.log(error, 'error here')
      useNuxtApp().$toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      return error;
    } finally {
      loading.value = false;
    }
  };
  
  const isSecondFormEmpty = computed(() => {
    return !!(
      registerPayload.value.phone &&
      registerPayload.value.homeAddress &&
      registerPayload.value.residentialAddress
    );
  });

  const isFirstFormEmpty = computed(() => {
    return !!(
     registerPayload.value.name &&
      registerPayload.value.email &&
      registerPayload.value.password &&
      registerPayload.value.confirmPassword
    );
  });

  return { registerPayload, handleRegister, loading, isSecondFormEmpty, isFirstFormEmpty };
};
