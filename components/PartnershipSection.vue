<template>
    <div class="bg-[#034091]">
        <div class="relative isolate overflow-hidden py-20 pt-44">
            <img src="/customersBg.svg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover bg-[#034091]">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                </div>
            </div>
            <div class="absolute inset-0 bg-[#034091] bg-opacity-95"></div>
            <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-50 mt-4 lg:mt-0">
                <div class="flex justify-center items-center flex-col">
                    <div class="text-center z-50 absolute">
                        <div class="flex justify-center items-center">
                            <h1 data-aos="flip-left"
                                class="lg:text-5xl font-medium tracking-tight text-xl lg:leading-snug sm:text-6xl text-white max-w-xl">
                                Trusted by the
                                best selling
                                stores in CMUL</h1>
                        </div>
                        <div class="flex justify-center items-center lg:py-6">
                            <p data-aos="flip-left"
                                class="lg:text-lg pt-4 lg:pt-0 lg:leading-8 text-sm px-6 lg:px-0 text-white max-w-2xl text-center font-light">
                                Experience the gold standard in quality and service, just like the top-selling stores
                                in CMUL. Join a community that values excellence and reliability. Be a part
                                of the elite circle that trusts us for their needs.
                            </p>
                        </div>
                        <div class="flex justify-center items-center">
                            <div data-aos="flip-left" class="lg:w-5/12 flex justify-center items-center pt-6 lg:pt-7">
                                <button @click="router.push('/register')" type="submit"
                                    class="flex-none lg:w-5/12 rounded-full bg-[#0BCA63] px-3.5 py-3.5 text-sm font-medium text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                                    Create account</button>
                            </div>
                        </div>
                        <div data-aos="flip-left"
                            class="flex justify-between items-center gap-x-20 py-20 overflow-x-auto px-6 lg:px-0">
                            <img data-aos="flip-left" src="@/assets/icons/chijoke.svg" alt="" class="h-32 w-52" />
                            <img data-aos="flip-left" src="@/assets/icons/iyabo.svg" alt="" class="h-32 w-52" />
                            <img data-aos="flip-left" src="@/assets/icons/bubbles.svg" alt="" class="h-32 w-52" />
                            <img data-aos="flip-left" src="@/assets/icons/iyatunu.svg" alt="" class="h-32 w-52" />
                            <img data-aos="flip-left" src="@/assets/icons/justspices.svg" alt="" class="h-32 w-52" />
                            <img data-aos="flip-left" src="@/assets/icons/chidera.svg" alt="" class="h-32 w-52" />
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left"
                class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>