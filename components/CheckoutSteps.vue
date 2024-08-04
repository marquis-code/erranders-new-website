<template>
    <div class="flex items-center justify-center pt-6">
        <div class="w-full max-w-md">
            <nav class="flex justify-start items-center mb-8" aria-label="Progress">
                <ol role="list" class="flex items-center">
                    <li v-for="step in steps" :key="step.number" class="relative pr-8 sm:pr-10">
                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                            <div :class="[
                        'h-0.5 w-full',
                        currentStep > step.number ? 'bg-indigo-600' : 'bg-gray-200',
                    ]"></div>
                        </div>
                        <a href="#" :class="[
                        'relative flex h-8 w-8 items-center justify-center rounded-full',
                        currentStep > step.number
                            ? 'bg-indigo-600'
                            : currentStep === step.number
                                ? 'border-2 border-indigo-600 bg-white'
                                : 'border-2 border-gray-300 bg-white group hover:border-gray-400',
                    ]" aria-current="step">
                            <span :class="[
                        currentStep > step.number
                            ? 'h-5 w-5 text-white'
                            : 'h-2.5 w-2.5 rounded-full',
                        currentStep > step.number
                            ? ''
                            : currentStep === step.number
                                ? 'bg-indigo-600'
                                : 'bg-transparent group-hover:bg-gray-300',
                    ]" aria-hidden="true"></span>
                            <span class="sr-only">Step {{ step.number }}</span>
                        </a>
                    </li>
                </ol>
            </nav>
            <form @submit.prevent="nextStep">
                <div v-if="currentStep === 1" class="mb-4 space-y-6">
                    <p class="text-sm text-justify">
                        If you have shopped with us before, please enter your details in the
                        boxes below. If you are a new customer, please proceed to the
                        Billing & Shipping section.
                    </p>
                    <div class="space-y-6">
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                                address</label>
                            <div class="mt-2">
                                <input id="email" v-model="formData.email" name="email" type="email" required
                                    class="block w-full rounded-md border outline-none pl-4 py-3 text-gray-900 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password"
                                    class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div class="mt-2">
                                <input id="password" name="password" v-model="formData.password" type="password"
                                    required
                                    class="block w-full rounded-md border outline-none pl-4 py-3 text-gray-900 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="currentStep === 2" class="mb-4">
                    <h2>Billing details</h2>
                    <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        <div>
                            <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                            <div class="mt-1">
                                <input type="text" id="first-name" v-model="formData.firstName" name="first-name"
                                    autocomplete="given-name"
                                    class="block w-full py-3 border pl-2.5 rounded-md border-gray-300 outline-none sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                            <div class="mt-1">
                                <input type="text" id="last-name" v-model="formData.lastName" name="last-name"
                                    autocomplete="family-name"
                                    class="block w-full py-3 border pl-2.5 rounded-md border-gray-300 outline-none sm:text-sm" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="apartment" class="block text-sm font-medium text-gray-700">Apartment, suite,
                                etc.</label>
                            <div class="mt-1">
                                <input type="text" name="apartment" v-model="formData.address" id="apartment"
                                    class="block w-full py-3 border pl-2.5 rounded-md border-gray-300 outline-none sm:text-sm" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                            <div class="mt-1">
                                <input type="text" name="phone" v-model="formData.phone" id="phone" autocomplete="tel"
                                    class="block w-full py-3 border pl-2.5 rounded-md border-gray-300 outline-none sm:text-sm" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 pt-6">Email</label>
                        <input type="email" v-model="formData.email" required
                            class="block w-full py-3 border pl-2.5 rounded-md border-gray-300 outline-none sm:text-sm" />
                    </div>
                    <div class="relative flex items-start pt-3">
                        <div class="flex h-6 items-center">
                            <input id="comments" aria-describedby="comments-description" @change="handleChange"
                                name="comments" type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        </div>
                        <div class="ml-3 text-sm leading-6">
                            <label for="comments" class="font-medium text-gray-900">Create an account?</label>
                        </div>
                    </div>
                    <div class="sm:col-span-2 pt-6" v-if="isNewUser">
                        <label for="phone" class="block text-sm font-medium text-gray-700">Create a new password</label>
                        <div class="mt-1">
                            <input type="text" name="phone" v-model="formData.password" id="phone" autocomplete="tel"
                                class="block w-full py-3 border pl-2.5 rounded-md border-gray-300 outline-none sm:text-sm" />
                        </div>
                    </div>
                </div>
                <div v-if="currentStep === 3" class="mb-4">
                    <div class="relative flex items-start pt-3">
                        <div class="flex h-6 items-center">
                            <input id="shipping" aria-describedby="shipping-description"
                                @change="handleChangeShippingAddress" name="comments" type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        </div>
                        <div class="ml-3 text-sm leading-6">
                            <label for="shipping" class="font-medium text-gray-900">Ship to a different address?</label>
                        </div>
                    </div>
                    <div v-if="isChangeShippingAddress" class="py-3">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Order Notes (optional)</label>
                        <input type="text" v-model="formData.orderNotes"
                            placeholder="Notes about your order e.g Special notes for delivery."
                            class="block w-full py-3 border pl-2.5 rounded-md border-gray-300 outline-none sm:text-sm" />
                        <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                            <div>
                                <label for="first-name" class="block text-sm font-medium text-gray-700">First
                                    name</label>
                                <div class="mt-1">
                                    <input type="text" id="first-name" v-model="formData.firstName" name="first-name"
                                        autocomplete="given-name"
                                        class="block w-full py-3 border pl-2.5 rounded-md border-gray-300 outline-none sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                                <div class="mt-1">
                                    <input type="text" id="last-name" v-model="formData.lastName" name="last-name"
                                        autocomplete="family-name"
                                        class="block w-full py-3 border pl-2.5 rounded-md border-gray-300 outline-none sm:text-sm" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="apartment" class="block text-sm font-medium text-gray-700">Apartment, suite,
                                    etc.</label>
                                <div class="mt-1">
                                    <input type="text" name="apartment" v-model="formData.address" id="apartment"
                                        class="block w-full py-3 border pl-2.5 rounded-md border-gray-300 outline-none sm:text-sm" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                                <div class="mt-1">
                                    <input type="tel" name="phone" v-model="formData.phone" id="phone"
                                        autocomplete="tel"
                                        class="block w-full py-3 border pl-2.5 rounded-md border-gray-300 outline-none sm:text-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="currentStep === 4" class="mb-4">
                    <h2>Your order</h2>
                    <section aria-labelledby="summary-heading"
                        class="bg-gray-50 px-4 pb-10 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16">
                        <div class="mx-auto max-w-lg lg:max-w-none">
                            <ul role="list" class="divide-y divide-gray-200 text-sm font-medium text-gray-900">
                                <li class="flex items-start space-x-4 py-6">
                                    <img src="https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg"
                                        alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps."
                                        class="h-20 w-20 flex-none rounded-md object-cover object-center border" />
                                    <div class="flex-auto space-y-1">
                                        <h3>Micro Backpack</h3>
                                        <p class="text-gray-500">Moss</p>
                                        <p class="text-gray-500">5L</p>
                                    </div>
                                    <p class="flex-none text-base font-medium">$70.00</p>
                                </li>

                                <!-- More products... -->
                            </ul>

                            <dl
                                class="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
                                <div class="flex items-center justify-between">
                                    <dt class="text-gray-600">Subtotal</dt>
                                    <dd>$320.00</dd>
                                </div>

                                <div class="flex items-center justify-between">
                                    <dt class="text-gray-600">Shipping</dt>
                                    <dd>$15.00</dd>
                                </div>

                                <div class="flex items-center justify-between">
                                    <dt class="text-gray-600">Taxes</dt>
                                    <dd>$26.80</dd>
                                </div>

                                <div class="flex items-center justify-between border-t border-gray-200 pt-6">
                                    <dt class="text-base">Total</dt>
                                    <dd class="text-base">$361.80</dd>
                                </div>
                            </dl>

                            <div
                                class="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
                                <div class="relative z-10 border-t border-gray-200 bg-white px-4 sm:px-6">
                                    <div class="mx-auto max-w-lg">
                                        <button type="button" class="flex w-full items-center py-6 font-medium"
                                            aria-expanded="false">
                                            <span class="mr-auto text-base">Total</span>
                                            <span class="mr-2 text-base">$361.80</span>
                                            <svg class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <!--
                        Mobile summary overlay, show/hide based on mobile summary state.
          
                        Entering: "transition-opacity ease-linear duration-300"
                          From: "opacity-0"
                          To: "opacity-100"
                        Leaving: "transition-opacity ease-linear duration-300"
                          From: "opacity-100"
                          To: "opacity-0"
                      -->
                                    <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

                                    <!--
                        Mobile summary, show/hide based on mobile summary state.
          
                        Entering: "transition ease-in-out duration-300 transform"
                          From: "translate-y-full"
                          To: "translate-y-0"
                        Leaving: "transition ease-in-out duration-300 transform"
                          From: "translate-y-0"
                          To: "translate-y-full"
                      -->
                                    <div class="relative bg-white px-4 py-6 sm:px-6">
                                        <dl class="mx-auto max-w-lg space-y-6">
                                            <div class="flex items-center justify-between">
                                                <dt class="text-gray-600">Subtotal</dt>
                                                <dd>$320.00</dd>
                                            </div>

                                            <div class="flex items-center justify-between">
                                                <dt class="text-gray-600">Shipping</dt>
                                                <dd>$15.00</dd>
                                            </div>

                                            <div class="flex items-center justify-between">
                                                <dt class="text-gray-600">Taxes</dt>
                                                <dd>$26.80</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div v-if="currentStep === 5" class="mb-4">
                    <h2>Payment</h2>
                    <fieldset class="mt-4">
                        <legend class="sr-only">Payment type</legend>
                        <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                            <div class="flex items-center">
                                <input id="credit-card" name="payment-type" v-model="formData.paymentType" type="radio"
                                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <label for="credit-card" class="ml-3 block text-sm font-medium text-gray-700">Credit
                                    card</label>
                            </div>
                            <div class="flex items-center">
                                <input id="paypal" name="payment-type" v-model="formData.paymentType" type="radio"
                                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <label for="paypal" class="ml-3 block text-sm font-medium text-gray-700">Cash</label>
                            </div>
                            <div class="flex items-center">
                                <input id="etransfer" name="payment-type" v-model="formData.paymentType" type="radio"
                                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <label for="etransfer"
                                    class="ml-3 block text-sm font-medium text-gray-700">eTransfer</label>
                            </div>
                        </div>
                    </fieldset>
                    <div v-if="formData.paymentType === 'credit-card'" class="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                        <div class="col-span-4">
                            <label for="card-number" class="block text-sm font-medium text-gray-700">Card number</label>
                            <div class="mt-1">
                                <input type="text" id="card-number" name="card-number" v-model="formData.cardNumber"
                                    autocomplete="cc-number"
                                    class="block w-full rounded-md border-gray-300 py-2.5 outline-none border pl-3 sm:text-sm" />
                            </div>
                        </div>

                        <div class="col-span-4">
                            <label for="name-on-card" class="block text-sm font-medium text-gray-700">Name on
                                card</label>
                            <div class="mt-1">
                                <input type="text" id="name-on-card" name="name-on-card" v-model="formData.nameOnCard"
                                    autocomplete="cc-name"
                                    class="block w-full rounded-md border-gray-300 py-2.5 outline-none border pl-3 sm:text-sm" />
                            </div>
                        </div>

                        <div class="col-span-3">
                            <label for="expiration-date" class="block text-sm font-medium text-gray-700">Expiration date
                                (MM/YY)</label>
                            <div class="mt-1">
                                <input type="text" name="expiration-date" v-model="formData.expirationDate"
                                    id="expiration-date" autocomplete="cc-exp"
                                    class="block w-full rounded-md border-gray-300 py-2.5 outline-none border pl-3 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
                            <div class="mt-1">
                                <input type="text" name="cvc" v-model="formData.cvc" id="cvc"
                                    class="block w-full rounded-md border-gray-300 py-2.5 outline-none border pl-3 sm:text-sm" />
                            </div>
                        </div>
                    </div>
                    <p class="text-sm text-gray-500 pt-4">
                        Your personal data will be used to process your order, support your
                        experience throughout this website, and for other purposes described
                        in our privacy policy.
                    </p>
                    <div class="relative flex items-start pt-3">
                        <div class="flex h-6 items-center">
                            <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        </div>
                        <div class="ml-3 text-sm leading-6">
                            <label for="comments" class="font-medium text-gray-900">I've read & agree to the terms and
                                conditions*</label>
                        </div>
                    </div>
                    <div class="relative flex items-start pt-3">
                        <div class="flex h-6 items-center">
                            <input id="order" aria-describedby="order-subscription"
                                @change="handleOrderSubscription" name="comments" type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        </div>
                        <div class="ml-3 text-sm leading-6">
                            <label for="order" class="font-medium text-gray-900">Subscribe to this order ?</label>
                        </div>
                    </div>
                    <div v-if="isSubscriptionOrder">
                        <CoreDateInput v-model="dateFilter" range placeholder="Filter by date" :disabled-date="() => null"
                          clearable />
                    </div>
                    <p  class="text-sm font-semibold py-0 my-0">Total Fee: {{ totalPrice.toLocaleString() }} Naira</p>
                    <!-- <p  class="text-sm font-semibold py-0 my-0">{{ displayText }}</p> -->
                </div>
                <button type="submit" :disabled="isLastStep"
                    class="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Next
                </button>
                <button v-if="isLastStep" type="button" @click="submitForm"
                    class="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useOrderPriceCalculation } from '@/composables/order/useSubscriptionOrderPriceCalculation';
