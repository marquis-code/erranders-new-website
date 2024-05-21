<template>
    <div class="flex w-5/12 items-center rounded border border-gray-200">
        <button type="button" @click="decrease"
            class="size-10 leading-10 border-r-[0.8px] text-gray-600 w-full transition hover:opacity-75">
            &minus;
        </button>

        <input type="number" id="Quantity"  v-model="counter"
            class="h-10 w-16 outline-none border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" />

        <button type="button" @click="increase"
            class="size-10 border-l-[0.8px] leading-10 text-gray-600 w-full transition hover:opacity-75">
            &plus;
        </button>
    </div>
</template>

<script setup lang="ts">
const counter = ref(1)
const increase = () => {
    counter.value++
}

const decrease = () => {
    if (counter.value !== 1) {
        counter.value--
    }

}
</script>