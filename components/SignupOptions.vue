<template>
    <fieldset aria-label="Server size">
      <div class="space-y-4">
        <label
          v-for="option in options"
          :key="option.value"
          :aria-label="option.label"
          :aria-description="option.description"
          @click="selectOption(option.value)"
          :class="[
            'relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none flex justify-between',
            selectedOption === option.value ? 'border-green-600 border' : 'border-gray-300'
          ]"
        >
          <input
            type="radio"
            name="server-size"
            :value="option.value"
            class="sr-only"
            v-model="selectedOption"
          />
          <span class="flex items-center">
            <span class="flex flex-col text-sm">
              <span class="font-semibold text-gray-900 text-lg">{{ option.label }}</span>
              <span class="text-gray-500">
                <span class="block sm:inline">{{ option.specs }}</span>
                <span class="hidden sm:mx-1 sm:inline" aria-hidden="true">&middot;</span>
                <span class="block sm:inline">{{ option.disk }}</span>
              </span>
            </span>
          </span>
          <span class="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right">
            <span class="ml-1 text-gray-500 sm:ml- mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </span>
          </span>
          <span
            class="pointer-events-none absolute -inset-px rounded-lg border-2"
            :class="selectedOption === option.value ? 'border-indigo-600' : 'border-transparent'"
            aria-hidden="true"
          ></span>
        </label>
      </div>
      <div class="w-full pt-6">
        <button type="button" @click="submit"
            class="text-black bg-[#0BCA63] font-semibold px-6 py-4 clear-left w-full rounded-lg">Next</button>
    </div>
    </fieldset>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits } from 'vue'
  
  const options = [
    {
      value: 'business',
      label: 'Vendor',
      specs: 'Signup as a business owner',
      disk: 'Market Masters 📦💰',
      price: '',
      description: '8GB, 4 CPUs, 160 GB SSD disk, $40 per month'
    },
    {
      value: 'errander',
      label: 'Errander',
      specs: 'Signup as an Errander',
      disk: 'Delivery Champions 🚴‍♂️💨',
      price: '',
      description: '12GB, 6 CPUs, 256 GB SSD disk, $80 per month'
    },
    {
      value: 'customer',
      label: 'Customer',
      specs: 'Signup as a customer',
      disk: 'Consumer kings 🍕📦🏠',
      price: '',
      description: '16GB, 8 CPUs, 512 GB SSD disk, $160 per month'
    }
  ]
  
  const selectedOption = ref<string | null>(null)
  
  const emit = defineEmits(['submit'])
  
  const selectOption = (value: string) => {
    selectedOption.value = value
  }
  
  const submit = () => {
    if (selectedOption.value) {
      emit('submit', selectedOption.value)
    } else {
      alert('Please select an option')
    }
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here if necessary */
  </style>
  