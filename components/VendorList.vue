<template>
    <main class="bg-white">
        <section class="max-w-7xl px-6 py-10  mx-auto space-y-8">
            <div class="text-center pt-10">
                <h1 data-aos="flip-left" class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                    Buy from Any Popular Vendor</h1>

                <div data-aos="flip-left" class="max-w-lg mx-auto mt-4 text-gray-500 relative">
                    <div class="w-full">
                        <input
                            class="py-4 rounded-full bg-[#E7E7E969] px-16 outline-none placeholder:text-gray-200 w-full"
                            placeholder="Search for a vendor..." />
                    </div>
                    <img src="@/assets/icons/search.svg" alt="" class="absolute left-5 top-3 h-6 w-6" />
                </div>
            </div>
            <div class="space-y-10">
                <div class="lg:flex">
                    <div data-aos="flip-left" class="flex items-center gap-x-2 pr-6">
                        <p class="text-[#011633] font-semibold">Filter</p>
                        <img src="@/assets/icons/filter.svg" alt="filter" />
                    </div>
                    <nav data-aos="flip-left" class="isolate hidden lg:flex lg:w-10/12 mx-auto" aria-label="Tabs">
                        <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
                        <a href.prevent="#" @click="setActiveVendor('mama_chidera')" :class="[activeVendor === 'mama_chidera' ? 'bg-gray-100' : 'bg-white']"
                            class="text-gray-900 cursor-pointer rounded-l-lg group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
                            aria-current="page">
                            <span>Mama Chidera</span>
                            <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                        </a>
                        <a href.prevent="#" @click="setActiveVendor('aunty_iyabo')" :class="[activeVendor === 'aunty_iyabo' ? 'bg-gray-100' : 'bg-white']"
                            class="text-gray-500 cursor-pointer hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden py-4 px-2 text-center text-sm font-medium hover:bg-gray-50 focus:z-10">
                            <span>Aunty Iyabo</span>
                            <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                        </a>
                        <a href.prevent="#" @click="setActiveVendor('just_spices')" :class="[activeVendor === 'just_spices' ? 'bg-gray-100' : 'bg-white']"
                            class="text-gray-500 cursor-pointer hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden py-4 px-2 text-center text-sm font-medium hover:bg-gray-50 focus:z-10">
                            <span>Just Spices</span>
                            <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                        </a>
                        <a href.prevent="#" @click="setActiveVendor('tandalicious')" :class="[activeVendor === 'tandalicious' ? 'bg-gray-100' : 'bg-white']"
                            class="text-gray-500 cursor-pointer hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden py-4 px-2 text-center text-sm font-medium hover:bg-gray-50 focus:z-10">
                            <span>Tandalicious</span>
                            <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                        </a>
                        <a href.prevent="#" @click="setActiveVendor('dapos_pancakes')" :class="[activeVendor === 'dapos_pancakes' ? 'bg-gray-100' : 'bg-white']"
                            class="text-gray-500 cursor-pointer hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden py-4 px-2 text-center text-sm font-medium hover:bg-gray-50 focus:z-10">
                            <span>Dapos Pancake</span>
                            <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                        </a>
                        <a href.prevent="#" @click="setActiveVendor('iya_tinu')" :class="[activeVendor === 'iya_tinu' ? 'bg-gray-100' : 'bg-white']"
                            class="text-gray-500 cursor-pointer hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden py-4 px-2 text-center text-sm font-medium hover:bg-gray-50 focus:z-10">
                            <span>Iya Tinu</span>
                            <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                        </a>
                    </nav>
                </div>
                <VendorStore :name="activeVendor" :products="[]" />
            </div>
            <div data-aos="flip-left" class="flex justify-center items-center pt-10">
                <button @click="router.push('/marketplace')" class="text-white font-medium text-sm px-6 py-4 rounded-full bg-[#0BCA63]">View the market
                    place</button>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
const router = useRouter()
const activeVendor = ref('mama_chidera') as any

const setActiveVendor = (vendor: string) => {
    activeVendor.value = vendor
}
</script>