<template>
  <div class="mt-8 space-y-16">
    <div class="mx-auto  px-4 sm:px-6 lg:px-8">
      <h2 class="text-lg font-medium leading-6 text-gray-900">Overview</h2>
      <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Card -->
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <!-- <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg> -->
                <img src="@/assets/icons/wallet-dashboard.svg" alt="wallet icon" />
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="truncate text-sm font-medium text-gray-500">Wallet balance</dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">NGN 0.00</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3">
            <div class="text-sm">
              <NuxtLink to="/dashboard/vendor/wallet" class="font-medium text-cyan-700 hover:text-cyan-900">View all</NuxtLink>
            </div>
          </div>
        </div>
        <div v-if="!loadingProducts" class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img src="@/assets/icons/product-dashboard.svg" alt="products icon" />
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="truncate text-sm font-medium text-gray-500">Total Products</dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">{{products.length ?? 0}}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3">
            <div class="text-sm">
              <NuxtLink to="/dashboard/vendor/products" class="font-medium text-cyan-700 hover:text-cyan-900">View all</NuxtLink>
            </div>
          </div>
        </div>
        <div v-else class="h-32 bg-slate-300 rounded w-full mt-6 animate-pulse"></div>
        <div v-if="!loadingOrders" class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img src="@/assets/icons/order-transport.svg" alt="order icon" />
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="truncate text-sm font-medium text-gray-500">Total Orders</dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">{{ordersList.length ?? 0}}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3">
            <div class="text-sm">
              <NuxtLink to="/dashboard/vendor/orders" class="font-medium text-cyan-700 hover:text-cyan-900">View all</NuxtLink>
            </div>
          </div>
        </div>
        <div v-else class="h-32 bg-slate-300 rounded w-full mt-6 animate-pulse"></div>

        <!-- More items... -->
      </div>
    </div>
    <!-- <ChartsActivitiesChart /> -->

    <section class="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-x-10 gap-y-10 lg:gap-y-0  px-4 sm:px-6 lg:px-8">
      <section class="border rounded-lg shadow border-gray-100">
        <h2 class="mx-auto mt-8  px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">Recent
          activity</h2>

        <!-- Activity list (smallest breakpoint only) -->
        <div class="shadow sm:hidden">
          <ul  role="list" class="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
            <li v-for="itm in transactions" :key="itm">
              <a href="#" class="block bg-white px-4 py-4 hover:bg-gray-50">
                <span class="flex items-center space-x-4">
                  <span class="flex flex-1 space-x-2 truncate">
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                      aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                        clip-rule="evenodd" />
                    </svg>
                    <span class="flex flex-col truncate text-sm text-gray-500">
                      <span class="truncate">{{ itm.name }}</span>
                      <span><span class="font-medium text-gray-900">$ {{ itm.price }}</span> USD</span>
                      <time datetime="2020-07-11">July 11, 2024</time>
                    </span>
                  </span>
                  <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
          <nav class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
            aria-label="Pagination">
            <div class="flex flex-1 justify-between">
              <a href="#"
                class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Previous</a>
              <a href="#"
                class="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Next</a>
            </div>
          </nav>
        </div>
        <!-- Activity table (small breakpoint and up) -->
        <div v-if="transactions.length" class="hidden sm:block ">
          <div class="mx-auto">
            <div class="mt-2 flex flex-col">
              <div class="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th class="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900" scope="col">
                        Transaction
                      </th>
                      <th class="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900" scope="col">Amount
                      </th>
                      <th class="hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"
                        scope="col">Status</th>
                      <th class="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900" scope="col">Date
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr class="bg-white" v-for="itm in transactions" :key="itm">
                      <td class="w-full max-w-0 whitespace-nowrap px-6 py-6 text-sm text-gray-900">
                        <div class="flex">
                          <a href="#" class="group inline-flex space-x-2 truncate text-sm">
                            <svg class="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd"
                                d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                                clip-rule="evenodd" />
                            </svg>
                            <p class="truncate text-gray-500 group-hover:text-gray-900">{{ itm.name }}</p>
                          </a>
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-6 py-6 text-right text-sm text-gray-500">
                        <span class="font-medium text-gray-900">NGN {{ itm.price }}</span>
                        USD
                      </td>
                      <td class="hidden whitespace-nowrap px-6 py-6 text-sm text-gray-500 md:block">
                        <span
                          class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 capitalize">success</span>
                      </td>
                      <td class="whitespace-nowrap px-6 py-6 text-right text-sm text-gray-500">
                        <time datetime="2020-07-11">July 11, 2020</time>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!-- Pagination -->
                <nav class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                  aria-label="Pagination">
                  <div class="hidden sm:block">
                    <p class="text-sm text-gray-700">
                      Showing
                      <span class="font-medium">1</span>
                      to
                      <span class="font-medium">10</span>
                      of
                      <span class="font-medium">20</span>
                      results
                    </p>
                  </div>
                  <div class="flex flex-1 justify-between gap-x-3 sm:justify-end">
                    <a href="#"
                      class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400">Previous</a>
                    <a href="#"
                      class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400">Next</a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center border-t py-6 mt-6" v-else>
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          <h3 class="mt-2 text-sm font-semibold text-gray-900">No transactions available</h3>
          <p class="mt-1 text-sm text-gray-500">Get started by creating a new transaction.</p>
        </div>

      </section>
      <ChartsActivitiesChart class="border border-gray-100">
        <template v-slot:title>
          <div class="md:flex space-y-4 md:space-y-0 justify-between items-center">
            <p class="text-[#777e7c] text-sm md:text-lg font-medium">
              Orders Analytics
            </p>
            <div class="flex items-center gap-x-3">
              <select class="text-sm outline-none font-medium bg-gray-100 rounded-md px-2.5 py-2 w-full">
                <option>online</option>
                <option>offline</option>
              </select>
              <select class="text-sm outline-none font-medium bg-gray-100 rounded-md px-2.5 py-2 w-full">
                <option>Daily</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>
        </template>
      </ChartsActivitiesChart>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useFetchOrderList } from '@/composables/order/fetch';
  import { useFetchProductsList } from '@/composables/products/fetch';
  const { fetchProducts, products, loading: loadingProducts } = useFetchProductsList();
  const { fetchOrders, ordersList, loading: loadingOrders } = useFetchOrderList();
  fetchOrders();
  fetchProducts();
definePageMeta({
  layout: 'customer-dashboard',
  middleware: 'auth'
})

const transactions = ref([
  // {
  //   name: 'Payment for Budville Banana bread',
  //   price: '1,000'
  // },
  // {
  //   name: 'Payment for Supalive Zobo',
  //   price: '1,000'
  // },
  // {
  //   name: 'Payment for Chijoke spaghetti',
  //   price: '1,000'
  // },
  // {
  //   name: 'Payment for Tandalicious smoothie',
  //   price: '1,000'
  // },
  // {
  //   name: 'Payment for YEM YEM chocolates',
  //   price: '1,000'
  // }
])
</script>
