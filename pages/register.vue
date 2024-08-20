<template>
    <main>
        <section v-if="!Object.keys(route.query).length" class="max-w-xl rounded-r-lg">
            <div class="flex justify-end items-end">
                <p class="text-sm text-gray-600">Already have an acount? <NuxtLink
                        class="text-green-700 ml-2 font-medium border-b border-green-700" to="/login">
                        Sign
                        in</NuxtLink>
                </p>
            </div>
            <section class="pt-10">
                <div>
                    <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 py-0 my-0">Join us
                    </h1>
                    <p class="font-light leading-snug lg:leading-loose max-w-md py-0 my-0">To begin this journey, tell us what
                        type
                        of account you’d be opening.</p>
                </div>
                <SignupOptions class="mt-5" @submit="handleUser" />
            </section>
        </section>
        <OnboardingBusiness v-if="route.query.type === 'business'" class="max-w-lg rounded-r-lg" />
        <OnboardingCustomer v-if="route.query.type === 'customer'" class="max-w-lg rounded-r-lg" />
        <OnboardingErrander v-if="route.query.type === 'errander'" class="max-w-lg rounded-r-lg" />
    </main>
</template>

<script setup lang="ts">
// const selectedUser = ref('business')
// const selectedIndividualType = ref('')
const route = useRoute()
const router = useRouter()
definePageMeta({
    layout: 'authentication'
})

const handleUser = (item: string) => {
    if (item === 'business') {
        router.push({ path: route.path, query: { type: 'business' } })
    }

    if (item === 'errander') {
        router.push({ path: route.path, query: { type: 'errander' } })
    }

    if (item === 'customer') {
        router.push({ path: route.path, query: { type: 'customer' } })
    }
}
</script>
