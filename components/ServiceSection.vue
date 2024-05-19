<template>
    <div class="overflow-hidden bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:ml-auto lg:pl-4 lg:pt-4">
                    <div class="lg:max-w-lg">
                        <p data-aos="flip-left" class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experience seamless
                            delivery errands with ease
                        </p>
                        <p data-aos="flip-left" class="mt-6 text-lg leading-snug text-[#011633] font-light">Lets run your errands to local
                            markets around,
                            so you can focus
                            on what matters. Currently we support errands to Mushin
                            Market Only.</p>
                        <dl data-aos="flip-left" class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                            <div class="relative space-y-6">
                                <dt data-aos="flip-left" class="inline font-light text-[#011D41] flex items-center gap-x-3" v-for="itm in services" :key="itm">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4"
                                            d="M22.9358 2.83325H11.0641C5.90748 2.83325 2.83331 5.90742 2.83331 11.0641V22.9216C2.83331 28.0924 5.90748 31.1666 11.0641 31.1666H22.9216C28.0783 31.1666 31.1525 28.0924 31.1525 22.9358V11.0641C31.1666 5.90742 28.0925 2.83325 22.9358 2.83325Z"
                                            fill="#0BCA63" fill-opacity="0.28" />
                                        <path
                                            d="M14.9884 22.0717C14.705 22.0717 14.4359 21.9583 14.2375 21.76L10.2284 17.7508C9.81752 17.34 9.81752 16.66 10.2284 16.2492C10.6392 15.8383 11.3192 15.8383 11.73 16.2492L14.9884 19.5075L22.27 12.2258C22.6809 11.815 23.3609 11.815 23.7717 12.2258C24.1825 12.6367 24.1825 13.3167 23.7717 13.7275L15.7392 21.76C15.5409 21.9583 15.2717 22.0717 14.9884 22.0717Z"
                                            fill="#0BCA63" />
                                    </svg>

                                    {{ itm }}
                                </dt>
                            </div>
                        </dl>
                    </div>
                    <div data-aos="flip-left" class="flex items-center gap-x-3 mt-16">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17 32.2293C8.59915 32.2293 1.77081 25.401 1.77081 17.0002C1.77081 8.59933 8.59915 1.771 17 1.771C25.4008 1.771 32.2291 8.59933 32.2291 17.0002C32.2291 25.401 25.4008 32.2293 17 32.2293ZM17 3.896C9.77498 3.896 3.89581 9.77516 3.89581 17.0002C3.89581 24.2252 9.77498 30.1043 17 30.1043C24.225 30.1043 30.1041 24.2252 30.1041 17.0002C30.1041 9.77516 24.225 3.896 17 3.896Z"
                                fill="#0AB659" />
                            <path
                                d="M15.215 23.0636C14.9459 23.0636 14.6767 22.9644 14.4642 22.7519C14.0534 22.3411 14.0534 21.6611 14.4642 21.2502L18.7142 17.0002L14.4642 12.7502C14.0534 12.3394 14.0534 11.6594 14.4642 11.2486C14.875 10.8377 15.555 10.8377 15.9659 11.2486L20.9667 16.2494C21.3775 16.6602 21.3775 17.3402 20.9667 17.7511L15.9659 22.7519C15.7534 22.9644 15.4842 23.0636 15.215 23.0636Z"
                                fill="#0AB659" />
                        </svg>
                        <p class="font-semibold border-b border-[#0AB659] text-[#0AB659]">24/7 customer support</p>

                    </div>
                </div>
                <div data-aos="flip-left" class="flex items-start justify-end lg:order-first bg-[#EDFBF3D6] p-6 flex justify-center items-center rounded-lg">
                    <img src="@/assets/img/service.png" alt="Product screenshot"
                        class="w-[576px] h-[792px] max-w-none  sm:w-[57rem]"
                        width="2432" height="1442">
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
const services = ref(['Hostel door delivery', 'Bank transfer', 'Card payment', 'Fresh food delivery', '24/7 customer support'])
</script>
