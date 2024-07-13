import Swal from "sweetalert2";
import { productApiFactory } from "@/apiFactory/product";
export const useCreateProduct = () => {
  const selectedProduct = ref(null);
  const showDropdown = ref(false);
  const loading = ref(false) as any;

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
  ]) as Record<string, any>
  
  const form = ref({
    name: "",
    description: "",
    price: "",
    currentInStock: "",
    category: "",
    image: null,
    imageUrl: "",
    file: ''
  }) as Record<string, any>

  const errors = ref({
    name: "",
    description: "",
    price: "",
    currentInStock: "",
    category: "",
  }) as Record<string, any>

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
      file: ''
    };
    errors.value = {
      name: "",
      description: "",
      price: "",
      currentInStock: "",
      category: "",
    };
  };

  const createProduct = async () => {
    if (!validateForm()) return;
    try {
      loading.value = true;
      const formData = new FormData();
      formData.append("name", form.value.name);
      formData.append("description", form.value.description);
      formData.append("price", form.value.price);
      formData.append("currentInStock", form.value.currentInStock);
      formData.append("category", form.value.category);
      if (form.value.image) {
        formData.append("file", form.value.file);
      }

      const response = await productApiFactory.createProduct(formData);
      if(typeof response !== 'undefined'){
        console.log(response, 'res here')
        resetForm();
        useNuxtApp().$toast.success("Product was created successfully.", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
        console.log(response, 'res here');
        return response;
      }
    } catch (error) {
      console.log(error, 'err here');
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

  return { createProduct, resetForm, form, loading, errors, showDropdown, foodCategories, editProduct, selectedProduct };
};
