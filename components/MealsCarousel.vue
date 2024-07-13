<template>
  <main>
    <section class="bg-white">
      <section class="container px-6 py-10 mx-auto space-y-8 pb-32">
        <div class="text-center">
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl" data-aos="flip-left">
            Special Meals of the day!
          </h1>
          <p class="max-w-lg mx-auto mt-4 text-[#011633] font-light" data-aos="flip-left">
            Check our specials of the day and get discounts on all our meals and swift delivery to what ever location
            within CMUL (College Of Medicine, Idi-araba).
          </p>
        </div>
        <!-- <div v-if="!loading && products.length" class="carousel-container overflow-hidden relative">
          <div class="carousel-track flex gap-x-5" :style="{ transform: `translateX(-${offset}px)` }">
            <div class="image-item rounded-b-lg flex-none w-full relative bg-[#E7FAEF] p-6 pb-44 rounded-lg"
              v-for="(product, index) in allProducts" :key="index" @click="handleItemClick(product)">
              <img :src="product.image" class="h-full w-full object-cover rounded-xl object-center" alt="">
              <div class="w-64 -mt-2 overflow-hidden md:w-64 absolute bottom-4 pb-10 ">
                <h3 class="py-2.5 font-medium pb-10 tracking-wide text-center text-base text-white">
                  {{ product.name }}
                </h3>
                <div>
                  <div class="flex justify-between">
                    <div class="space-y-2.5">
                      <h1 class="text-[#011633] font-bold text-lg">₦ {{ product.price }}</h1>
                      <div class="space-y-1">
                        <img src="@/assets/icons/rating-stars.svg" alt="rating" />
                        <p class="font-semibold text-sm">{{ product?.createdBy?.businessName || 'Nil' }}</p>
                      </div>
                    </div>
                    <div class="w-full">
                      <div class="w-full  flex justify-end items-end">
                        <button
                          class="px-4 py-2.5 bg-[#0BCA63] text-white font-semibold rounded-full text-xs flex items-center gap-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none"
                            stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="10" cy="20.5" r="1" />
                            <circle cx="18" cy="20.5" r="1" />
                            <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
                          </svg>
                          Add to cart</button>
                      </div>
                      <div class="w-full  flex justify-end items-end">
                        <button v-if="product.productType === 'pre-order'"
                          class="px-4 py-2.5 bg-[#0BCA63] text-white font-semibold rounded-full text-xs flex items-center gap-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none"
                            stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="10" cy="20.5" r="1" />
                            <circle cx="18" cy="20.5" r="1" />
                            <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
                          </svg>
                          Pre-Order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <div v-if="!loading && products.length"
          class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 carousel-container overflow-hidden relative">
          <div class="carousel-track flex gap-x-5" :style="{ transform: `translateX(-${offset}px)` }">
            <div v-for="(product, index) in allProducts" :key="index" @click="handleItemClick(product)">
              <div class="relative">
                <div class="relative h-72 w-full overflow-hidden rounded-lg">
                  <img :src="product.image"
                    alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
                    class="h-full w-full object-cover object-center">
                </div>
                <div class="relative mt-4">
                  <h3 class="text-sm font-medium text-gray-900">{{ product.name }}</h3>
                  <p class="mt-1 text-sm text-gray-500">{{ product?.createdBy?.businessName || 'Nil' }}</p>
                </div>
                <div class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div aria-hidden="true"
                    class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
                  <p class="relative text-lg font-semibold text-white">₦ {{ product.price }}</p>
                </div>
              </div>
              <div class="mt-6">
                <a href.prevent="#" @click="handleItemClick(product)" v-if="product.productType !== 'pre-order'"
                  class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">Add
                  to bag<span class="sr-only">, {{ product.name }}</span></a>
                  <a href.prevent="#" @click="handleItemClick(product)" v-else
                  class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">Pre Order
                  <span class="sr-only">, {{ product.name }}</span></a>
              </div>
            </div>
          </div>

          <!-- More products... -->
        </div>

        <div v-else-if="loading && !products.length" class="grid grid-cols-4 gap-6">
          <div v-for="item in 4" :key="item" class="h-60 bg-slate-400 rounded animate-pulse"></div>
        </div>
      </section>
    </section>
    <ModalsProductPreview @update:show="showPreview = false" :show="showPreview" :product="selectedProduct" />
  </main>
</template>

<script setup lang="ts">
import { useFetchProductsList } from '@/composables/products/carouselProducts'
import { useRouter } from 'vue-router'
const { fetchProducts, products, loading } = useFetchProductsList()
const selectedProduct = ref({}) as any
const showPreview = ref(false)
fetchProducts()

const offset = ref(0)
const itemWidth = ref(300)
const scrollSpeed = ref(1)
const interval = ref(null) as any

const allProducts = computed(() => {
  return [...products.value, ...products.value]
})

const startScrolling = () => {
  interval.value = window.setInterval(() => {
    if (offset.value >= itemWidth.value * products.value.length) {
      offset.value = 0; // Reset to start when end is reached
    } else {
      offset.value += scrollSpeed.value;
    }
  }, 20)
}

onMounted(() => {
  startScrolling()
})

onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value)
  }
})

const router = useRouter()

const handleItemClick = (item: any) => {
  selectedProduct.value = item
  showPreview.value = true
}
</script>

<style scoped>
.carousel-container {
  width: 100%;
  height: 600px;
  /* Adjust as needed */
}

.carousel-track {
  will-change: transform;
  min-width: max-content;
}

.image-item {
  width: 300px;
  /* Ensure this matches itemWidth in script */
  flex-shrink: 0;
}
</style>