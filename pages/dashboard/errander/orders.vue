<template>
    <main>
      <div class="mt-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <h2 class="text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">Recent activity</h2>
        </div>
        <div class="mt-6 overflow-hidden border-t border-gray-100">
          <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div v-if="!loading && ordersList.length" class="mx-auto">
              <table class="w-full text-left">
                <thead class="sr-only">
                  <tr>
                    <th>Amount</th>
                    <th class="hidden sm:table-cell">Client</th>
                    <th>Items</th>
                    <th>More details</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="groupedOrders.today.length">
                    <tr class="text-sm leading-6 text-gray-900">
                      <th scope="colgroup" colspan="4" class="relative isolate py-2 font-semibold">
                        <time datetime="2023-03-22">Today</time>
                        <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                        <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                      </th>
                    </tr>
                    <tr v-for="order in groupedOrders.today" :key="order._id">
                      <td class="relative py-5 pr-6">
                        <div class="flex gap-x-6">
                          <div class="flex-auto">
                            <div class="flex items-start gap-x-3">
                              <div class="text-sm font-medium leading-6 text-gray-900">{{ formatPrice(order.totalPrice) }}</div>
                              <div :class="`rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset ${statusColors[order.status]}`">
                                {{ order.status }}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                        <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                      </td>
                      <td class="hidden py-5 pr-6 sm:table-cell">
                        <div class="text-sm leading-6 text-gray-900">{{ order.user.name }}</div>
                        <div class="mt-1 text-xs leading-5 text-gray-500">{{ order.user.email }}</div>
                      </td>
                      <td class="py-5 pr-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div v-for="item in order.items" :key="item._id" class="mb-2 border rounded-lg border-gray-100 p-2">
                                <div class="text-xs leading-6 text-gray-900">{{ item.product.name }}</div>
                                <div class="mt-1 text-xs leading-5 text-gray-500">Quantity: {{ item.quantity }}</div>
                              </div>
                        </div>
                      </td>
                      <td class="py-5 text-right">
                        <div class="flex justify-end">
                          <a href="#" class="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #{{ order._id }}, {{ order.user.name }}</span></a>
                        </div>
                        <div class="mt-1 text-xs leading-5 text-gray-500">Invoice <span class="text-gray-900">#{{ order._id }}</span></div>
                      </td>
                    </tr>
                  </template>
                  <template v-if="groupedOrders.yesterday.length">
                    <tr class="text-sm leading-6 text-gray-900">
                      <th scope="colgroup" colspan="4" class="relative isolate py-2 font-semibold">
                        <time datetime="2023-03-21">Yesterday</time>
                        <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                        <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                      </th>
                    </tr>
                    <tr v-for="order in groupedOrders.yesterday" :key="order._id">
                      <td class="relative py-5 pr-6">
                        <div class="flex gap-x-6">
                          <div class="flex-auto">
                            <div class="flex items-start gap-x-3">
                              <div class="text-sm font-medium leading-6 text-gray-900">{{ formatPrice(order.totalPrice) }}</div>
                              <div :class="`rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset ${statusColors[order.status]}`">
                                {{ order.status }}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                        <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                      </td>
                      <td class="hidden py-5 pr-6 sm:table-cell">
                        <div class="text-sm leading-6 text-gray-900">{{ order.user.name }}</div>
                        <div class="mt-1 text-xs leading-5 text-gray-500">{{ order.user.email }}</div>
                      </td>
                      <td class="py-5 pr-6">
                        <div v-for="item in order.items" :key="item._id" class="mb-2">
                          <div class="text-sm leading-6 text-gray-900">{{ item.product.name }}</div>
                          <div class="mt-1 text-xs leading-5 text-gray-500">Quantity: {{ item.quantity }}</div>
                        </div>
                      </td>
                      <td class="py-5 text-right">
                        <div class="flex justify-end">
                          <a href="#" class="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #{{ order._id }}, {{ order.user.name }}</span></a>
                        </div>
                        <div class="mt-1 text-xs leading-5 text-gray-500">Invoice <span class="text-gray-900">#{{ order._id }}</span></div>
                      </td>
                    </tr>
                  </template>
                  <template v-if="groupedOrders.others.length">
                    <tr class="text-sm leading-6 text-gray-900">
                      <th scope="colgroup" colspan="4" class="relative isolate py-2 font-semibold">
                        <time datetime="2023-03-20">Others</time>
                        <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                        <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                      </th>
                    </tr>
                    <tr v-for="order in groupedOrders.others" :key="order._id">
                      <td class="relative py-5 pr-6">
                        <div class="flex gap-x-6">
                          <div class="flex-auto">
                            <div class="flex items-start gap-x-3">
                              <div class="text-sm font-medium leading-6 text-gray-900">{{ formatPrice(order.totalPrice) }}</div>
                              <div :class="`rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset ${statusColors[order.status]}`">
                                {{ order.status }}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                        <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                      </td>
                      <td class="hidden py-5 pr-6 sm:table-cell">
                        <div class="text-sm leading-6 text-gray-900">{{ order.user.name }}</div>
                        <div class="mt-1 text-xs leading-5 text-gray-500">{{ order.user.email }}</div>
                      </td>
                      <td class="py-5 pr-6">
                        <div v-for="item in order.items" :key="item._id" class="mb-2">
                          <div class="text-sm leading-6 text-gray-900">{{ item.product.name }}</div>
                          <div class="mt-1 text-xs leading-5 text-gray-500">Quantity: {{ item.quantity }}</div>
                        </div>
                      </td>
                      <td class="py-5 text-right">
                        <div class="flex justify-end">
                          <a href="#" class="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #{{ order._id }}, {{ order.user.name }}</span></a>
                        </div>
                        <div class="mt-1 text-xs leading-5 text-gray-500">Invoice <span class="text-gray-900">#{{ order._id }}</span></div>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
            <div v-else-if="loading" class="h-32 bg-slate-300 rounded w-full mt-6 animate-pulse"></div>
            <div class="text-center border rounded-xl py-6 mt-6" v-else>
              <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              <h3 class="mt-2 text-sm font-semibold text-gray-900">No Orders available</h3>
              <p class="mt-1 text-sm text-gray-500">Get started by creating a new order.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  import moment from 'moment';
  import { useFetchErranderOrderList } from '@/composables/order/fetch-errander-order';
  
  const { ordersList, loading } = useFetchErranderOrderList();
  
  const formatPrice = (price: any) => {
    if (price == null) return 'Nil';
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price);
  };
  
  const statusColors = {
    pending: 'bg-yellow-50 text-yellow-700 ring-yellow-600/20',
    'in-progress': 'bg-blue-50 text-blue-700 ring-blue-600/20',
    completed: 'bg-green-50 text-green-700 ring-green-600/20',
  };
  
  const groupedOrders = computed(() => groupOrdersByDate(ordersList.value));
  
  const groupOrdersByDate = (orders) => {
    const grouped = {
      today: [],
      yesterday: [],
      others: [],
    };
  
    orders.forEach(order => {
      const orderDate = moment(order.createdAt);
      if (orderDate.isSame(moment(), 'day')) {
        grouped.today.push(order);
      } else if (orderDate.isSame(moment().subtract(1, 'day'), 'day')) {
        grouped.yesterday.push(order);
      } else {
        grouped.others.push(order);
      }
    });
  
    return grouped;
  };
  
  definePageMeta({
    layout: 'customer-dashboard',
    middleware: 'auth'
  });
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>
  