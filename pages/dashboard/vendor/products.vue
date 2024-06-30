<template>
    <main>
            <!-- <div class="mx-auto container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> -->
                <Product class="px-4 sm:px-6 lg:px-8" />
            <!-- </div> -->
    </main>
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'customer-dashboard',
    middleware: 'auth'
})
</script>