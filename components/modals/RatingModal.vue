<template>
    <div v-if="openModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 class="text-xl font-semibold mb-4">Rate the Delivery Service</h2>
            <div class="flex justify-center mb-4">
                <span v-for="star in 5" :key="star" @click="setRating(star)"
                    :class="star <= rating ? 'text-yellow-500' : 'text-gray-300'" class="cursor-pointer text-3xl">
                    ★
                </span>
            </div>
            <button @click="submitRating" class="bg-blue-500 text-white px-4 py-2 rounded-lg">Submit</button>
            <button @click="closeModal" class="mt-2 text-gray-500">Cancel</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';
const rating = ref(0);

const setRating = (star: number) => {
    rating.value = star;
};

defineProps({
    openModal: {
        type: Boolean,
        required: true
    }
})
const emit = defineEmits<{
    (event: 'closeModal'): void
}>()

const closeModal = () => {
    emit('closeModal')
};

const submitRating = async () => {
    try {
        await axios.post('/api/rating', { rating: rating.value });
        closeModal();
    } catch (error) {
        console.error('Failed to submit rating:', error);
    }
};
</script>

<style scoped>
/* Tailwind CSS will handle most of the styling, but you can add custom styles if needed */
</style>