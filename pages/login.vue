<template>
  <section class="max-w-md mx-auto">
    <form class="space-y-6" @submit.prevent="handleLogin">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account
        </h2>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium leading-6 text-[#0D0C22]">Email address</label>
        <div class="mt-2">
          <input v-model="loginPayload.email" placeholder="Enter Email" id="email" name="email" type="email"
            class="block w-full rounded-md border border-gray-100 p-3 py-3.5 text-gray-900 shadow-sm   placeholder:text-gray-400 placeholder:font-light outline-none ">
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium leading-6 text-[#0D0C22]">Password</label>
        <div class="mt-0.5 relative">
            <input name="password" id="password" :type="showPassword ? 'text' : 'password'"  v-model="loginPayload.password"
                class="block w-full rounded-md border border-gray-100 p-3 py-3.5 text-gray-900 shadow-sm   placeholder:text-gray-400 placeholder:font-light outline-none "
                placeholder="Enter your password">
            <img :src="eye" @click="togglePasswordVisibility" alt="" class="absolute right-4 top-4 h-6 w-6 cursor-pointer" />
        </div>
    </div>

      <div class="pt-6">
        <button type="submit" :disabled="!isFormEmpty || loading"
          class="flex w-full disabled:cursor-not-allowed disabled:opacity-25 justify-center rounded-full bg-[#1F9D00] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1F9D00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F9D00]">
          {{ loading ? 'processing...' : 'Sign in' }}
        </button>
      </div>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <NuxtLink to="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Signup</NuxtLink>
      </p>
    </form>
  </section>
</template>

<script setup lang="ts">
import { useLogin } from '@/composables/auth/login'
import eyeOpen from '@/assets/icons/eye-open.svg'
import eyeClose from '@/assets/icons/eye-close.svg'
const { handleLogin, loginPayload, loading, isFormEmpty } = useLogin()
definePageMeta({
  layout: 'authentication'
})

const showPassword = ref(false)

const eye = computed(() => {
    return !showPassword.value ? eyeClose : eyeOpen
})


const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
}

</script>
