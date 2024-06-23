<template>
    <div class="relative">
      <input
        type="text"
        v-model="cacRegistrationNumber"
        @input="onInput"
        placeholder="Enter CAC registration number"
        :class="cacInputClass"
        class="block w-full rounded-md border p-3 py-3.5 text-gray-900 placeholder:text-gray-400 placeholder:font-light outline-none"
      />
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg v-if="!isCACValid && cacRegistrationNumber" class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
        <svg v-if="isCACValid && cacRegistrationNumber" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
      </div>
      <p v-if="cacRegistrationNumber && !isCACValid" class="mt-0.5 text-sm text-red-600">Invalid CAC registration number</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useCACValidation } from '@/composables/core/useCACValidation';
  const emit = defineEmits(['completed'])
  const {
    cacRegistrationNumber,
    isCACValid,
    validateCAC,
    cacInputClass,
  } = useCACValidation();
  
  const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    cacRegistrationNumber.value = target.value;
    validateCAC();
    emit('completed', cacRegistrationNumber.value)
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>
  