import { axiosInstance } from './axios.config'
export const categoriesApiFactory = {
  fetchCategories() {
    return axiosInstance.get('/categories');
  },
  createCategories(payload: any) {
    return axiosInstance.post(`/categories`, payload);
  },
  fetchCategoriesById(id: string | number) {
    return axiosInstance.get(`/categories/${id}`);
  },
  updateCategories(payload: any, id: string | number) {
    return axiosInstance.put(`/categories/${id}`, payload);
  },
  deleteCategories(id: string | number) {
    return axiosInstance.delete(`/categories/${id}`);
  },
};
