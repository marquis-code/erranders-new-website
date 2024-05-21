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
        <div class="carousel-container overflow-hidden relative">
          <div class="carousel-track flex gap-x-5" :style="{ transform: `translateX(-${offset}px)` }">
            <div class="image-item rounded-b-lg flex-none w-full relative bg-[#E7FAEF] p-6 pb-44 rounded-lg"
              v-for="(image, index) in allImages" :key="index" @click="handleItemClick(image)">
              <img :src="image.imgUrl" class="h-full w-full object-cover rounded-xl object-center" alt="">
              <div class="w-64 -mt-2 overflow-hidden md:w-64 absolute bottom-4 pb-10 ">
                <h3 class="py-2.5 font-medium pb-10 tracking-wide text-center text-base text-white">
                  {{ image.name }}
                </h3>
                <div>
                  <div class="flex justify-between">
                    <div class="space-y-2.5">
                      <h1 class="text-[#011633] font-bold text-lg">₦ {{ image.price }}</h1>
                      <div class="space-y-1">
                        <img src="@/assets/icons/rating-stars.svg" alt="rating" />
                        <p class="font-light text-sm"><span class="text-[#000000] font-semibold text-xs">2.5k</span>
                          Students</p>
                      </div>
                    </div>
                    <div>
                      <button class="px-4 py-2.5 bg-[#0BCA63] text-white font-semibold rounded-full text-xs">Add to
                        cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <ModalsProductPreview :show="showPreview" :product="selectedProduct" />
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import meal1 from '@/assets/img/meal1.png'
import meal2 from '@/assets/img/meal2.png'
import meal3 from '@/assets/img/meal3.png'
const selectedProduct = ref({}) as any
const showPreview = ref(false)
const images = ref([
  {
    imgUrl: meal1,
    name: 'Sausage',
    description: '',
    rating: 3,
    testimonials: [
      {
        name: 'Hector Gibbons',
        message: `Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.`,
        rating: 4,
        date: 'July 12, 2021',
        avatar: meal1
      }
    ],
    sizeList: ['S','MD','L','XL','XXL'],
    quantity: 30,
    price: "5000"
  },
  {
    imgUrl: meal2,
    name: 'Burger sauce',
    description: '',
    rating: 3,
    testimonials: [
      {
        name: 'Hector Gibbons',
        message: `Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.`,
        rating: 4,
        date: 'July 12, 2021',
        avatar: meal1
      }
    ],
    sizeList: ['S', 'MD', 'L', 'XL', 'XXL'],
    quantity: 30,
    price: '3000',
  },
  {
    imgUrl: meal3,
    name: 'Chicken Suya',
    description: '',
    rating: 3,
    testimonials: [
      {
        name: 'Hector Gibbons',
        message: `Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.`,
        rating: 4,
        date: 'July 12, 2021',
        avatar: meal1
      }
    ],
    sizeList: ['S', 'MD', 'L', 'XL', 'XXL'],
    quantity: 30,
    price: '2000',
  }
])

const offset = ref(0)
const itemWidth = ref(300)
const scrollSpeed = ref(1)
const interval = ref(null) as any

const allImages = computed(() => {
  return [...images.value, ...images.value]
})

const startScrolling = () => {
  interval.value = window.setInterval(() => {
    if (offset.value >= itemWidth.value * images.value.length) {
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
  height: 400px;
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