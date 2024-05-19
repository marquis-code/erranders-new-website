<template>
    <main>
        <section>
            <section class="fixed bottom-6 right-6 cursor-pointer">
                <div class="flex min-h-full border border-gray-100 bg-white shadow-sm rounded-xl" v-if="showPrompt">
                    <div class="flex flex-1 flex-col justify-center px-4 pb-6 sm:px-6 lg:flex-none">
                        <div class="mx-auto w-full max-w-sm lg:w-96">
                            <div>
                                <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-[#034091]">We've been
                                    waiting
                                    for you.</h2>
                                <p class="text-sm leading-6 text-gray-500">
                                    Our excellent service team is available 24/7 ready to answer questions and provide
                                    detail
                                    about service offered.
                                </p>
                            </div>

                            <div class="mt-10">
                                <div>
                                    <form @submit.prevent="handleReport" class="space-y-6">
                                        <div>
                                            <label for="name"
                                                class="block text-sm font-medium leading-6 text-gray-700">Name</label>
                                            <div class="mt-2">
                                                <input id="name" placeholder="Enter full name" name="name"
                                                    v-model="form.fullName" type="text"
                                                    class="block w-full rounded-md border-0 py-3 shadow-sm ring-1 px-5 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>
                                        <div>
                                            <label for="email"
                                                class="block text-sm font-medium leading-6 text-gray-700">Email
                                                address</label>
                                            <div class="mt-2">
                                                <input id="email" placeholder="Enter email" name="email" type="email"
                                                    v-model="form.email"
                                                    class="block w-full rounded-md border-0 py-3 shadow-sm ring-1 px-5 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
                                            </div>
                                        </div>

                                        <div>
                                            <label for="phone"
                                                class="block text-sm font-medium leading-6 text-gray-700">Phone
                                                number</label>
                                            <div class="mt-2">
                                                <input id="phone" placeholder="Enter phone number" name="phone"
                                                    type="tel" v-model="form.phone"
                                                    class="block w-full rounded-md border-0 py-3 shadow-sm ring-1 px-5 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
                                            </div>
                                        </div>

                                        <div>
                                            <label for="message"
                                                class="block text-sm font-medium leading-6 text-gray-700">Please
                                                enter the details of your request</label>
                                            <div class="mt-2">
                                                <textarea id="message" placeholder="Enter details" rows="6" cols="6"
                                                    v-model="form.message"
                                                    class="block w-full rounded-md border-0 py-1.5 shadow-sm px-5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"></textarea>
                                            </div>
                                        </div>


                                        <div class="pt-4">
                                            <button type="submit" :disabled="!isFormEmpty || processing"
                                                class="flex w-full justify-center rounded-md disabled:cursor-not-allowed disabled:opacity-25 bg-[#034091] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#034091] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#034091]">
                                                {{ processing ? 'submitting...' : 'Send message' }}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end items-end mt-1">
                    <img src="@/assets/icons/chatbot.svg" @click="togglePrompt" alt=""
                        class="h-14 w-14 pt-1 bg-white rounded-full p-2 shadow flex justify-center items-center" />
                </div>
            </section>
        </section>
    </main>
</template>

<script setup lang="ts">
const showPrompt = ref(false)
const togglePrompt = () => {
    showPrompt.value = !showPrompt.value
}
const processing = ref(false)

const form = ref({
    fullName: '',
    email: '',
    message: '',
    phone: ''
})
const isFormEmpty = computed(() => {
    return !!(form.value.fullName && form.value.email && form.value.message && form.value.phone)
})

const handleReport = () => {
    processing.value = true
    setTimeout(() => {
        processing.value = false
        showPrompt.value = false
        useNuxtApp().$toast.success("Thanks for reaching out. We would revert shortly", {
            autoClose: 5000,
            dangerouslyHTMLString: true,
        });
    }, 3000)
}
</script>