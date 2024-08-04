import { axiosInstance } from './axios.config'
export const usersApiFactory = {
  fetchVendors() {
    return axiosInstance.get('/users/vendors');
  },
};
