<template>
    <section class="bg-white border-[0.6px] border-gray-100 h-20 shadow">
        <header class="absolute inset-x-0 top-0 z-20 max-w-7xl mx-auto">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <NuxtLink to="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto" src="@/assets/icons/logo.svg" alt="">
                    </NuxtLink>
                </div>
                <div class="flex lg:hidden">
                    <button type="button" @click="isMobileNav = true"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <a href="#products" class="text-sm font-semibold leading-6 text-gray-900">Product</a>
                    <a href="#features" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
                    <a href="#marketplace" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
                    <a href="#company" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div class="flex items-center  gap-x-4">
                        <NuxtLink to="/register" href="#" class="text-sm font-semibold leading-6 text-gray-900">Log
                            in <span aria-hidden="true"></span></NuxtLink>
                        <NuxtLink to="/register"
                            class="text-sm font-medium leading-6 text-white bg-[#011633] px-6 rounded-full py-2">
                            Sign
                            up<span aria-hidden="true"></span></NuxtLink>
                    </div>
                </div>
            </nav>
            <!-- Mobile menu, show/hide based on menu open state. -->
            <div v-if="isMobileNav" class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
                <!--
                  Off-canvas menu backdrop, show/hide based on off-canvas menu state.
            
                  Entering: "transition-opacity ease-linear duration-300"
                    From: "opacity-0"
                    To: "opacity-100"
                  Leaving: "transition-opacity ease-linear duration-300"
                    From: "opacity-100"
                    To: "opacity-0"
                -->
                <div class="fixed inset-0 bg-gray-900/80"></div>

                <div class="fixed inset-0 flex">
                    <!--
                    Off-canvas menu, show/hide based on off-canvas menu state.
            
                    Entering: "transition ease-in-out duration-300 transform"
                      From: "-translate-x-full"
                      To: "translate-x-0"
                    Leaving: "transition ease-in-out duration-300 transform"
                      From: "translate-x-0"
                      To: "-translate-x-full"
                  -->
                    <div class="relative mr-16 flex w-full max-w-xs flex-1">
                        <!--
                      Close button, show/hide based on off-canvas menu state.
            
                      Entering: "ease-in-out duration-300"
                        From: "opacity-0"
                        To: "opacity-100"
                      Leaving: "ease-in-out duration-300"
                        From: "opacity-100"
                        To: "opacity-0"
                    -->
                        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                            <button @click="isMobileNav = false" type="button" class="-m-2.5 p-2.5">
                                <span class="sr-only">Close sidebar</span>
                                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <!-- Sidebar component, swap this element with another sidebar if you like -->
                        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                            <div class="flex h-16 shrink-0 items-center">
                                <img class="h-8 w-auto" src="@/assets/icons/logo.svg" alt="Your Company">
                            </div>
                            <nav class="flex flex-1 flex-col">
                                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                                    <li>
                                        <ul role="list" class="-mx-2 space-y-3">
                                            <li>
                                                <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
                                                <a href="#products" @click.native="isMobileNav = false"
                                                    class="bg-gray-50 text-indigo-600 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                    <svg class="h-6 w-6 shrink-0 text-indigo-600" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                                    </svg>
                                                    Products
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#features" @click.native="isMobileNav = false"
                                                    class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                    <svg class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                                    </svg>
                                                    Features
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#marketplace" @click.native="isMobileNav = false"
                                                    class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                    <svg class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                                    </svg>
                                                    Marketplace
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#company" @click.native="isMobileNav = false"
                                                    class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                                    <svg class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                                    </svg>
                                                    Company
                                                </a>
                                            </li>
                                            <li>
                                                <NuxtLink to="/login"
                                                    class="text-center bg-green-500 text-white 0 group flex gap-x-3 rounded-md p-2 py-2.5 text-sm leading-6 font-semibold">
                                                    Login
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </section>
</template>

<script setup lang="ts">
const isMobileNav = ref(false)
</script>