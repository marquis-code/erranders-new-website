import { authApiFactory } from "@/apiFactory/auth";
export const useCustomerSignup = () => {
  const loading = ref(false);
  const router = useRouter()
  const registerPayload = ref({
    name: "",
    email: "",
    password: "",
    phone: "",
    residentialAddress: '',
    address: '',
    referral: '',
    coordinates: [],
    location: null
  }) as any

  const handleRegister = async () => {
    loading.value = true;
    try {
      const payload = {
        name: registerPayload.value.name,
        email: registerPayload.value.email,
        phone: registerPayload.value.phone,
        password: registerPayload.value.password,
        role: 'user',
        address: registerPayload.value.address,
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
        // router.push("/login");
       }
       return response
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

  const setSignupPayload = (data: any) => {
    registerPayload.value.name = data.name;
    registerPayload.value.email = data.email;
    registerPayload.value.phone = data.phone;
    registerPayload.value.password = data.password;
    registerPayload.value.address = data.address;
    registerPayload.value.residentialAddress = data.residentialAddress;
    registerPayload.value.coordinates = data.location.coordinates
  }

  return { registerPayload, handleRegister, loading, setSignupPayload };
};
