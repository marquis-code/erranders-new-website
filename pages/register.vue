<template>
    <main>
        <section v-if="!Object.keys(route.query).length" class="max-w-xl rounded-r-lg">
            <div class="flex justify-end items-end">
                <p class="text-sm text-gray-600">Already have an acount? <NuxtLink
                        class="text-green-700 ml-2 font-medium border-b border-green-700" to="/login">
                        Sign
                        in</NuxtLink>
                </p>
            </div>
            <section class="pt-16">
                <div>
                    <h1 class="text-4xl font-semibold text-gray-800">Join us
                    </h1>
                    <p class="font-light leading-snug lg:leading-loose max-w-md">To begin this journey, tell us what
                        type
                        of account you’d be opening.</p>
                </div>
                <fieldset class="space-y-6 pt-10">
                    <legend class="sr-only">Individual</legend>

                    <div class="relative">
                        <div>
                            <label for="individual"
                                :class="[selectedUser === 'individual' ? 'bg-[#E9F3FF]' : 'bg-white']"
                                class="flex cursor-pointer justify-between gap-4 rounded-lg border-[0.5px] border-gray-100 hover:border-[#136FDA] p-4 text-sm font-medium shadow-sm  has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500">
                                <div class="flex items-center gap-x-2">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.76 36.3002V32.1602" stroke="#292D32" stroke-width="1.5"
                                            stroke-linecap="round" />
                                        <path d="M24 36.2995V28.0195" stroke="#292D32" stroke-width="1.5"
                                            stroke-linecap="round" />
                                        <path d="M34.24 36.3004V23.8604" stroke="#292D32" stroke-width="1.5"
                                            stroke-linecap="round" />
                                        <path d="M34.24 11.7002L33.32 12.7802C28.22 18.7402 21.38 22.9602 13.76 24.8602"
                                            stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M28.38 11.7002H34.24V17.5402" stroke="#292D32" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M18 44H30C40 44 44 40 44 30V18C44 8 40 4 30 4H18C8 4 4 8 4 18V30C4 40 8 44 18 44Z"
                                            stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <div>
                                        <p class="text-[#011633] font-semibold text-lg">Individual</p>

                                        <p class="mt-1 text-[#011633] font-light max-w-sm">To begin this journey, tell
                                            us
                                            what
                                            type
                                            of account you’d be opening.</p>
                                    </div>
                                </div>

                                <input @change="handleSelectedUserType($event)" type="radio" v-model="selectedUser"
                                    name="userType" value="individual" id="individual"
                                    class="size-5 border-gray-300 text-blue-500 sr-only" />
                            </label>
                        </div>
                        <svg v-if="selectedUser === 'individual'" width="88" height="135" viewBox="0 0 88 135"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 1.5V43C2 47.9706 6.02944 52 11 52H59M86.5 52H59M59 52V124C59 128.971 63.0294 133 68 133H86.5"
                                stroke="#011633" stroke-opacity="0.05" stroke-width="3" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                        <div class="absolute right-10 top-32 w-full">
                            <div v-if="selectedUser === 'individual'" class="flex justify-end items-end">
                                <div class="space-y-4 w-full pl-32">
                                    <div :class="[selectedIndividualType === 'errander' ? 'bg-green-100' : 'bg-white']"
                                        class="p-4 py-6 max-w-2xl rounded-lg shadow-sm border-[0.3px] hover:border-[1.5px] cursor-pointer">
                                        <label for="errander" class="flex items-center space-x-3 w-full cursor-pointer">
                                            <input @change="handleSelectedIndividualType" type="radio"
                                                name="accountType" class="form-radio h-4 w-4 text-green-500"
                                                v-model="selectedIndividualType" value="errander" id="errander" />
                                            <span class="text-gray-700">Sign up as an <span
                                                    class="text-[#011633] font-bold">Errander</span>.</span>
                                        </label>
                                    </div>
                                    <div :class="[selectedIndividualType === 'customer' ? 'bg-green-100' : 'bg-white']"
                                        class="p-4 py-6 max-w-2xl rounded-lg shadow-sm border-[0.3px] hover:border-[1.5px] cursor-pointer">
                                        <label for="customer" class="flex items-center space-x-3 w-full cursor-pointer">
                                            <input @change="handleSelectedIndividualType" type="radio"
                                                name="accountType" class="form-radio h-4 w-4 text-blue-500"
                                                v-model="selectedIndividualType" value="customer" id="customer" />
                                            <span class="text-gray-700">Sign up as a <span
                                                    class="text-[#011633] font-bold">Customer</span>.</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="[selectedUser === 'business' ? 'pt-0' : 'pt-16']">
                        <label for="business" :class="[selectedUser === 'business' ? 'bg-[#E9F3FF]' : 'bg-white']"
                            class="flex cursor-pointer justify-between  py-6 gap-4 rounded-lg border-[0.5px] border-gray-100  p-4 text-sm font-medium shadow-sm has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500">
                            <div class="flex items-center gap-x-2">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.98 4.46012L11 8.20011C8.7 9.06011 6.82001 11.7801 6.82001 14.2401V29.1001C6.82001 31.4601 8.38003 34.5601 10.28 35.9801L18.88 42.4001C21.7 44.5201 26.34 44.5201 29.16 42.4001L37.76 35.9801C39.66 34.5601 41.22 31.4601 41.22 29.1001V14.2401C41.22 11.7801 39.34 9.06011 37.04 8.20011L27.06 4.46012C25.36 3.84012 22.64 3.84012 20.98 4.46012Z"
                                        stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M24 21.8398C23.92 21.8398 23.82 21.8398 23.74 21.8398C21.86 21.7798 20.36 20.2198 20.36 18.3198C20.36 16.3798 21.94 14.7998 23.88 14.7998C25.82 14.7998 27.4 16.3798 27.4 18.3198C27.38 20.2398 25.88 21.7798 24 21.8398Z"
                                        stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M20.02 27.4397C18.1 28.7197 18.1 30.8197 20.02 32.0997C22.2 33.5597 25.78 33.5597 27.96 32.0997C29.88 30.8197 29.88 28.7197 27.96 27.4397C25.8 25.9797 22.22 25.9797 20.02 27.4397Z"
                                        stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                                <div>
                                    <p class="text-[#011633] font-semibold text-lg">Business</p>

                                    <p class="mt-1 text-[#011633] font-light max-w-sm">Own or belong to a company, this
                                        is
                                        for you.</p>
                                </div>
                            </div>

                            <input @change="handleSelectedUserType" type="radio" v-model="selectedUser" name="userType"
                                value="business" id="business" class="size-5 border-gray-300 text-blue-500 sr-only" />
                        </label>
                    </div>
                </fieldset>

                <div class="w-full pt-16">
                    <button type="button" @click="handleUser"
                        class="text-white bg-[#0BCA63] px-6 py-3.5 clear-left w-full rounded-full">Next</button>
                </div>
            </section>
        </section>
        <OnboardingBusiness v-if="route.query.type === 'business'" class="max-w-lg rounded-r-lg" />
        <OnboardingCustomer v-if="route.query.type === 'customer'" class="max-w-lg rounded-r-lg" />
        <OnboardingErrander v-if="route.query.type === 'errander'" class="max-w-lg rounded-r-lg" />
    </main>
</template>

<script setup lang="ts">
const selectedUser = ref('business')
const selectedIndividualType = ref('')
const route = useRoute()
const router = useRouter()
definePageMeta({
    layout: 'authentication'
})

const handleSelectedUserType = (e: any) => {
    selectedUser.value = e.target.value
}

const handleSelectedIndividualType = (e: any) => {
    selectedIndividualType.value = e.target.value
}

const handleUser = () => {
    if (selectedUser.value === 'business') {
        router.push({ path: route.path, query: { type: 'business' } })
    }

    if (selectedIndividualType.value === 'errander') {
        router.push({ path: route.path, query: { type: 'errander' } })
    }

    if (selectedIndividualType.value === 'customer') {
        router.push({ path: route.path, query: { type: 'customer' } })
    }
}
</script>
