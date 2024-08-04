<template>
<div class="bg-white">
  <!-- Hero section -->
  <div class="relative bg-gray-900">
    <!-- Decorative image and overlay -->
    <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
      <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg" alt="" class="h-full w-full object-cover object-center">
    </div>
    <div aria-hidden="true" class="absolute inset-0 bg-gray-900 opacity-50"></div>

    <div class="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
      <h1 class="text-4xl font-bold tracking-tight text-white lg:text-6xl">Erranders Stores</h1>
      <p class="mt-4 text-xl text-white">The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.</p>
      <a href="#" class="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100">Shop New Arrivals</a>
    </div>
  </div>
  <main>
    <!-- Category section -->
    <section aria-labelledby="category-heading" class="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
      <div class="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <h2 id="category-heading" class="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
        <a href="#" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div class="mt-4 flow-root">
        <div class="-my-2">
          <div class="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div class="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              <a href="#" class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg" alt="" class="h-full w-full object-cover object-center">
                </span>
                <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                <span class="relative mt-auto text-center text-xl font-bold text-white">Vegetables</span>
              </a>
              <a href="#" class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg" alt="" class="h-full w-full object-cover object-center">
                </span>
                <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                <span class="relative mt-auto text-center text-xl font-bold text-white">Dairy</span>
              </a>
              <a href="#" class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg" alt="" class="h-full w-full object-cover object-center">
                </span>
                <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                <span class="relative mt-auto text-center text-xl font-bold text-white">Meat Fish</span>
              </a>
              <a href="#" class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg" alt="" class="h-full w-full object-cover object-center">
                </span>
                <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                <span class="relative mt-auto text-center text-xl font-bold text-white">Fruits</span>
              </a>
              <a href="#" class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg" alt="" class="h-full w-full object-cover object-center">
                </span>
                <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                <span class="relative mt-auto text-center text-xl font-bold text-white">Bakery</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 px-4 sm:hidden">
        <a href="#" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </section>


<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-xl font-bold text-gray-900">Customers also bought</h2>

   <div class=" w-full overflow-x-auto">
    <div class="mt-8 lg:grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 inline-flex space-x-8 lg:space-x-0">
      <div v-for="(item, index) in products" :key="index" class="inline-flex w-64 flex-col text-center lg:w-auto">
        <div class="relative">
          <div class="relative h-72 w-full overflow-hidden rounded-lg">
            <img :src="item.image" alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls." class="h-full w-full object-cover object-center">
          </div>
          <div class="relative mt-4">
            <h3 class="text-sm font-medium text-gray-900">{{item.name}}</h3>
            <p class="mt-1 text-sm text-gray-500 flex justify-center items-center">
              <span class="bg-black rounded-lg px-3 py-1 text-white text-xs">{{item.category}}</span>
            </p>
          </div>
          <div class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
            <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
            <p class="relative text-lg font-semibold text-white">{{formatPrice(item.price)}}</p>
          </div>
        </div>
        <div class="mt-6">
          <a href="#" class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">Add to bag<span class="sr-only">, Zip Tote Basket</span></a>
        </div>
      </div>

      <!-- More products... -->
    </div>
   </div>
  </div>
</div>



    <!-- Featured section -->
    <section aria-labelledby="comfort-heading" class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="relative overflow-hidden rounded-lg">
        <div class="absolute inset-0">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg" alt="" class="h-full w-full object-cover object-center">
        </div>
        <div class="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
          <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 id="comfort-heading" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple productivity</h2>
            <p class="mt-3 text-xl text-white">Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.</p>
            <a href="#" class="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Shop Focus</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer aria-labelledby="footer-heading" class="bg-gray-900">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div>
              <h3 class="text-sm font-medium text-white">Shop</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Bags</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Tees</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Objects</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Home Goods</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Accessories</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-medium text-white">Company</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Who we are</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Sustainability</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Press</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Careers</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Terms &amp; Conditions</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div>
              <h3 class="text-sm font-medium text-white">Account</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Manage Account</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Returns &amp; Exchanges</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Redeem a Gift Card</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-medium text-white">Connect</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Contact Us</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Facebook</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Instagram</a>
                </li>
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Pinterest</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-12 md:mt-16 xl:mt-0">
          <h3 class="text-sm font-medium text-white">Sign up for our newsletter</h3>
          <p class="mt-6 text-sm text-gray-300">The latest deals and savings, sent to your inbox weekly.</p>
          <form class="mt-2 flex sm:max-w-md">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" type="text" autocomplete="email" required class="w-full min-w-0 appearance-none rounded-md border border-white bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
            <div class="ml-4 flex-shrink-0">
              <button type="submit" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">Sign up</button>
            </div>
          </form>
        </div>
      </div>

      <div class="border-t border-gray-800 py-10">
        <p class="text-sm text-gray-400">Copyright &copy; 2021 Your Company, Inc.</p>
      </div>
    </div>
  </footer>
</div>

</template>

<script setup lang="ts">
import { useFetchProductsList } from '@/composables/products/fetch';
const { fetchProducts, products, loading } = useFetchProductsList();
fetchProducts();

const formatPrice = (price: any) => {
  if (price == null) return 'Nil';
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price);
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
