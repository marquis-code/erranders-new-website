<template>
    <main>
        <div class="bg-[#034091]">
            <div class="relative isolate overflow-hidden py-[500px]">
                <img src="/marketplaceBg.svg" alt=""
                    class="absolute inset-0 -z-10 h-full w-full object-cover bg-[#034091]">
                <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                    </div>
                </div>
                <div class="absolute top-28 w-full z-50">
                    <div class="max-w-lg mx-auto mt-4 text-gray-500 relative z-50 px-6 lg:px-0 z-50" data-aos="flip-left">
                        <div class="w-full">
                            <input
                                class="py-4 rounded-full bg-[#E7E7E969] px-16 outline-none placeholder:text-gray-200 w-full"
                                placeholder="Search for products on Erranders...." />
                        </div>
                        <img src="@/assets/icons/search.svg" alt="" class="absolute left-10 lg:left-5 top-3 h-6 w-6" />
                    </div>
                    <div
                        class="flex justify-between items-center gap-x-10 lg:gap-x-10 pt-14 example overflow-x-auto px-6 lg:px-56">
                        <div class="flex justify-center items-center flex-col w-full"><img data-aos="flip-left"
                                src="@/assets/img/drinks.png" class="" alt="" />
                            <p class="pt-3 text-white text-sm lg:text-lg max-w-sm text-center flex justify-center items-center"
                                data-aos="flip-left">Berverages</p>
                        </div>
                        <div class="flex justify-center items-center flex-col w-full"><img data-aos="flip-left"
                                src="@/assets/img/drugs.png" alt="" />
                            <p class="pt-3 text-white text-sm lg:text-lg max-w-sm text-center flex justify-center items-center"
                                data-aos="flip-left">Pharmacy &
                                Cosmetics</p>
                        </div>
                        <div class="flex justify-center items-center flex-col w-full"><img data-aos="flip-left"
                                src="@/assets/img/cereal.png" alt="" />
                            <p class="pt-3 text-white text-sm lg:text-lg max-w-sm text-center flex justify-center items-center"
                                data-aos="flip-left">Breakfast & Cereal</p>
                        </div>
                        <div class="flex justify-center items-center flex-col w-full"><img data-aos="flip-left"
                                src="@/assets/img/vegetable.png" alt="" />
                            <p class="pt-3 text-white text-sm lg:text-lg max-w-sm text-center flex justify-center items-center"
                                data-aos="flip-left">Vegetable &
                                Fruits</p>
                        </div>
                        <div class="flex justify-center items-center flex-col w-full"><img data-aos="flip-left"
                                src="@/assets/img/food.png" alt="" />
                            <p class="pt-3 text-white text-sm lg:text-lg max-w-sm text-center flex justify-center items-center"
                                data-aos="flip-left">Food</p>
                        </div>
                        <div class="flex justify-center items-center flex-col w-full"><img data-aos="flip-left"
                                src="@/assets/img/delivery.png" alt="" />
                            <p class="pt-3 text-white text-sm lg:text-lg max-w-sm text-center flex justify-center items-center"
                                data-aos="flip-left">Package
                                Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MarketCommodities />
    </main>
</template>

<script setup lang="ts">
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>