import { useLogin } from "@/composables/auth/login";
import eyeOpen from "@/assets/icons/eye-open.svg";
import eyeClose from "@/assets/icons/eye-close.svg";
const { startDate, endDate, totalPrice, displayText } = useOrderPriceCalculation();
const { handleLogin, loginPayload, loading, isFormEmpty, setLoginData } =
    useLogin();
const { isLoggedIn } = useLogin();

const showPassword = ref(false);

const eye = computed(() => {
    return !showPassword.value ? eyeClose : eyeOpen;
});

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const dateFilter = ref<any>(null);

// Watch for changes in dateFilter and showAll, then fetch data
watch([dateFilter], () => {
    startDate.value = dateFilter?.value?.[0],
    endDate.value = dateFilter?.value?.[1],
    formData.value.startDate = dateFilter?.value?.[0],
    formData.value.endDate = dateFilter?.value?.[1]
});

interface FormData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    orderNotes: string;
    paymentType: string;
    cardNumber: string;
    nameOnCard: string;
    expirationDate: string;
    cvc: string;
    isNewUser: boolean;
    isSubscription: boolean,
    startDate: string,
    endDate: string
}

const isNewUser = ref(false);
const isChangeShippingAddress = ref(false);
const isSubscription = ref(false)
const isSubscriptionOrder = ref(false)

