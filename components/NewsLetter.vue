<template>
    <div class="bg-[#011633]">

        <div class="relative isolate overflow-hidden lg:py-20 py-44">
            <img src="/notifyBg.svg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover bg-[#012045]">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                </div>
            </div>
            <div class="absolute inset-0 bg-[#011633] bg-opacity-95"></div>
            <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-50">
                <div class="flex justify-center items-center flex-col">
                    <div class="text-center z-50 absolute">
                        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl text-white" data-aos="flip-left">Get notified when we’re
                            launching.</h1>
                        <div class="flex justify-center items-center" data-aos="flip-left">
                            <p class="text-lg leading-8 text-gray-300 max-w-md text-center">Reprehenderit ad esse
                                et
                                non officia in nulla.
                                Id proident tempor
                                incididunt nostrud nulla et culpa
                            </p>
                        </div>
                        <div class="flex justify-start items-start flex-col gap-y-3 pt-7" data-aos="flip-left">
                            <div class=" pl-48">
                                <label for="email-address" class="text-white" data-aos="flip-left">Email address</label>
                            </div>
                            <div class="w-full" data-aos="flip-left">
                                <input id="email-address" name="email" type="email" autocomplete="email" required
                                    class="lg:w-7/12 w-10/12 outline-none bg-[#011633] rounded-md border-0  px-3.5 py-4 text-white shadow-sm sm:text-sm sm:leading-6"
                                    placeholder="Enter your email">
                            </div>
                        </div>
                        <div class="w-full flex justify-center items-center pt-7" data-aos="flip-left">
                            <button type="submit"
                                class="flex-none w-5/12 rounded-full bg-[#08984A] px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Notify
                                me</button>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left" class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                </div>
            </div>
        </div>
    </div>


</template>