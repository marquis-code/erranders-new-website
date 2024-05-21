<template>

  <fieldset class="mt-2 ml-0 pl-0">
    <legend class="sr-only">Choose a size</legend>
    <div class="grid grid-cols-3 gap-3 sm:grid-cols-6 ml-0 pl-0">
      <label v-for="(item, i) in sizeList" :key="i" :for="item"
      :class="[item === selected ? 'bg-green-500 text-white' : 'bg-gray-50']"
      class="flex cursor-pointer text-gray-800 items-center justify-center gap-4 rounded-md border border-gray-100  py-2 px-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
      >
      <input v-model="selected" @change="handleSelectedSize(item, $event)" type="radio" :value="item" name="size-choice" :id="item" class="sr-only"
      aria-labelledby="size-choice-0-label">
        <span id="size-choice-0-label">{{ item }}</span> 
    </label>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
defineProps({
  sizeList: {
    type: [Array, Object, String, Number, Boolean],
    default: null
  }
})

const handleSelectedSize = (item: string, $event: any) => {
  console.log(item, 'item')
  console.log($event, 'event')
}

const selected = ref('')
</script>