const steps = [
    { number: 1, name: "Login" },
    { number: 2, name: "Billing" },
    { number: 3, name: "Shipping" },
    { number: 4, name: "Order" },
    { number: 5, name: "Payment" },
];

const currentStep = ref<number>(isLoggedIn.value ? 2 : 1);
const formData = ref<FormData>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    orderNotes: "",
    paymentType: "",
    cardNumber: "",
    nameOnCard: "",
    expirationDate: "",
    cvc: "",
    isNewUser: isNewUser.value,
    isSubscription: isSubscription.value,
    startDate: '',
    endDate: ''
});

const isLoginFormComplete = computed(() => {
    return formData.value.email && formData.value.password;
});

const nextStep = () => {
    if (currentStep.value === 1 && isLoginFormComplete.value) {
        const payload = {
            email: formData.value.email,
            password: formData.value.password,
        };
        setLoginData(payload);
        handleLogin()
            .then(() => {
                if (currentStep.value < steps.length) {
                    currentStep.value++;
                }
            })
            .catch(() => {
                currentStep.value = 1;
            });
    }

    if (currentStep.value < steps.length) {
                    currentStep.value++;
                }
};

const emit = defineEmits<{
    (event: "checkoutInfo", data: FormData): void;
}>();

const submitForm = () => {
    emit("checkoutInfo", formData.value);
    console.log("Form submitted:", formData.value);
};

const isLastStep = computed(() => currentStep.value === steps.length);

const handleChange = (e) => {
    isNewUser.value = e.target.checked;
};

const handleOrderSubscription = (e) => {
    isSubscriptionOrder.value = e.target.checked;
}

const handleChangeShippingAddress = (e) => {
    isChangeShippingAddress.value = e.target.checked;
};
</script>

<style></style>
