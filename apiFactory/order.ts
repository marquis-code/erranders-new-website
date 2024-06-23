import { axiosInstance } from './axios.config'
export const orderApiFactory = {
  fetchOrders() {
    return axiosInstance.get('/orders');
  },
  createOrder(payload: any) {
    return axiosInstance.post(`/orders`, payload);
  },
  fetchOrderById(id: string | number) {
    return axiosInstance.get(`/orders/${id}`);
  },
  updateOrder(payload: any, id: string | number) {
    return axiosInstance.put(`/orders/${id}`, payload);
  },
  deleteOrder(id: string | number) {
    return axiosInstance.delete(`/orders/${id}`);
  },
};
