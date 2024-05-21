<template>
    <div class="flex items-center">
        <template v-for="(star, index) in 5" :key="index">
            <svg v-if="index < rating" class="h-6 w-6 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <svg v-else class="h-6 w-6 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2ZM12 15.78L15.12 17.59L14.5 14.24L17.38 11.76L14 11.35L12 8.38L10 11.35L6.62 11.76L9.5 14.24L8.88 17.59L12 15.78Z" />
            </svg>
        </template>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
defineProps({
    rating: {
        type: Number as PropType<number>,
        required: true,
        validator: (value: number) => value >= 0 && value <= 5,
    },
})
</script>