<template>
  <div class="flex space-x-4 text-sm text-gray-500">
    <div class="flex-none py-3">
      <img
        :src="review.avatar"
        alt="" class="h-10 w-10 rounded-full bg-gray-100">
    </div>
    <div class="py-3">
      <h3 class="font-medium text-gray-900">{{review.name}}</h3>
      <p><time datetime="2021-07-16">{{review.date}}</time></p>

      <div class="mt-4 flex items-center">
        <ProductStarRating :rating="review.rating" />
      </div>
      <p class="sr-only">5 out of 5 stars</p>

      <div class="prose prose-sm mt-4 max-w-none text-gray-500">
        <p>{{review.message}}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  review: {
    type: Object,
    required: true
  }
})
</script>