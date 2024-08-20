import { axiosInstance } from './axios.config'
export const erranderApiFactory = {
  fetchErranderOrders(id: string | number) {
    return axiosInstance.get(`orders/errander/${id}/orders`);
  }
};
