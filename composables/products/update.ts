import Swal from "sweetalert2";
import { productApiFactory } from "@/apiFactory/product";
import { ref } from 'vue';
import { useNuxtApp } from '#app';
import { useLogin } from '@/composables/auth/login'
import { useFetchProductsList } from '@/composables/products/fetch'

export const useUpdateProduct = () => {
  const selectedProduct = ref(null);
  const selectedProductId = ref('') as any;
  const showDropdown = ref(false);
  const loading = ref(false);
  const { fetchProducts } = useFetchProductsList()
  // const { user } = useLogin()

  const foodCategories = ref([
    "desktops",
    "computer accessories",
    "laptops",
    "laptop parts",
    "cctv",
    "printers and scanners",
    "networking and wifi",
    "gaming",
    "snacks",
    "groceries",
    "storage and memory",
    "smartphones",
    "tablets",
    "smartwatches",
    "home appliances",
    "kitchen appliances",
    "personal care",
    "beauty products",
    "clothing",
    "shoes",
    "books",
    "toys",
    "sports equipment",
    "office supplies",
    "pet supplies",
    "automotive parts",
    "musical instruments",
    "furniture",
    "garden tools",
    "health and wellness",
  ]);

  const form = ref({
    name: "",
    description: "",
    price: "",
    currentInStock: "",
    category: "",
    image: null,
    imageUrl: "",
  });

  const errors = ref({
    name: "",
    description: "",
    price: "",
    currentInStock: "",
    category: "",
  });

  const validateForm = () => {
    errors.value.name = form.value.name ? "" : "Product name is required";
    errors.value.description = form.value.description
      ? ""
      : "Product description is required";
    errors.value.price =
      form.value.price && !isNaN(Number(form.value.price))
        ? ""
        : "Valid product price is required";
    errors.value.currentInStock =
      form.value.currentInStock && !isNaN(Number(form.value.currentInStock))
        ? ""
        : "Valid estimated price is required";
    errors.value.category = form.value.category
      ? ""
      : "Product category is required";

    return (
      !errors.value.name &&
      !errors.value.description &&
      !errors.value.price &&
      !errors.value.currentInStock &&
      !errors.value.category
    );
  };

  const resetForm = () => {
    form.value = {
      name: "",
      description: "",
      price: "",
      currentInStock: "",
      category: "",
      image: null,
      imageUrl: "",
    };
    errors.value = {
      name: "",
      description: "",
      price: "",
      currentInStock: "",
      category: "",
    };
  };

  const updateProduct = async () => {
    if (!validateForm()) return;
    try {
      loading.value = true;
      const response = await productApiFactory.updateProduct(form.value, selectedProductId.value);
      resetForm();
      useNuxtApp().$toast.success("Product was successfully updated.", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      // Fetch updated product list
      await fetchProducts(); // Add this line to refresh the product list
      return response;
    } catch (error) {
      useNuxtApp().$toast.error("Something went wrong!", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      loading.value = false;
    }
  };

  const setEditProduct = (product: any) => {
    selectedProduct.value = product;
    selectedProductId.value = product._id;
    form.value = { ...product, imageUrl: product.image || '' };
    showDropdown.value = true;
  };
  
  return {
    updateProduct,
    resetForm,
    form,
    loading,
    errors,
    showDropdown,
    foodCategories,
    setEditProduct,
  };
};
