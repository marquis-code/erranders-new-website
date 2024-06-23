<template>
    <main>
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <ProductForm />
            </div>
    </main>
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'customer-dashboard',
    middleware: 'auth'
})
</script>