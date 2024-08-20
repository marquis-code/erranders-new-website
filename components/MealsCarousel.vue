<template>
  <main>
    <section class="bg-white">
      <section class="container px-6 mx-auto space-y-8 pb-16">
        <div class="text-center">
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl" data-aos="flip-left">
            Special Meals of the day!
          </h1>
          <p class="max-w-lg mx-auto mt-4 text-[#011633] font-light" data-aos="flip-left">
            Check our specials of the day and get discounts on all our meals and swift delivery to what ever location
            within CMUL (College Of Medicine, Idi-araba).
          </p>
        </div>

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
                  <p class="relative text-lg font-semibold text-white">{{ formatToNaira(product.price) }}</p>
                </div>
              </div>
              <div class="mt-6">
                <a href.prevent="#" @click="handleItemClick(product)" v-if="product.productType !== 'pre-order'"
                  class="relative flex items-center justify-center cursor-pointer rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">Add
                  to bag<span class="sr-only">, {{ product.name }}</span></a>
                  <a href.prevent="#" @click="handleItemClick(product)" v-else
                  class="relative flex items-center justify-center cursor-pointer rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">Pre Order
                  <span class="sr-only">, {{ product.name }}</span></a>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="loading && !products.length" class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="item in 4" :key="item" class="h-60 bg-slate-400 rounded animate-pulse"></div>
        </div>
      </section>
    </section>
    <ModalsProductPreview @update:show="showPreview = false" :show="showPreview" :product="selectedProduct" />
  </main>
</template>

<script setup lang="ts">
import { useCurrency } from '@/composables/core/useCurrency'
const { formatToNaira } = useCurrency()
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
  height: 500px;
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