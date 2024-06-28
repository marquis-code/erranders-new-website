import Swal from "sweetalert2";
import { productApiFactory } from "@/apiFactory/product";
export const useUpdateProduct = () => {
  const selectedProduct = ref(null);
  const showDropdown = ref(false);
  const loading = ref(false) as any;

  const foodCategories = ref([
    'Vegetables',
    'Fruits',
    'Grains',
    'Proteins',
    'Dairy',
  ]);
  
  const form = ref({
    name: "",
    description: "",
    price: "",
    estimatedPrice: "",
    category: "",
    image: null,
    imageUrl: "",
  });

  const errors = ref({
    name: "",
    description: "",
    price: "",
    estimatedPrice: "",
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
    errors.value.estimatedPrice =
      form.value.estimatedPrice && !isNaN(Number(form.value.estimatedPrice))
        ? ""
        : "Valid estimated price is required";
    errors.value.category = form.value.category
      ? ""
      : "Product category is required";

    return (
      !errors.value.name &&
      !errors.value.description &&
      !errors.value.price &&
      !errors.value.estimatedPrice &&
      !errors.value.category
    );
  };

  const resetForm = () => {
    form.value = {
      name: "",
      description: "",
      price: "",
      estimatedPrice: "",
      category: "",
      image: null,
      imageUrl: "",
    };
    errors.value = {
      name: "",
      description: "",
      price: "",
      estimatedPrice: "",
      category: "",
    };
  };

  const createProduct = async () => {
    if (!validateForm()) return;
    try {
      loading.value = true;
      const response = await productApiFactory.createProduct(form.value);
      resetForm();
      useNuxtApp().$toast.success("Product was created successfully..", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
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

  const editProduct = (product: any) => {
    selectedProduct.value = product;
    form.value = { ...product, imageUrl: product.image || '' };
    showDropdown.value = true;
  };

  return { createProduct, resetForm, form, loading,   errors,
    showDropdown, foodCategories, editProduct };
};
