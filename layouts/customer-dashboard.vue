<template>
  <main>
    <div class="min-h-full">
      <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true" v-if="openSidebar">
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>

        <div class="fixed inset-0 z-40 flex">
          <div class="relative flex w-full  flex-1 flex-col bg-[#034091] pb-4 pt-5">
            <div class="absolute right-0 top-0 -mr-12 pt-2">
              <button type="button" @click="openSidebar = false"
                class="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Close sidebar</span>
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div class="flex flex-shrink-0 items-center px-4">
              <img class="h-20 w-auto" src="@/assets/img/logo.png" alt="Easywire logo">
            </div>
            <nav class="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
              <div class="space-y-2.5 px-2">
                <NuxtLink v-for="(itm, idx) in navigationList" :key="idx" :to="itm.path"
                  @click.prevent="openSidebar = false"
                  class="bg-[#034091] text-white group flex items-center rounded-md px-2 py-2 text-base font-medium"
                  aria-current="page">
                  <img :src="itm.icon" alt="icon" />
                  {{ itm.name }}
                </NuxtLink>
              </div>
              <div class="mt-6 pt-6">
                <div class="space-y-1 px-2">
                  <NuxtLink v-for="(item, idx) in configNavigationList" :key="idx" :to="item.path"
                    @click.prevent="openSidebar = false"
                    class="group flex items-center rounded-md px-2 py-2 text-base font-medium text-cyan-100 hover:bg-[#034091] hover:text-white">
                    <svg class="mr-4 h-6 w-6 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                    </svg>
                    {{ item.name }}
                  </NuxtLink>
                </div>
              </div>
              <div class="p-3">
                <a href="#" @click.prevent="logOut"
                  class="group flex bg-red-400 text-white items-center gap-x-3 rounded-md px-2 py-2 text-sm font-medium leading-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none"
                    stroke="#d0021b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
                  </svg>
                  Logout
                </a>
              </div>
            </nav>
          </div>

          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>

      <!-- Static sidebar for desktop -->
      <div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-grow flex-col overflow-y-auto bg-[#000C1B] pb-4 pt-5">
          <div class="flex flex-shrink-0 items-center px-4">
            <img class="h-10 w-auto" src="@/assets/img/logo.png" alt="Easywire logo">
          </div>
          <nav class="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
            <div class="space-y-2.5 px-2">
              <!-- Current: "bg-[#034091] text-white", Default: "text-cyan-100 hover:bg-[#034091] hover:text-white" -->
              <NuxtLink v-for="(itm, idx) in navigationList" :key="idx" :to="itm.path"
                @click.prevent="openSidebar = false"
                class="text-white group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6"
                aria-current="page">
                <svg class="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                {{ itm.name }}
              </NuxtLink>
            </div>
            <div class="mt-6 pt-6">
              <div class="space-y-1 px-2">
                <NuxtLink v-for="(item, idx) in configNavigationList" :key="idx" :to="item.path"
                  @click.prevent="openSidebar = false"
                  class="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-[#034091] hover:text-white">
                  <svg class="mr-4 h-6 w-6 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                  </svg>
                  {{ item.name }}
                </NuxtLink>
              </div>
            </div>
          </nav>
          <div class="p-3">
            <a href="#" @click.prevent="logOut"
              class="group flex bg-red-400 text-white items-center gap-x-3 rounded-md px-2 py-2 text-sm font-medium leading-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none"
                stroke="#d0021b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
              </svg>
              Logout
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-1 flex-col lg:pl-64">
        <div class="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
          <button type="button" @click="openSidebar = true"
            class="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden">
            <span class="sr-only">Open sidebar</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
            </svg>
          </button>
          <!-- Search bar -->
          <div class="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
            <div class="flex flex-1">
              <form class="flex w-full md:ml-0" action="#" method="GET">
                <label for="search-field" class="sr-only">Search</label>
                <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                  <input id="search-field" name="search-field"
                    class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    placeholder="Search transactions" type="search">
                </div>
              </form>
            </div>
            <div class="ml-4 flex items-center md:ml-6">
              <button type="button"
                class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">View notifications</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>

              <!-- Profile dropdown -->
              <div class="relative ml-3">
                <div>
                  <button type="button"
                    class="relative flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50"
                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="absolute -inset-1.5 lg:hidden"></span>
                    <img class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="">
                    <span class="ml-3 hidden text-sm font-medium text-gray-700 lg:block"><span class="sr-only">Open user
                        menu for </span>Jojo Sparkles</span>
                    <svg class="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block" viewBox="0 0 20 20"
                      fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div v-if="showDropdown"
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <!-- Active: "bg-gray-100", Not Active: "" -->
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                    id="user-menu-item-0">Your Profile</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                    id="user-menu-item-1">Settings</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                    id="user-menu-item-2">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main class="flex-1 pb-8  w-full">
          <!-- Page header -->
          <DashboardHeader />

          <slot />
        </main>
      </div>
    </div>
    <CoreChatbotIcon />
  </main>
</template>

<script setup lang="ts">
import dashboard from '@/assets/icons/dashboard.svg'
import orders from '@/assets/icons/orders.svg'
import wallet from '@/assets/icons/wallet.svg'
import products from '@/assets/icons/products.svg'
import analytics from '@/assets/icons/analytics.svg'
import settings from '@/assets/icons/settings.svg'
import help from '@/assets/icons/help.svg'
import privacy from '@/assets/icons/privacy.svg'

import { useLogin } from '@/composables/auth/login'
const { logOut } = useLogin()
const openSidebar = ref(false)
const showDropdown = ref(false)

const navigationList = ref([
  {
    icon: dashboard,
    path: '/dashboard/vendor',
    name: 'Dashboard',
  },
  {
    icon: orders,
    path: '/dashboard/vendor/orders',
    name: 'Orders'
  },
  {
    icon: wallet,
    path: '/dashboard/vendor/wallet',
    name: 'Wallet'
  },
  {
    icon: products,
    path: '/dashboard/vendor/products',
    name: 'Products'
  },
  {
    icon: analytics,
    path: '/dashboard/vendor/analytics',
    name: 'Analytics'
  }
])

const configNavigationList = ref([
  {
    icon: settings,
    path: '/dashboard/settings',
    name: 'Settings',
  },
  {
    icon: help,
    path: '/dashboard/vendor/orders',
    name: 'Help'
  },
  {
    icon: privacy,
    path: '/dashboard/vendor/wallet',
    name: 'Privacy'
  }
])
</script>

<style scoped>
.router-link-exact-active {
  background-color: #0ba9b9;
  color: white
}
</style>