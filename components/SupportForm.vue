<template>
    <main>
        <section>
            <section class="fixed bottom-1 right-0 cursor-pointer z-50">
                <div v-if="showPrompt" class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                    <!-- Background backdrop, show/hide based on slide-over state. -->
                    <div class="fixed inset-0"></div>

                    <div class="fixed inset-0 overflow-hidden bg-gray-900/80">
                        <div class="absolute inset-0 overflow-hidden">
                            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                                <!--
            Slide-over panel, show/hide based on slide-over state.
  
            Entering: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-full"
              To: "translate-x-0"
            Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-0"
              To: "translate-x-full"
          -->
                                <div class="pointer-events-auto w-screen max-w-md">
                                    <form @submit.prevent="supportStep === 'step1' ? next() : final()"
                                        class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                                        <div class="h-0 flex-1 overflow-y-auto">
                                            <div class="bg-indigo-700 px-4 py-6 sm:px-6">
                                                <div class="flex items-center justify-between">
                                                    <h2 class="text-xl font-semibold leading-6 text-white"
                                                        id="slide-over-title">
                                                        {{ supportStep === 'step1' ? `What services can we support you
                                                        with` : `We've been waiting for you.` }}
                                                    </h2>
                                                    <div class="ml-3 flex h-7 items-center">
                                                        <button type="button"
                                                            class="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                                            <span class="absolute -inset-2.5"></span>
                                                            <span class="sr-only">Close panel</span>
                                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                                stroke-width="1.5" stroke="currentColor"
                                                                aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="mt-1">
                                                    <p class="text-sm text-indigo-300">
                                                        {{ supportStep === 'step1' ? `Select all that apply. if you are
                                                        not sure what service are right for you. Feel free to explore
                                                        our in-depth breakdown linked below. it will open in a new card
                                                        so you don't loose loose context` :
                        `Our excellent service team is available 24/7 ready
                                                        to answer questions and provide detail about service
                                                        offered` }}
                                                    </p>
                                                </div>
                                            </div>
                                            <div v-if="supportStep === 'step2'"
                                                class="flex flex-1 flex-col justify-between">
                                                <div class="divide-y divide-gray-200 px-4 sm:px-6">
                                                    <div class="space-y-6 pb-5 pt-6">
                                                        <form @submit.prevent="handleReport" class="space-y-6">
                                                            <div>
                                                                <label for="name"
                                                                    class="block text-sm font-medium leading-6 text-gray-700">Name</label>
                                                                <div class="mt-2">
                                                                    <input id="name" placeholder="Enter full name"
                                                                        name="name" v-model="form.fullName" type="text"
                                                                        class="block w-full placeholder:font-light rounded-md border-0 py-3 shadow-sm ring-1 px-5 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <label for="email"
                                                                    class="block text-sm font-medium leading-6 text-gray-700">Email
                                                                    address</label>
                                                                <div class="mt-2">
                                                                    <input id="email" placeholder="Enter email"
                                                                        name="email" type="email" v-model="form.email"
                                                                        class="block w-full placeholder:font-light rounded-md border-0 py-3 shadow-sm ring-1 px-5 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <label for="phone"
                                                                    class="block text-sm font-medium leading-6 text-gray-700">Phone
                                                                    number</label>
                                                                <div class="mt-2">
                                                                    <input id="phone" placeholder="Enter phone number"
                                                                        name="phone" type="tel" v-model="form.phone"
                                                                        class="block w-full placeholder:font-light rounded-md border-0 py-3 shadow-sm ring-1 px-5 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <label for="message"
                                                                    class="block text-sm font-medium leading-6 text-gray-700">Please
                                                                    enter the details of your
                                                                    request</label>
                                                                <div class="mt-2">
                                                                    <textarea id="message" placeholder="Enter details"
                                                                        rows="6" cols="6" v-model="form.message"
                                                                        class="block w-full resize-none placeholder:font-light rounded-md border-0 py-1.5 shadow-sm px-5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"></textarea>
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <div>
                                                            <h3 class="text-sm font-medium leading-6 text-gray-900">
                                                                Team Members
                                                            </h3>
                                                            <div class="mt-2">
                                                                <div class="flex space-x-2">
                                                                    <a href="#"
                                                                        class="relative rounded-full hover:opacity-75">
                                                                        <img class="inline-block h-8 w-8 rounded-full"
                                                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                            alt="Tom Cook" />
                                                                    </a>
                                                                    <a href="#"
                                                                        class="relative rounded-full hover:opacity-75">
                                                                        <img class="inline-block h-8 w-8 rounded-full"
                                                                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                            alt="Whitney Francis" />
                                                                    </a>
                                                                    <a href="#"
                                                                        class="relative rounded-full hover:opacity-75">
                                                                        <img class="inline-block h-8 w-8 rounded-full"
                                                                            src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                            alt="Leonard Krasner" />
                                                                    </a>
                                                                    <a href="#"
                                                                        class="relative rounded-full hover:opacity-75">
                                                                        <img class="inline-block h-8 w-8 rounded-full"
                                                                            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                            alt="Floyd Miles" />
                                                                    </a>
                                                                    <a href="#"
                                                                        class="relative rounded-full hover:opacity-75">
                                                                        <img class="inline-block h-8 w-8 rounded-full"
                                                                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                            alt="Emily Selman" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="supportStep === 'step1'" class="space-y-6 px-3 pt-10">
                                                <label v-for="(itm, idx) in checkboxItems" :key="idx" :for="itm.label"
                                                    :class="[
                        selectedIndividualType === 'individual'
                            ? 'bg-[#E9F3FF]'
                            : 'bg-white',
                    ]" class="flex cursor-pointer justify-between gap-4 rounded-lg border-[0.5px] border-gray-100 hover:border-[#136FDA] p-4 text-sm font-medium shadow-sm has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500">
                                                    <div class="lg:flex items-center gap-x-2">
                                                        <svg width="30" height="30" viewBox="0 0 48 48" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.76 36.3002V32.1602" stroke="#292D32"
                                                                stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M24 36.2995V28.0195" stroke="#292D32"
                                                                stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M34.24 36.3004V23.8604" stroke="#292D32"
                                                                stroke-width="1.5" stroke-linecap="round" />
                                                            <path
                                                                d="M34.24 11.7002L33.32 12.7802C28.22 18.7402 21.38 22.9602 13.76 24.8602"
                                                                stroke="#292D32" stroke-width="1.5"
                                                                stroke-linecap="round" />
                                                            <path d="M28.38 11.7002H34.24V17.5402" stroke="#292D32"
                                                                stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M18 44H30C40 44 44 40 44 30V18C44 8 40 4 30 4H18C8 4 4 8 4 18V30C4 40 8 44 18 44Z"
                                                                stroke="#292D32" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                        <div>
                                                            <p class="text-[#011633] font-semibold text-base">
                                                                {{ itm.label }}
                                                            </p>

                                                            <p class="mt-1 text-[#011633] text-sm font-light max-w-sm">
                                                                To begin this journey, tell us what type of
                                                                account you’d be opening.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <input @change="handleSelectedUserType($event)" type="checkbox"
                                                        v-model="selectedCheckboxes" name="userType" :value="itm.label"
                                                        :id="itm.label"
                                                        class="size-5 border-gray-300 h-4 w-4 text-blue-500" />
                                                </label>

                                                <!-- <label for="errander" :class="[
                                        selectedIndividualType === 'errander'
                                            ? 'bg-[#E9F3FF]'
                                            : 'bg-white',
                                    ]" class="flex cursor-pointer justify-between gap-4 rounded-lg border-[0.5px] border-gray-100 hover:border-[#136FDA] p-4 text-sm font-medium shadow-sm has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500">
                                                    <div class="lg:flex items-center gap-x-2">
                                                        <svg width="30" height="30" viewBox="0 0 48 48" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.76 36.3002V32.1602" stroke="#292D32"
                                                                stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M24 36.2995V28.0195" stroke="#292D32"
                                                                stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M34.24 36.3004V23.8604" stroke="#292D32"
                                                                stroke-width="1.5" stroke-linecap="round" />
                                                            <path
                                                                d="M34.24 11.7002L33.32 12.7802C28.22 18.7402 21.38 22.9602 13.76 24.8602"
                                                                stroke="#292D32" stroke-width="1.5"
                                                                stroke-linecap="round" />
                                                            <path d="M28.38 11.7002H34.24V17.5402" stroke="#292D32"
                                                                stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M18 44H30C40 44 44 40 44 30V18C44 8 40 4 30 4H18C8 4 4 8 4 18V30C4 40 8 44 18 44Z"
                                                                stroke="#292D32" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                        <div>
                                                            <p class="text-[#011633] font-semibold text-base">
                                                                Errander
                                                            </p>

                                                            <p class="mt-1 text-[#011633] text-sm font-light max-w-sm">
                                                                To begin this journey, tell us what type of
                                                                account you’d be opening.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <input @change="handleSelectedUserType($event)" type="radio"
                                                        v-model="selectedIndividualType" name="userType"
                                                        value="errander" id="errander"
                                                        class="size-5 border-gray-300 text-blue-500 sr-only" />
                                                </label>

                                                <label for="vendor" :class="[
                                        selectedIndividualType === 'vendor'
                                            ? 'bg-[#E9F3FF]'
                                            : 'bg-white',
                                    ]" class="flex cursor-pointer justify-between gap-4 rounded-lg border-[0.5px] border-gray-100 hover:border-[#136FDA] p-4 text-sm font-medium shadow-sm has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500">
                                                    <div class="lg:flex items-center gap-x-2">
                                                        <svg width="30" height="30" viewBox="0 0 48 48" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.76 36.3002V32.1602" stroke="#292D32"
                                                                stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M24 36.2995V28.0195" stroke="#292D32"
                                                                stroke-width="1.5" stroke-linecap="round" />
                                                            <path d="M34.24 36.3004V23.8604" stroke="#292D32"
                                                                stroke-width="1.5" stroke-linecap="round" />
                                                            <path
                                                                d="M34.24 11.7002L33.32 12.7802C28.22 18.7402 21.38 22.9602 13.76 24.8602"
                                                                stroke="#292D32" stroke-width="1.5"
                                                                stroke-linecap="round" />
                                                            <path d="M28.38 11.7002H34.24V17.5402" stroke="#292D32"
                                                                stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M18 44H30C40 44 44 40 44 30V18C44 8 40 4 30 4H18C8 4 4 8 4 18V30C4 40 8 44 18 44Z"
                                                                stroke="#292D32" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                        <div>
                                                            <p class="text-[#011633] font-semibold text-base">
                                                                Vendor
                                                            </p>

                                                            <p class="mt-1 text-[#011633] text-sm font-light max-w-sm">
                                                                To begin this journey, tell us what type of
                                                                account you’d be opening.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <input @change="handleSelectedUserType($event)" type="radio"
                                                        v-model="selectedIndividualType" name="userType" value="vendor"
                                                        id="vendor"
                                                        class="size-5 border-gray-300 text-blue-500 sr-only" />
                                                </label> -->
                                            </div>
                                        </div>
                                        <div class="flex flex-shrink-0 justify-end px-4 py-4 gap-x-4">
                                            <button @click="showPrompt = false" type="button"
                                                class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                Cancel
                                            </button>
                                            <button type="submit" :disabled="!computedEmptyForm || processing"
                                                class="flex justify-center rounded-md disabled:cursor-not-allowed disabled:opacity-25 bg-[#034091] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#034091] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#034091]">
                                                {{ processing ? "submitting..." : "Send message" }}
                                            </button>
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
const showPrompt = ref(false);
const selectedIndividualType = ref("");

const handleSelectedUserType = (e: any) => {
    selectedIndividualType.value = e.target.value;
};
const togglePrompt = () => {
    showPrompt.value = !showPrompt.value;
};
const processing = ref(false);

const form = ref({
    fullName: "",
    email: "",
    message: "",
    phone: "",
});
const isForm1Empty = computed(() => {
    return !!(selectedCheckboxes.value.length);
});

const isForm2Empty = computed(() => {
    return !!(
        form.value.fullName &&
        form.value.email &&
        form.value.message &&
        form.value.phone
    );
});

const computedEmptyForm = computed(() => {
    return supportStep.value === 'step1' ? isForm1Empty.value : isForm2Empty.value;
})

const checkboxItems = ref([
    { label: 'Errander', value: 'option1' },
    { label: 'Individual', value: 'option2' },
    { label: 'Vendor', value: 'option3' }
])
const selectedCheckboxes = ref([])

const supportStep = ref("step1");

const next = () => {
    supportStep.value = 'step2'
}

const final = () => {
    processing.value = true;
    setTimeout(() => {
        processing.value = false;
        showPrompt.value = false;
        useNuxtApp().$toast.success(
            "Thanks for reaching out. We would revert shortly",
            {
                autoClose: 5000,
                dangerouslyHTMLString: true,
            }
        );
    }, 3000);
}
</script>