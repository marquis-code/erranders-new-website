<template>
    <main class="py-32 space-y-6">
        <section
            class="max-w-screen-2xl mx-auto space-y-4 lg:space-y-0 lg:flex justify-between items-center px-6 lg:px-0">
            <div>
                <h1 class="text-2xl lg:text-4xl font-medium max-w-sm" data-aos="flip-left">Used By Thousands Of
                    Students on Campus</h1>
            </div>

            <div class="flex justify-center items-center gap-x-4" data-aos="flip-left">
                <button @click="prevSlide"><svg width="50" height="50" viewBox="0 0 68 68" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4"
                            d="M34 62.3332C18.352 62.3332 5.66671 49.6479 5.66671 33.9998C5.66671 18.3518 18.352 5.6665 34 5.6665C49.6481 5.6665 62.3334 18.3518 62.3334 33.9998C62.3334 49.6479 49.6481 62.3332 34 62.3332Z"
                            fill="#0BCA63" fill-opacity="0.36" />
                        <path
                            d="M37.57 46.1266C38.1083 46.1266 38.6466 45.9283 39.0716 45.5033C39.8933 44.6816 39.8933 43.3216 39.0716 42.5L30.5716 34L39.0716 25.5C39.8933 24.6783 39.8933 23.3183 39.0716 22.4966C38.2499 21.675 36.8899 21.675 36.0683 22.4966L26.0666 32.4983C25.245 33.32 25.245 34.68 26.0666 35.5016L36.0683 45.5033C36.4933 45.9283 37.0316 46.1266 37.57 46.1266Z"
                            fill="#044723" />
                    </svg>
                </button>
                <div data-aos="flip-left">
                    <svg width="76" height="12" viewBox="0 0 76 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="12" height="12" rx="6" transform="matrix(1 0 0 -1 0 12)" fill="#07793B"
                            fill-opacity="0.23" />
                        <rect width="31" height="12" rx="6" transform="matrix(1 0 0 -1 15 12)" fill="#0AB659" />
                        <rect width="12" height="12" rx="6" transform="matrix(1 0 0 -1 49 12)" fill="#07793B"
                            fill-opacity="0.23" />
                        <rect width="12" height="12" rx="6" transform="matrix(1 0 0 -1 64 12)" fill="#07793B"
                            fill-opacity="0.23" />
                    </svg>

                </div>
                <button @click="nextSlide">
                    <svg width="50" height="50" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4"
                            d="M34 62.3332C49.648 62.3332 62.3333 49.6479 62.3333 33.9998C62.3333 18.3518 49.648 5.6665 34 5.6665C18.3519 5.6665 5.66663 18.3518 5.66663 33.9998C5.66663 49.6479 18.3519 62.3332 34 62.3332Z"
                            fill="#0BCA63" fill-opacity="0.36" />
                        <path
                            d="M30.43 46.1266C29.8917 46.1266 29.3534 45.9283 28.9284 45.5033C28.1067 44.6816 28.1067 43.3216 28.9284 42.5L37.4284 34L28.9284 25.5C28.1067 24.6783 28.1067 23.3183 28.9284 22.4966C29.7501 21.675 31.1101 21.675 31.9317 22.4966L41.9334 32.4983C42.755 33.32 42.755 34.68 41.9334 35.5016L31.9317 45.5033C31.5067 45.9283 30.9684 46.1266 30.43 46.1266Z"
                            fill="#044723" />
                    </svg>

                </button>
            </div>
        </section>
        <section class="carousel-container" data-aos="flip-left">
            <div class="relative flex items-center justify-center" data-aos="flip-left">
                <div class="flex overflow-hidden" data-aos="flip-left">
                    <div class="flex transition-transform ease-in-out duration-500"
                        :style="{ 'transform': `translateX(-${currentIndex * 100 / pairs.length}%)` }">
                        <div v-for="(pair, index) in pairs" :key="index" class="flex justify-center min-w-full">
                            <div v-for="testimonial in pair" :key="testimonial.name"
                                class="testimonial-card m-2 border rounded-xl bg-white border-gray-50 shadow-sm w-full">
                                <div class="p-4 flex flex-col justify-between">
                                    <div class="pb-4">
                                        <img :src="testimonial.image" alt="brand" class="mt-4 w-[180px] rounded-full">
                                    </div>
                                    <p class="lg:text-base leading-loose text-sm text-[#011633] font-light">"{{
                    testimonial.testimony }}"</p>
                                    <div class="flex items-center gap-x-3 pt-10">
                                        <div>
                                            <img :src="testimonial.avatar" alt="Student Avatar"
                                                class="w-14 h-14 mt-4 rounded-full">
                                        </div>
                                        <div>
                                            <p class="mt-2 font-semibold text-[#011633]">{{ testimonial.name }}</p>
                                            <p class="text-xs text-[#011633]">{{ testimonial.class }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div>
            <div>
              <button @click="prevSlide" class="absolute left-0 z-10 p-4">Prev</button>
            </div>
            <div>
              <button @click="nextSlide" class="absolute right-0 z-10 p-4">Next</button>
            </div>
          </div> -->
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import avatar1 from '@/assets/img/avatar1.png'
import avatar2 from '@/assets/img/avatar2.png'
import avatar3 from '@/assets/img/avatar3.png'
import avatar4 from '@/assets/img/avatar4.png'
import yemyem from '@/assets/icons/stores/yemyem.svg'
import iyabo from '@/assets/icons/stores/iyabo.svg'
import chijoke from '@/assets/icons/stores/chijoke.svg'
import chidera from '@/assets/icons/stores/chidera.svg'
const testimonials = ref([
    {
        name: "Olumuyiwa Sarah",
        avatar: avatar1,
        testimony: `From the moment I placed my order to the 
swift delivery at my doorstep, the experience 
was flawless. The attention to detail in 
packaging and the personalized thank you 
note made me feel truly valued as a customer.`,
        image: yemyem,
        bgClass: "bg-[#FAD7D9]",
        class: "M.L.S student"
    },
    {
        name: "Abah Marquis",
        avatar: avatar2,
        testimony: `From the moment I placed my order to the 
swift delivery at my doorstep, the experience 
was flawless. The attention to detail in 
packaging and the personalized thank you 
note made me feel truly valued as a customer`,
        image: iyabo,
        bgClass: "bg-[#FFE5CB]",
        class: "M.L.S Alumnus"
    },
    {
        name: "Benedict Chike",
        avatar: avatar3,
        testimony: `From the moment I placed my order to the 
swift delivery at my doorstep, the experience 
was flawless. The attention to detail in 
packaging and the personalized thank you 
note made me feel truly valued as a customer`,
        image: chijoke,
        bgClass: "bg-[#FFE5CB]",
        class: "MBBS student"
    },
    {
        name: "John Fola",
        avatar: avatar4,
        testimony: `From the moment I placed my order to the 
swift delivery at my doorstep, the experience 
was flawless. The attention to detail in 
packaging and the personalized thank you 
note made me feel truly valued as a customer`,
        bgClass: "bg-[#ECEFF7]",
        image: chidera,
        class: "B.D.S student"
    },
    {
        name: "Olumuyiwa Sarah",
        avatar: avatar1,
        testimony: `From the moment I placed my order to the 
swift delivery at my doorstep, the experience 
was flawless. The attention to detail in 
packaging and the personalized thank you 
note made me feel truly valued as a customer.`,
        image: yemyem,
        bgClass: "bg-[#FAD7D9]",
        class: "M.L.S student"
    },
    {
        name: "Abah Marquis",
        avatar: avatar2,
        testimony: `From the moment I placed my order to the 
swift delivery at my doorstep, the experience 
was flawless. The attention to detail in 
packaging and the personalized thank you 
note made me feel truly valued as a customer`,
        image: iyabo,
        bgClass: "bg-[#FFE5CB]",
        class: "M.L.S Alumnus"
    },
    {
        name: "Benedict Chike",
        avatar: avatar3,
        testimony: `From the moment I placed my order to the 
swift delivery at my doorstep, the experience 
was flawless. The attention to detail in 
packaging and the personalized thank you 
note made me feel truly valued as a customer`,
        image: chijoke,
        bgClass: "bg-[#FFE5CB]",
        class: "MBBS student"
    },
    {
        name: "John Fola",
        avatar: avatar4,
        testimony: `From the moment I placed my order to the 
swift delivery at my doorstep, the experience 
was flawless. The attention to detail in 
packaging and the personalized thank you 
note made me feel truly valued as a customer`,
        bgClass: "bg-[#ECEFF7]",
        image: chidera,
        class: "B.D.S student"
    },
    {
        name: "Olumuyiwa Sarah",
        avatar: avatar1,
        testimony: `From the moment I placed my order to the 
swift delivery at my doorstep, the experience 
was flawless. The attention to detail in 
packaging and the personalized thank you 
note made me feel truly valued as a customer.`,
        image: yemyem,
        bgClass: "bg-[#FAD7D9]",
        class: "M.L.S student"
    },
    {
        name: "Abah Marquis",
        avatar: avatar2,
        testimony: `From the moment I placed my order to the 
swift delivery at my doorstep, the experience 
was flawless. The attention to detail in 
packaging and the personalized thank you 
note made me feel truly valued as a customer`,
        image: iyabo,
        bgClass: "bg-[#FFE5CB]",
        class: "M.L.S Alumnus"
    },
    {
        name: "Benedict Chike",
        avatar: avatar3,
        testimony: `From the moment I placed my order to the 
swift delivery at my doorstep, the experience 
was flawless. The attention to detail in 
packaging and the personalized thank you 
note made me feel truly valued as a customer`,
        image: chijoke,
        bgClass: "bg-[#FFE5CB]",
        class: "MBBS student"
    },
    {
        name: "John Fola",
        avatar: avatar4,
        testimony: `From the moment I placed my order to the 
swift delivery at my doorstep, the experience 
was flawless. The attention to detail in 
packaging and the personalized thank you 
note made me feel truly valued as a customer`,
        bgClass: "bg-[#ECEFF7]",
        image: chidera,
        class: "B.D.S student"
    }
]) as any
const currentIndex = ref(0) as any

const pairs = computed(() => {
    let result = [];
    for (let i = 0; i < testimonials.value.length; i += 6) {
        result.push(testimonials.value.slice(i, i + 3));
    }
    return result;
})

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % pairs.value.length;
}

const prevSlide = () => {
    currentIndex.value = currentIndex.value - 1 < 0 ? pairs.value.length - 1 : currentIndex.value - 1;
}

onMounted(() => {
    setInterval(nextSlide, 3000);
})
</script>

<style scoped>
.carousel-container {
    max-width: 90%;
    margin: auto;
}

.testimonial-card {
    width: calc(50% - 1rem);
    /* Adjust based on your needs */
}

.bg-light-shade {
    background-color: #f7fafc;
    /* Tailwind CSS light shade */
}
</style>