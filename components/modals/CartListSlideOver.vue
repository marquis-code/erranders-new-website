<template>
    <main>
        <div v-if="isCartOpen" class="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div class="pointer-events-auto w-screen max-w-md">
                            <div v-if="route.query.section === 'cart-list'"
                                class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                                            Shopping cart
                                        </h2>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button type="button" @click="closeCart"
                                                class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                                <span class="absolute -inset-0.5"></span>
                                                <span class="sr-only">Close panel</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="mt-8">
                                        <div class="flow-root">
                                            <ul v-if="cartList.length" role="list"
                                                class="-my-6 divide-y divide-gray-200">
                                                <li v-for="(item, idx) in cartList" :key="idx" class="flex py-6">
                                                    <div
                                                        class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img :src="item.imgUrl"
                                                            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                                            class="h-full w-full object-cover object-center" />
                                                    </div>

                                                    <div class="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div
                                                                class="flex justify-between text-base font-medium text-gray-900">
                                                                <h3>
                                                                    <a href="#">{{ item.name }}</a>
                                                                </h3>
                                                                <p class="ml-4">
                                                                    {{
            formatToNaira(item.price * item.count) ||
            "Nil"
        }}
                                                                </p>
                                                            </div>
                                                            <p class="mt-1 text-sm text-gray-500">Salmon</p>
                                                        </div>
                                                        <div class="flex flex-1 items-end justify-between text-sm">
                                                            <p class="text-gray-500">Qty {{ item.count }}</p>

                                                            <div class="flex">
                                                                <button type="button" @click="removeItem(item.id)"
                                                                    class="font-medium text-indigo-600 hover:text-indigo-500">
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div v-else
                                                class="flex justify-center items-center flex-col pt-20 space-y-4">
                                                <img src="@/assets/img/emptycart4.png" class="h-44 w-44" alt="" />
                                                <p class="text-lg font-semibold text-gray-800">
                                                    Nothing is here
                                                </p>
                                                <p class="text-sm font-light text-gray-500">
                                                    Your cart is currently empty
                                                </p>
                                                <button @click="closeCart"
                                                    class="bg-green-500 text-white px-6 py-2 rounded-full text-sm">
                                                    Continue shopping
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="cartList.length" class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>{{ formatToNaira(totalPrice) || 0 }}</p>
                                    </div>
                                    <p class="mt-0.5 text-sm text-gray-500">
                                        Shipping and taxes calculated at checkout.
                                    </p>
                                    <div class="mt-6 w-full">
                                        <button
                                            @click="router.push({ path: route.path, query: { section: 'payment-methods' } })"
                                            type="button"
                                            class="flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                            Checkout
                                        </button>
                                    </div>
                                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or
                                            <button @click="closeCart" type="button"
                                                class="font-medium text-indigo-600 hover:text-indigo-500">
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div v-if="route.query.section === 'payment-methods'"
                                class="max-w-full min-h-screen bg-white pt-6 p-4">
                                <div class="p-4 bg-white rounded-lg min-w-4xl">
                                    <h2 class="text-sm font-medium mb-4">
                                        Select a Payment Option
                                    </h2>
                                    <div class="space-y-4">
                                        <div v-for="option in paymentOptions" :key="option.id" class="mb-2">
                                            <label
                                                class="flex items-center space-x-3 bg-gray-50 pl-3 border rounded cursor-pointer">
                                                <input type="radio" :value="option.id" v-model="selectedOption"
                                                    class="form-radio h-4 w-4 text-blue-600" />
                                                <div class="p-2 flex-1 flex items-center gap-x-2">
                                                    <img :src="option.icon" alt="" class="h-8 w-8" />
                                                    {{ option.name }}
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-10 w-full">
                                        <button @click="submitPaymentOption"
                                            class="px-4 disabled:cursor-not-allowed disabled:opacity-25 w-full py-3.5 bg-blue-600 text-white rounded">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useFlutterwaveSDK } from "@/composables/payment/flutterwave";
import { useCurrency } from "@/composables/core/useCurrency";
import { useCreateCart } from "@/composables/cart/create";
import cashPayment from "@/assets/icons/cash.svg";
import transferPayment from "@/assets/icons/transfer.svg";
const router = useRouter()
const { cartList, totalPrice, isCartOpen, closeCart, removeItem } =
    useCreateCart();
const { formatToNaira } = useCurrency();
const { handlePayment, paymentForm } = useFlutterwaveSDK();
const route = useRoute();
const payNow = () => {
    paymentForm.value.amount = totalPrice.value;
    handlePayment();
};

interface PaymentOption {
    id: string;
    name: string;
    icon: string;
}

const paymentOptions: PaymentOption[] = [
    { id: "cash", name: "Pay with cash", icon: cashPayment },
    { id: "transfer", name: "Pay with Transfer", icon: transferPayment },
];

const processingPayment = ref(false);

const selectedOption = ref<string>(paymentOptions[0].id);

const submitPaymentOption = () => {
    console.log(selectedOption.value, 'here')
    // handleCart({
    //     type: selectedOption.value
    // })

    if(selectedOption.value === 'transfer'){
        payNow()
    }
};
</script>
