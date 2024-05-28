<template>
    <main>
        <section class="relative lg:min-h-full">
            <div class="h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
                <img src="@/assets/img/market3.png" alt="TODO" class="h-full w-full object-cover object-center">
            </div>

            <div class="overflow-y-auto min-h-screen">
                <div
                    class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-10 xl:gap-x-24">
                    <div class="lg:col-start-2">
                        <h1 class="text-sm font-medium text-indigo-600">Payment successful</h1>
                        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Thanks for ordering
                        </p>
                        <p class="mt-2 text-base text-gray-500 pb-4">We appreciate your order, we’re currently
                            processing
                            it.
                            So
                            hang tight and we’ll send your order very soon through your Errander!</p>

                        <div class="border-t-[0.6px] border-gray-200 py-6">
                            <h4 class="sr-only">Status</h4>
                            <!-- <p class="text-sm font-medium text-gray-900">Shipped on <time datetime="2021-03-23">{{
                                getTodayDate() }}</time></p> -->
                            <p class="text-sm font-medium text-gray-900 pb-3">Track your order</p>
                            <!-- <div class="mt-6" aria-hidden="true">
                            <div class="overflow-hidden rounded-full bg-gray-200">
                                <div class="h-2 rounded-full bg-indigo-600" style="width: calc((0 * 2 + 1) / 8 * 100%)">
                                </div>
                            </div>
                            <div class="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
                                <div class="text-indigo-600">Order placed</div>
                                <div class="text-center">Processing</div>
                                <div class="text-center">Shipped</div>
                                <div class="text-right">Delivered</div>
                            </div>
                        </div> -->
                            <CoreLeafletMap />
                        </div>

                        <dl class="mt-3 text-sm font-medium">
                            <dt class="text-gray-900">Tracking number</dt>
                            <dd class="mt-2 text-indigo-600">{{ route.params.id }}</dd>
                        </dl>

                        <ul role="list"
                            class="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500">
                            <li v-for="item, idx in cartList" :key="idx" class="flex space-x-6 py-6">
                                <img :src="item.imgUrl" alt="Model wearing men&#039;s charcoal basic tee in large."
                                    class="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center">
                                <div class="flex-auto space-y-1">
                                    <h3 class="text-gray-900">
                                        <a href="#">{{ item.name }}</a>
                                    </h3>
                                    <p>Charcoal</p>
                                    <p>L</p>
                                </div>
                                <p class="flex-none font-medium text-gray-900">{{ formatToNaira(item.price * item.count)
                                ||
                                0 }}</p>
                            </li>
                        </ul>

                        <dl class="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
                            <div class="flex justify-between">
                                <dt>Subtotal</dt>
                                <dd class="text-gray-900">{{ formatToNaira(totalPrice) || 0 }}</dd>
                            </div>

                            <div class="flex justify-between">
                                <dt>Shipping</dt>
                                <dd class="text-gray-900">₦100.00</dd>
                            </div>

                            <div class="flex justify-between">
                                <dt>Taxes</dt>
                                <dd class="text-gray-900">₦0.00</dd>
                            </div>

                            <div class="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                                <dt class="text-base">Total</dt>
                                <dd class="text-base">{{ formatToNaira(totalPrice) || 0 }}</dd>
                            </div>
                        </dl>

                        <dl class="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
                            <!-- <div>
                            <dt class="font-medium text-gray-900">Shipping Address</dt>
                            <dd class="mt-2">
                                <address class="not-italic">
                                    <span class="block">Block Hostel</span>
                                    <span class="block">Room 727</span>
                                    <span class="block">Luth, idi-araba Lagos.</span>
                                </address>
                            </dd>
                        </div> -->
                            <div>
                                <dt class="font-medium text-gray-900">Errander Information</dt>
                                <dd class="mt-2">
                                    <address class="not-italic">
                                        <div class="flex items-center gap-x-2">
                                            <img class="inline-block h-10 w-10 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt="">
                                            <span class="block">Abah Marquis</span>
                                        </div>
                                        <span class="block">OPH Hostel, Room 127</span>
                                        <span class="block">Luth, idi-araba Lagos.</span>
                                    </address>
                                </dd>
                            </div>
                            <div>
                                <dt class="font-medium text-gray-900">Payment Information</dt>
                                <dd class="mt-2 space-y-2 sm:flex sm:space-x-4 sm:space-y-0">
                                    <div class="flex-none">
                                        <svg aria-hidden="true" width="36" height="24" viewBox="0 0 36 24"
                                            class="h-6 w-auto">
                                            <rect width="36" height="24" rx="4" fill="#224DBA" />
                                            <path
                                                d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                                                fill="#fff" />
                                        </svg>
                                        <p class="sr-only">Visa</p>
                                    </div>
                                    <div class="flex-auto">
                                        <p class="text-gray-900">Ending with 4242</p>
                                        <p>Expires 12 / 21</p>
                                    </div>
                                </dd>
                            </div>
                        </dl>

                        <div class="mt-16 border-t border-gray-200 py-6 text-right">
                            <NuxtLink to="/" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <button @click="openModal" class="bg-green-500 text-white px-4 py-2 rounded-lg">Rate Delivery Service</button> -->
        <!-- <ModalsRatingModal @close-modal="isRatingModalOpen = false" :openModal="isRatingModalOpen" /> -->
    </main>
</template>


<script setup lang="ts">
import { useDate } from '@/composables/core/useDate';
import { useCurrency } from '@/composables/core/useCurrency';
import { useCreateCart } from '@/composables/cart/create'
const { cartList, totalPrice, isCartOpen, closeCart, removeItem } = useCreateCart()
const { formatToNaira } = useCurrency();
const { getTodayDate } = useDate();
const todayDate = ref('');
const route = useRoute()

// const isRatingModalOpen = ref(false);

// const openModal = () => {
//     isRatingModalOpen.value = true;
// };
</script>