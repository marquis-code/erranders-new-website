<!-- <template>
    <main class="bg-white">
        <section class="max-w-7xl px-6 py-10 mx-auto space-y-8">
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
            <div v-if="!loading && vendors.length" class="space-y-10">
                <div class="lg:flex">
                    <div data-aos="flip-left" class="flex items-center gap-x-2 pr-6">
                        <p class="text-[#011633] font-semibold">Filter</p>
                        <img src="@/assets/icons/filter.svg" alt="filter" />
                    </div>
                    <nav data-aos="flip-left" class="isolate hidden lg:flex lg:w-10/12 mx-auto overflow-x-auto scrollbar-hide" aria-label="Tabs">
                        <div class="flex flex-nowrap space-x-4">
                            <a v-for="vendor in vendors" :key="vendor._id" href.prevent="#" @click="setActiveVendor(vendor.name)" :class="[activeVendor === vendor.name ? 'bg-gray-100' : 'bg-white']"
                                class="text-gray-900 cursor-pointer rounded-lg group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
                                aria-current="page">
                                <span>{{ vendor.name || vendor.businessName }}</span>
                                <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                            </a>
                        </div>
                    </nav>
                </div>
                <VendorStore :name="activeVendor" :products="getActiveVendorProducts()" />
            </div>
            <div v-else-if="loading && !vendors.length" class="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="item in 4" :key="item" class="h-60 bg-slate-400 rounded animate-pulse"></div>
            </div> 
            <div data-aos="flip-left" class="flex justify-center items-center pt-10">
                <button @click="router.push('/marketplace')" class="text-white font-medium text-sm px-6 py-4 rounded-full bg-[#0BCA63]">View the market
                    place</button>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFetchVendorsList } from '@/composables/users/fetch-vendors';
const { vendors, loading } = useFetchVendorsList();
const router = useRouter();
const activeVendor = ref() as any;
const setActiveVendor = (vendor: any) => {
    console.log(vendor, 'here')
    activeVendor.value = vendor;
};
const getActiveVendorProducts = () => {
    const vendor = vendors.value.find((v: any) => v.name === activeVendor.value);
    return vendor ? vendor.products : [];
};
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style> -->

<template>
    <main class="bg-white">
        <section class="max-w-7xl px-6 py-10 mx-auto space-y-8">
            <div class="text-center pt-10">
                <h1 data-aos="flip-left" class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                    Buy from Any Popular Vendor
                </h1>
                <div data-aos="flip-left" class="max-w-lg mx-auto mt-4 text-gray-500 relative">
                    <div class="w-full">
                        <input
                            class="py-4 rounded-full bg-[#E7E7E969] px-16 outline-none placeholder:text-gray-200 w-full"
                            placeholder="Search for a vendor..." />
                    </div>
                    <img src="@/assets/icons/search.svg" alt="" class="absolute left-5 top-3 h-6 w-6" />
                </div>
            </div>
            <div v-if="!loading && vendors.length" class="">
                <div class="lg:flex">
                    <div data-aos="flip-left" class="flex items-center gap-x-2 pr-6">
                        <p class="text-[#011633] font-semibold">Filter</p>
                        <img src="@/assets/icons/filter.svg" alt="filter" />
                    </div>
                    <nav data-aos="flip-left" class="isolate hidden lg:flex lg:w-10/12 mx-auto" aria-label="Tabs">
                        <div class="flex flex-nowrap space-x-4 max-w-6xl overflow-x-auto scrollbar-hide border rounded-full bg-white">
                            <button v-for="vendor in vendors" :key="vendor._id" href.prevent="#" @click="setActiveVendor(vendors.businessName || vendor.name)" :class="[activeVendor === vendor.name ? 'bg-gray-100' : 'bg-white']"
                                class="text-gray-900 cursor-pointer rounded-full group relative py-3 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
                                aria-current="page">
                                <span>{{ vendor.name || vendor.businessName }}</span>
                                <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                            </button>
                        </div>
                    </nav>
                </div>
                <VendorStore :name="activeVendor" :products="getActiveVendorProducts()" />
            </div>
            <div v-else-if="loading && !vendors.length" class="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="item in 4" :key="item" class="h-60 bg-slate-400 rounded animate-pulse"></div>
            </div> 
            <div data-aos="flip-left" class="flex justify-center items-center pt-10">
                <button @click="router.push('/marketplace')" class="text-white font-medium text-sm px-6 py-4 rounded-full bg-[#0BCA63]">View the market
                    place</button>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { useFetchVendorsList } from '@/composables/users/fetch-vendors';
const { vendors, loading } = useFetchVendorsList();
const router = useRouter();
const activeVendor = ref<string | undefined>(undefined);

// Watch for changes in the vendor list and set the default active vendor
watch(vendors, (newVendors: any) => {
    if (newVendors.length > 0 && !activeVendor.value) {
        activeVendor.value = newVendors[0].businessName || newVendors[0].name;
    }
});

// Function to update the active vendor
const setActiveVendor = (vendor: string) => {
    activeVendor.value = vendor;
};

// Function to get products of the active vendor
const getActiveVendorProducts = () => {
    const vendor = vendors.value.find((v: any) => v.name === activeVendor.value);
    return vendor ? vendor.products : [];
};
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
