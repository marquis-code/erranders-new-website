import { orderApiFactory } from "@/apiFactory/order";
import { ref } from "vue";

const orderObj = ref({
  items: [],
  userId: "",
  location: {
    type: "Point",
    coordinates: [],
  },
  totalPrice: "",
}) as Record<string, any>;

const loading = ref(false);

export const useCreateOrder = () => {
  const createOrder = async () => {
    try {
      loading.value = true;
      const response = await orderApiFactory.createOrder(orderObj.value);
      if (typeof response !== "undefined") {
        console.log(response, "Order response");
        useNuxtApp().$toast.success("Order was created successfully.", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
        return response;
      }
    } catch (err) {
      console.error(err, "Order error");
      useNuxtApp().$toast.error("Something went wrong!", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      loading.value = false;
    }
  };

  const setOrderObj = (data: any) => {
    orderObj.value.items = data.cartList.map((item: any) => ({
      product: item.id,
      quantity: item.count,
      vendorId: item.createdBy._id,
      price: item.price,
    
    }));
    orderObj.value.userId = data.userId;
    orderObj.value.location = data.location;
    orderObj.value.totalPrice = data.totalPrice;
  };

  const fetchCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve([position.coords.latitude, position.coords.longitude]);
          },
          (error) => {
            console.error("Error getting location:", error);
            useNuxtApp().$toast.error("Unable to retrieve location!", {
              autoClose: 5000,
              dangerouslyHTMLString: true,
            });
            reject(error);
          }
        );
      } else {
        const error = "Geolocation is not supported by this browser.";
        console.error(error);
        useNuxtApp().$toast.error(error, {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
        reject(error);
      }
    });
  };

  return {
    createOrder,
    loading,
    orderObj,
    setOrderObj,
    fetchCurrentLocation,
  };
};
