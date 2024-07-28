import Swal from "sweetalert2";
import { useFetchProductsList } from '@/composables/products/fetch';
import { productApiFactory } from "@/apiFactory/product";
const { fetchProducts } = useFetchProductsList();
export const useDeleteProduct = () => {
    const loading = ref(false)
    const deleteProduct = (productId) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
          preConfirm: async () => {
            try {
                loading.value = true;
                const response = await productApiFactory.deleteProduct(productId)
                Swal.fire("Deleted!", "Product has been deleted.", "success");
                fetchProducts(); // Refresh the products list
                return response;
              } catch (error) {
                useNuxtApp().$toast.error("Something went wrong!", {
                  autoClose: 5000,
                  dangerouslyHTMLString: true,
                });
              } finally {
                loading.value = false;
              }
          }
        }).then(() => {
          Swal.fire("Cancelled", "Action was cancelled", "info");
        })
      };

      return { deleteProduct, loading }
}