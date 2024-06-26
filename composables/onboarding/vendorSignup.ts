import { authApiFactory } from "@/apiFactory/auth";
const router = useRouter()
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
    coordinates: []
  }) as any

  const handleRegister = async () => {
    loading.value = true;
    try {
      const payload = {
        name: registerPayload.value.businessName,
        email: registerPayload.value.businessEmail,
        phone: registerPayload.value.phone,
        password: registerPayload.value.password,
        businessName: registerPayload.value.businessName,
        businessEmail: registerPayload.value.businessEmail,
        businessPhone: registerPayload.value.phone,
        role: 'vendor',
        cacRegistration: registerPayload.value.registrationNumber,
        businessLocation: registerPayload.value.businessAddress,
        residentialAddress: registerPayload.value.residentialAddress,
        location: {
          type: 'Point',
          coordinates: registerPayload.value.coordinates
        }
      };

      const response = await authApiFactory.register(payload);
      console.log(response, 'ap response here');
      if(response?.data?.status === Number(201)){
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
