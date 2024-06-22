import { axiosInstance } from './axios.config'

export const onboardingAuthApiFactory = {
  errander_register(data: any) {
    return axiosInstance.post('/auth/errander-register', data);
  },
  customer_register(data: any) {
    return axiosInstance.post('/auth/customer-register', data);
  },
  vendors_register(data: any) {
    return axiosInstance.post('/auth/vendors-register', data);
  },
  login(data: any) {
    return axiosInstance.post('/auth/login', data);
  },
  verify(data: any) {
    return axiosInstance.post('/auth/verify', data);
  }
};
