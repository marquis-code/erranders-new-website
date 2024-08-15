<template>
    <form @submit.prevent="handleRegister">
        <div class="flex justify-between items-start">
            <div>
                <svg @click="router.back(-1)" class="cursor-pointer" width="68" height="24" viewBox="0 0 68 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.9802 5.31975L10.7702 8.52975L8.80023 10.4897C7.97023 11.3197 7.97023 12.6697 8.80023 13.4997L13.9802 18.6797C14.6602 19.3597 15.8202 18.8697 15.8202 17.9197V12.3097V6.07975C15.8202 5.11975 14.6602 4.63975 13.9802 5.31975Z"
                        fill="#292D32" />
                    <path
                        d="M30.1477 17.5V5.86364H34.6023C35.4432 5.86364 36.142 5.99621 36.6989 6.26136C37.2595 6.52273 37.678 6.88068 37.9545 7.33523C38.2348 7.78977 38.375 8.30492 38.375 8.88068C38.375 9.35417 38.2841 9.75947 38.1023 10.0966C37.9205 10.4299 37.6761 10.7008 37.3693 10.9091C37.0625 11.1174 36.7197 11.267 36.3409 11.358V11.4716C36.7538 11.4943 37.1496 11.6212 37.5284 11.8523C37.911 12.0795 38.2235 12.4015 38.4659 12.8182C38.7083 13.2348 38.8295 13.7386 38.8295 14.3295C38.8295 14.9318 38.6837 15.4735 38.392 15.9545C38.1004 16.4318 37.661 16.8087 37.0739 17.0852C36.4867 17.3617 35.7481 17.5 34.858 17.5H30.1477ZM32.2557 15.7386H34.5227C35.2879 15.7386 35.839 15.5928 36.1761 15.3011C36.517 15.0057 36.6875 14.6269 36.6875 14.1648C36.6875 13.8201 36.6023 13.5095 36.4318 13.233C36.2614 12.9527 36.0189 12.733 35.7045 12.5739C35.3902 12.411 35.0152 12.3295 34.5795 12.3295H32.2557V15.7386ZM32.2557 10.8125H34.3409C34.7045 10.8125 35.0322 10.7462 35.3239 10.6136C35.6155 10.4773 35.8447 10.286 36.0114 10.0398C36.1818 9.78977 36.267 9.49432 36.267 9.15341C36.267 8.70265 36.108 8.33144 35.7898 8.03977C35.4754 7.74811 35.0076 7.60227 34.3864 7.60227H32.2557V10.8125ZM43.0838 17.6761C42.5308 17.6761 42.0327 17.5777 41.5895 17.3807C41.1501 17.1799 40.8016 16.8845 40.544 16.4943C40.2902 16.1042 40.1634 15.6231 40.1634 15.0511C40.1634 14.5587 40.2543 14.1515 40.4361 13.8295C40.6179 13.5076 40.866 13.25 41.1804 13.0568C41.4948 12.8636 41.849 12.7178 42.2429 12.6193C42.6406 12.517 43.0516 12.4432 43.4759 12.3977C43.9872 12.3447 44.402 12.2973 44.7202 12.2557C45.0384 12.2102 45.2694 12.142 45.4134 12.0511C45.5611 11.9564 45.6349 11.8106 45.6349 11.6136V11.5795C45.6349 11.1515 45.508 10.8201 45.2543 10.5852C45.0005 10.3504 44.6349 10.233 44.1577 10.233C43.6539 10.233 43.2543 10.3428 42.9588 10.5625C42.6671 10.7822 42.4702 11.0417 42.3679 11.3409L40.4474 11.0682C40.599 10.5379 40.849 10.0947 41.1974 9.73864C41.5459 9.37879 41.9721 9.10985 42.4759 8.93182C42.9796 8.75 43.5365 8.65909 44.1463 8.65909C44.5668 8.65909 44.9853 8.70833 45.402 8.80682C45.8187 8.9053 46.1993 9.06818 46.544 9.29545C46.8887 9.51894 47.1652 9.82386 47.3736 10.2102C47.5857 10.5966 47.6918 11.0795 47.6918 11.6591V17.5H45.7145V16.3011H45.6463C45.5213 16.5436 45.3452 16.7708 45.1179 16.983C44.8944 17.1913 44.6122 17.3598 44.2713 17.4886C43.9342 17.6136 43.5384 17.6761 43.0838 17.6761ZM43.6179 16.1648C44.0308 16.1648 44.3887 16.0833 44.6918 15.9205C44.9948 15.7538 45.2277 15.5341 45.3906 15.2614C45.5573 14.9886 45.6406 14.6913 45.6406 14.3693V13.3409C45.5762 13.3939 45.4664 13.4432 45.3111 13.4886C45.1596 13.5341 44.9891 13.5739 44.7997 13.608C44.6103 13.642 44.4228 13.6723 44.2372 13.6989C44.0516 13.7254 43.8906 13.7481 43.7543 13.767C43.4474 13.8087 43.1728 13.8769 42.9304 13.9716C42.688 14.0663 42.4967 14.1989 42.3565 14.3693C42.2164 14.536 42.1463 14.7519 42.1463 15.017C42.1463 15.3958 42.2846 15.6818 42.5611 15.875C42.8376 16.0682 43.1899 16.1648 43.6179 16.1648ZM53.5668 17.6705C52.6955 17.6705 51.9474 17.4792 51.3224 17.0966C50.7012 16.714 50.2221 16.1856 49.8849 15.5114C49.5516 14.8333 49.3849 14.053 49.3849 13.1705C49.3849 12.2841 49.5554 11.5019 49.8963 10.8239C50.2372 10.142 50.7183 9.61174 51.3395 9.23295C51.9645 8.85038 52.7031 8.65909 53.5554 8.65909C54.2637 8.65909 54.8906 8.78977 55.4361 9.05114C55.9853 9.30871 56.4228 9.67424 56.7486 10.1477C57.0743 10.6174 57.2599 11.1667 57.3054 11.7955H55.3395C55.2599 11.375 55.0705 11.0246 54.7713 10.7443C54.4759 10.4602 54.08 10.3182 53.5838 10.3182C53.1634 10.3182 52.794 10.4318 52.4759 10.6591C52.1577 10.8826 51.9096 11.2045 51.7315 11.625C51.5573 12.0455 51.4702 12.5492 51.4702 13.1364C51.4702 13.7311 51.5573 14.2424 51.7315 14.6705C51.9058 15.0947 52.1501 15.4223 52.4645 15.6534C52.7827 15.8807 53.1558 15.9943 53.5838 15.9943C53.8868 15.9943 54.1577 15.9375 54.3963 15.8239C54.6387 15.7064 54.8414 15.5379 55.0043 15.3182C55.1671 15.0985 55.2789 14.8314 55.3395 14.517H57.3054C57.2562 15.1345 57.0743 15.6818 56.7599 16.1591C56.4455 16.6326 56.0175 17.0038 55.4759 17.2727C54.9342 17.5379 54.2978 17.6705 53.5668 17.6705ZM60.8693 14.7614L60.8636 12.2784H61.1932L64.3295 8.77273H66.733L62.875 13.0682H62.4489L60.8693 14.7614ZM58.9943 17.5V5.86364H61.0511V17.5H58.9943ZM64.4716 17.5L61.6307 13.5284L63.017 12.0795L66.9318 17.5H64.4716Z"
                        fill="#011633" />
                </svg>
            </div>

            <div>
                <p class="text-[#033A83] font-medium text-sm py-0 my-0">STEP {{ activeStep === 'personal-info' ? `02` : `03`}}/03</p>
                <h1 class="font-semibold text-sm text-gray-900 py-0 my-0">
                    {{ activeStep === 'business-info' ? `Business Info` : `Residency Info`}}
                </h1>
            </div>
        </div>
        <div class="mt-5">
            <h1 class="text-2xl lg:text-3xl font-semibold max-w-sm text-gray-800">{{activeStep === 'business-info' ? `Register business 
                account` : `Complete your
                profile`}}</h1>
            <p class="font-light leading-snug max-w-lg">For the purpose of industry regulation, your details are
                required.</p>
        </div>
        <div v-if="activeStep === 'business-info'" class="space-y-6 pt-6">
            <div>
                <label for="businessName" class="block text-sm font-medium leading-6 text-[#0D0C22]">Name of Business</label>
                <div class="mt-0.5">
                    <input type="text" name="businessName" id="businessName" v-model="registerPayload.businessName"
                        class="block w-full rounded-md border border-gray-100 p-3 py-3.5 text-gray-900 shadow-sm   placeholder:text-gray-400 placeholder:font-light outline-none "
                        placeholder="Enter your business name">
                </div>
            </div>
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-[#0D0C22]">Business email</label>
                <CoreEmailInput @completed="handleEmail" />
            </div>

            <div>
                <label for="password" class="block text-sm font-medium leading-6 text-[#0D0C22]">Password</label>
                <div class="mt-0.5 relative">
                    <input name="password" id="password" :type="showPassword ? 'text' : 'password'"  v-model="registerPayload.password"
                        class="block w-full rounded-md border border-gray-100 p-3 py-3.5 text-gray-900 shadow-sm   placeholder:text-gray-400 placeholder:font-light outline-none "
                        placeholder="Enter your password">
                    <img :src="eye" @click="togglePasswordVisibility" alt="" class="absolute right-4 top-4 h-6 w-6 cursor-pointer" />
                </div>
            </div>

            <div>
                <label for="confirmPassword" class="block text-sm font-medium leading-6 text-[#0D0C22]">Confirm password</label>
                <div class="mt-0.5 relative">
                    <input name="confirmPassword" id="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" v-model="registerPayload.confirmPassword"
                        class="block w-full rounded-md border border-gray-100 p-3 py-3.5 text-gray-900 shadow-sm   placeholder:text-gray-400 placeholder:font-light outline-none "
                        placeholder="Confirm your password">
                    <img :src="confirmEye" @click="toggleConfirmPasswordVisibility" alt="" class="absolute right-4 top-4 h-6 w-6 cursor-pointer" />
                </div>
            </div>


            <div>
                <label for="referral" class="block text-sm font-medium leading-6 text-[#0D0C22]">Referral</label>
                <div class="mt-0.5">
                    <input type="text" name="referral" id="referral" v-model="registerPayload.referral"
                        class="block w-full rounded-md border border-gray-100 p-3 py-3.5 text-gray-900 shadow-sm   placeholder:text-gray-400 placeholder:font-light outline-none "
                        placeholder="Enter name of referral">
                </div>
            </div>

            <div class="w-full pt-6">
                <button :disabled="!isFirstFormEmpty" type="button" @click="activeStep = 'residency-info'"
                    class="text-white bg-[#0BCA63] disabled:cursor-not-allowed disabled:opacity-25 px-6 py-3.5 clear-left w-full rounded-full">Next</button>
            </div>
        </div>
        <div v-if="activeStep === 'residency-info'" class="space-y-6 pt-6">
            <div>
                <label for="phone" class="block text-sm font-medium leading-6 text-[#0D0C22]">Business phone
                    number</label>
                <div class="mt-0.5">
                    <input type="phone" name="phone" id="phone" v-model="registerPayload.phone"
                        class="block w-full rounded-md border border-gray-100 p-3 py-3.5 text-gray-900 shadow-sm   placeholder:text-gray-400 placeholder:font-light outline-none "
                        placeholder="Enter your phone number">
                </div>
            </div>
            <div>
                <label for="registrationNumber" class="block text-sm font-medium leading-6 text-[#0D0C22]">CAC registration
                    number</label>
              <CoreCACInput @completed="handleValidCac" />
            </div>

            <div>
                <label for="businessAddress" class="block text-sm font-medium leading-6 text-[#0D0C22]">Business address</label>
                <div class="mt-0.5">
                    <input type="text" name="businessAddress" id="businessAddress" v-model="registerPayload.businessAddress"
                        class="block w-full rounded-md border border-gray-100 p-3 py-3.5 text-gray-900 shadow-sm   placeholder:text-gray-400 placeholder:font-light outline-none "
                        placeholder="Enter your business address">
                </div>
            </div>

            <div>
                <label for="residentialAddress" class="block text-sm font-medium leading-6 text-[#0D0C22]">Location of residence</label>
                <CoreAddressInput @coordinates="handleCoordinates" @address="handleUserAddress" />
            </div>
            <div class="w-full pt-6">
                <button type="submit" :disabled="loading && !isSecondFormEmpty"
                    class="text-white disabled:cursor-not-allowed disabled:opacity-25 bg-[#0BCA63] px-6 py-3.5 clear-left w-full rounded-full">{{ loading ? 'saving...' : 'Next'}}</button>
            </div>
        </div>
    </form>
</template>

<script lang="ts" setup>
import { useVendorSignup } from '@/composables/onboarding/vendorSignup'
const { registerPayload, handleRegister, loading, isFirstFormEmpty, isSecondFormEmpty } = useVendorSignup()
import eyeOpen from '@/assets/icons/eye-open.svg'
import eyeClose from '@/assets/icons/eye-close.svg'
const router = useRouter()
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const activeStep = ref('business-info')

const eye = computed(() => {
    return !showPassword.value ? eyeClose : eyeOpen
})

const confirmEye = computed(() => {
    return !showConfirmPassword.value ? eyeClose : eyeOpen
})

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
}

const toggleConfirmPasswordVisibility = () => {
    showConfirmPassword.value = !showConfirmPassword.value
}

const handleUserAddress = (address: any) => {
    registerPayload.value.residentialAddress = address
}

const handleValidCac = (data: any) => {
    registerPayload.value.registrationNumber = data
}

const handleEmail = (email: string) => {
    registerPayload.value.businessEmail = email
}

const handleCoordinates = (coordinates: any) => {
    console.log(coordinates, 'cords here')
    registerPayload.value.coordinates = [coordinates.lat, coordinates.lng]
}
</script>
