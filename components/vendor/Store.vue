 <template>
  <main>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 class="text-xl font-bold text-gray-900">{{ name }}</h2>

        <div v-if="products.length" class="mt-8 overflow-x-auto scrollbar-hide">
          <div class="flex space-x-6">
            <div v-for="(item, idx) in products" @click="handleItemClick(item)" :key="idx" class="flex-none w-72 cursor-pointer">
              <div class="relative">
                <div class="relative h-72 w-full overflow-hidden rounded-lg">
                  <img :src="item.image" alt="Product image" class="h-full w-full object-cover object-center">
                </div>
                <div class="relative mt-4">
                  <h3 class="text-sm font-medium text-gray-900">{{ item.name }}</h3>
                  <p class="mt-1 text-sm text-gray-500">{{item.description.length > 40 ? `${item.description.slice(0, 40)}...` : item.description }}</p>
                </div>
                <div class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
                  <p class="relative text-lg font-semibold text-white">{{ formatToNaira(item.price) }}</p>
                </div>
              </div>
              <div class="mt-6">
                <a @click.native="handleItemClick(item)" href.prevent="#" class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">Add to bag<span class="sr-only">, Zip Tote Basket</span></a>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-center border border-dotted py-6 space-y-4 rounded-lg border-gray-300">
          <div class="flex justify-center items-center">
            <img src="@/assets/icons/magnifier.svg" alt="" class="h-20 w-20" />
          </div>
          <h3 class="mt-2 text-sm font-semibold text-gray-900 uppercase">No products available</h3>
        </div>
      </div>
    </div>
    <ModalsProductPreview @update:show="showPreview = false" :show="showPreview" :product="selectedProduct" />
  </main>
</template>

<script setup lang="ts">
import { useCurrency } from '@/composables/core/useCurrency'
const selectedProduct = ref({}) as any
const { formatToNaira } = useCurrency()
const showPreview = ref(false)
defineProps({
  name: {
    type: String,
    default: ''
  },
  products: {
    type: Array,
    default: () => []
  }
})

const handleItemClick = (item: any) => {
  selectedProduct.value = item
  showPreview.value = true
}
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
