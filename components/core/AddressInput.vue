<template>
    <div class="relative">
      <input
        type="text"
        v-model="address"
        @input="onInput"
        placeholder="Enter your residential address"
        class="block w-full rounded-md border border-gray-100 p-3 py-3.5 text-gray-900 shadow-sm   placeholder:text-gray-400 placeholder:font-light outline-none"
      />
      <ul
        v-if="showDropdown && searchResults.length"
        class="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg"
      >
        <li
          v-for="result in searchResults"
          :key="result.place_id"
          @click="selectAddress(result)"
          class="cursor-pointer p-2 hover:bg-gray-200"
        >
          {{ result.formatted }}
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useAddressAutoComplete } from '@/composables/core/useAddressAutoComplete';
  const emit = defineEmits(['address'])
  const address = ref('');
  const {
    searchResults,
    loadingLocations,
    showDropdown,
    handleInput,
  } = useAddressAutoComplete();
  
  const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    handleInput(target.value);
  };
  
  const selectAddress = (result: any) => {
    address.value = result.formatted;
    emit('address', address.value)
    showDropdown.value = false;
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>
  