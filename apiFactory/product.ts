import { axiosInstance } from './axios.config'
export const productApiFactory = {
  fetchProducts() {
    return axiosInstance.get('/products');
  },
  createProduct(payload: any) {
    return axiosInstance.post(`/products`, payload);
  },
  fetchProductById(id: string | number) {
    return axiosInstance.get(`/products/${id}`);
  },
  updateProduct(payload: any, id: string | number) {
    return axiosInstance.put(`/products/${id}`, payload);
  },
  deleteProduct(id: string | number) {
    return axiosInstance.delete(`/products/${id}`);
  },
};
