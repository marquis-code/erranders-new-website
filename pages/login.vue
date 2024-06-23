<template>
  <section class="max-w-md mx-auto">
    <form class="space-y-6" @submit.prevent="handleLogin">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <!-- <img class="mx-auto h-10 w-auto" src="@/assets/icons/logo.svg" alt="Your Company"> -->
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account
        </h2>
      </div>
      <div>
        <label for="email" class="block text-sm sr-only font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input v-model="loginPayload.email" placeholder="E-mail" id="email" name="email" type="email"
            autocomplete="email" required
            class="block w-full rounded-md border border-gray-200 py-4 px-3 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm sr-only font-medium leading-6 text-gray-900">Password</label>
          <input v-model="loginPayload.password" placeholder="Password" id="password" name="password" type="password"
            autocomplete="current-password" required
            class="block w-full rounded-md border border-gray-200 py-4 px-3 outline-none text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div class="pt-6">
        <button type="submit" :disabled="!isFormEmpty || loading"
          class="flex w-full disabled:cursor-not-allowed disabled:opacity-25 justify-center rounded-full bg-[#1F9D00] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1F9D00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F9D00]">
          {{ loading ? 'processing...' : 'Sign in' }}
        </button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { useLogin } from '@/composables/auth/login'
const { handleLogin, loginPayload, loading, isFormEmpty } = useLogin()
definePageMeta({
  layout: 'authentication'
})

</script>
