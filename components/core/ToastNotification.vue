<!-- <template>
    <div>
      <div v-if="visible" aria-live="assertive" class="pointer-events-none z-50 fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
        <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
          <div class="pointer-events-auto w-full max-w-sm rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="p-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 pt-0.5">
                  <img class="h-10 w-10 rounded-full" src="@/assets/icons/order-transport.svg" alt="">
                </div>
                <div class="ml-3 w-0 flex-1">
                  <p class="text-sm font-medium text-gray-900">{{ order?.userName }}</p>
                  <p class="mt-1 text-sm text-gray-500">New order received.</p>
                  <div class="mt-4 flex">
                    <button @click="acceptOrder" type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Accept</button>
                    <button @click="declineOrder" type="button" class="ml-3 inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Decline</button>
                    <button @click="viewOrder" type="button" class="ml-3 inline-flex items-center rounded-md bg-gray-700 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm">View</button>
                  </div>
                </div>
                <div class="ml-4 flex flex-shrink-0">
                  <button @click="closeToast" type="button" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span class="sr-only">Close</span>
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CoreOrderModal  :order="order" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  
  interface Order {
    _id: string;
    userName: string;
    totalPrice: number;
    status: string;
    items: Array<{
      product: {
        _id: string;
        name: string;
      };
      quantity: number;
      price: number;
    }>;
  }
  
  const showOrderModal = ref(false)
  const props = defineProps<{ order: Order | null }>();
  const visible = ref(false);
  
  watch(() => props.order, (newOrder) => {
    if (newOrder) {
      visible.value = true;
      setTimeout(() => {
        visible.value = false;
      }, 10000); // Hide toast after 10 seconds
    }
  });
  
  function closeToast() {
    visible.value = false;
  }
  
  function acceptOrder() {
    // Logic to accept the order
    console.log('Order accepted');
  }
  
  function declineOrder() {
    // Logic to decline the order
    console.log('Order declined');
  }
  
  function viewOrder() {
    showOrderModal.value = true
    // Trigger the modal to show
    console.log('View order details');
  }
  </script>
   -->


   <template>
    <div>
      <div v-if="visible" aria-live="assertive" class="pointer-events-none z-50 fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
        <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
          <div class="pointer-events-auto w-full max-w-sm rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="p-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 pt-0.5">
                  <img class="h-10 w-10 rounded-full" src="@/assets/icons/order-transport.svg" alt="">
                </div>
                <div class="ml-3 w-0 flex-1">
                  <p class="text-sm font-medium text-gray-900">{{ order?.userName }}</p>
                  <p class="mt-1 text-sm text-gray-500">New order received.</p>
                  <div class="mt-4 flex">
                    <button @click="acceptOrder" type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Accept</button>
                    <button @click="declineOrder" type="button" class="ml-3 inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Decline</button>
                    <button @click="viewOrder" type="button" class="ml-3 inline-flex items-center rounded-md bg-gray-700 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm">View</button>
                  </div>
                </div>
                <div class="ml-4 flex flex-shrink-0">
                  <button @click="closeToast" type="button" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span class="sr-only">Close</span>
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CoreOrderModal :order="order" v-if="isModalVisible" @close="closeModal" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  interface Order {
    _id: string;
    userName: string;
    totalPrice: number;
    status: string;
    items: Array<{
      product: {
        _id: string;
        name: string;
      };
      quantity: number;
      price: number;
    }>;
  }
  
  const props = defineProps<{ order: Order | null }>();
  const visible = ref(false);
  const isModalVisible = ref(false);
  
  watch(() => props.order, (newOrder) => {
    if (newOrder) {
      visible.value = true;
      setTimeout(() => {
        visible.value = false;
      }, 10000); // Hide toast after 10 seconds
    }
  });
  
  function closeToast() {
    visible.value = false;
  }
  
  function acceptOrder() {
    // Logic to accept the order
    console.log('Order accepted');
  }
  
  function declineOrder() {
    // Logic to decline the order
    console.log('Order declined');
  }
  
  function viewOrder() {
    // Show the modal when "View" button is clicked
    isModalVisible.value = true;
  }
  
  function closeModal() {
    // Hide the modal
    isModalVisible.value = false;
  }
  </script>
  