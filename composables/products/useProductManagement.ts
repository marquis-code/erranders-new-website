import { ref, computed } from 'vue';
import Swal from "sweetalert2";
const foodCategories = ref([
  'Vegetables',
  'Fruits',
  'Grains',
  'Proteins',
  'Dairy',
]);

const products = ref([
  // Dummy product data
  { id: 1, name: 'Apple', description: 'Fresh red apples', price: 1.5, estimatedPrice: 1.2, category: 'Fruits', image: null },
  { id: 2, name: 'Carrot', description: 'Organic carrots', price: 0.8, estimatedPrice: 0.7, category: 'Vegetables', image: null },
]);

export const useProductManagement = () => {
  const selectedProduct = ref(null);
  const showDropdown = ref(false);
  const form = ref({
    name: '',
    description: '',
    price: '',
    estimatedPrice: '',
    category: '',
    image: null,
    imageUrl: '',
  });
  const errors = ref({
    name: '',
    description: '',
    price: '',
    estimatedPrice: '',
    category: '',
  });

  const validateForm = () => {
    errors.value.name = form.value.name ? '' : 'Product name is required';
    errors.value.description = form.value.description ? '' : 'Product description is required';
    errors.value.price = form.value.price && !isNaN(Number(form.value.price)) ? '' : 'Valid product price is required';
    errors.value.estimatedPrice = form.value.estimatedPrice && !isNaN(Number(form.value.estimatedPrice)) ? '' : 'Valid estimated price is required';
    errors.value.category = form.value.category ? '' : 'Product category is required';

    return !errors.value.name && !errors.value.description && !errors.value.price && !errors.value.estimatedPrice && !errors.value.category;
  };

  const createProduct = () => {
    if (!validateForm()) return;

    const newProduct = { ...form.value, id: products.value.length + 1 };
    products.value.push(newProduct);
    resetForm();
    useNuxtApp().$toast.success("Product was created successfully..", {
      autoClose: 5000,
      dangerouslyHTMLString: true,
    });
  };

  const editProduct = (product) => {
    selectedProduct.value = product;
    form.value = { ...product, imageUrl: product.image || '' };
    showDropdown.value = true;
  };

  const updateProduct = () => {
    if (!validateForm()) return;

    const index = products.value.findIndex(p => p.id === selectedProduct.value.id);
    if (index !== -1) {
      products.value[index] = { ...form.value, id: selectedProduct.value.id };
      resetForm();
      selectedProduct.value = null;
      showDropdown.value = false;
    }
  };

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
        const index = products.value.findIndex(p => p.id === productId);
        if (index!== -1) {
          products.value.splice(index, 1);
        }
        Swal.fire("Deleted!", "Product has been deleted.", "success");
        return true;
      }
    }).then(() => {
      Swal.fire("Cancelled", "Action was cancelled", "info");
    })
    
    // .then((result) => {
    //   if (result.value) {
    //     localStorage.clear();
    //     runtimeData.user.value = null;
    //     location.href = "/login";
    //   } else {
    //     Swal.fire("Cancelled", "Action was cancelled", "info");
    //   }
    // });
    // products.value = products.value.filter(p => p.id !== productId);
  };

  const resetForm = () => {
    form.value = { name: '', description: '', price: '', estimatedPrice: '', category: '', image: null, imageUrl: '' };
    errors.value = { name: '', description: '', price: '', estimatedPrice: '', category: '' };
  };

  return {
    foodCategories,
    products,
    form,
    errors,
    showDropdown,
    createProduct,
    editProduct,
    updateProduct,
    deleteProduct,
    resetForm,
  };
};
