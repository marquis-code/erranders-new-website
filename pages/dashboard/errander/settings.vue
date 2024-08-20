<template>
    <div class="space-y-10 divide-y divide-gray-900/10 p-3 lg:p-10"> 
      <div class="grid grid-cols-1 gap-x-8 gap-y-8 md:pt-10 md:grid-cols-3">
        <div class="px-4 sm:px-0">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
        </div>
    
        <form @submit.prevent="updateUserInfo" class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div class="px-4 py-6 sm:p-8">
            <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                <div class="mt-2">
                  <input v-model="userInfo.firstName" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block pl-3 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ">
                </div>
              </div>
    
              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                <div class="mt-2">
                  <input v-model="userInfo.lastName" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block pl-3 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ">
                </div>
              </div>
  
              <div class="sm:col-span-3">
                  <label for="phone-number" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                  <div class="mt-2">
                    <input v-model="userInfo.phone" type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block pl-3 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ">
                  </div>
              </div>
      
              <div class="sm:col-span-3">
                <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Hostel (Current residential address)</label>
                <div class="mt-2">
                  <input v-model="userInfo.address" type="text" name="address" id="address" autocomplete="street-address" class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ">
                </div>
              </div>
  
              <div class="col-span-full">
                <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                <div class="mt-2 flex items-center gap-x-3">
                  <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                  </svg>
                  <button type="button" class="rounded-md bg-white px-2.5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                </div>
              </div>
      
              <div class="col-span-full">
                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div class="text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                    </svg>
                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only">
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
          </div>
        </form>
      </div>
    
      <!-- Availability Days and Payment Duration Section -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div class="px-4 sm:px-0">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>
        </div>
    
        <form @submit.prevent="updateUserSettings" class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div class="px-4 py-6 sm:p-8">
            <div class="max-w-2xl space-y-10">
              <fieldset>
                <legend class="text-sm font-semibold leading-6 text-gray-900 pb-0 mb-0">Availability Days</legend>
                <span class="text-sm text-gray-600 pt-0 mt-0">Please select availability days</span>
                <div class="mt-6 grid grid-cols-3 gap-6">
                  <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                      <input v-model="userInfo.availabilityDays" type="checkbox" value="Monday" id="monday" name="availability-days" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </div>
                    <div class="text-sm leading-6">
                      <label for="monday" class="font-medium text-gray-900">Monday</label>
                    </div>
                  </div>
                  <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                      <input v-model="userInfo.availabilityDays" type="checkbox" value="Tuesday" id="tuesday" name="availability-days" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </div>
                    <div class="text-sm leading-6">
                      <label for="tuesday" class="font-medium text-gray-900">Tuesday</label>
                    </div>
                  </div>
                  <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                      <input v-model="userInfo.availabilityDays" type="checkbox" value="Wednesday" id="wednesday" name="availability-days" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </div>
                    <div class="text-sm leading-6">
                      <label for="wednesday" class="font-medium text-gray-900">Wednesday</label>
                    </div>
                  </div>
                  <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                      <input v-model="userInfo.availabilityDays" type="checkbox" value="Thursday" id="thursday" name="availability-days" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </div>
                    <div class="text-sm leading-6">
                      <label for="thursday" class="font-medium text-gray-900">Thursday</label>
                    </div>
                  </div>
                  <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                      <input v-model="userInfo.availabilityDays" type="checkbox" value="Friday" id="friday" name="availability-days" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </div>
                    <div class="text-sm leading-6">
                      <label for="friday" class="font-medium text-gray-900">Friday</label>
                    </div>
                  </div>
                  <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                      <input v-model="userInfo.availabilityDays" type="checkbox" value="Saturday" id="saturday" name="availability-days" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </div>
                    <div class="text-sm leading-6">
                      <label for="saturday" class="font-medium text-gray-900">Saturday</label>
                    </div>
                  </div>
                  <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                      <input v-model="userInfo.availabilityDays" type="checkbox" value="Sunday" id="sunday" name="availability-days" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </div>
                    <div class="text-sm leading-6">
                      <label for="sunday" class="font-medium text-gray-900">Sunday</label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend class="text-sm font-semibold leading-6 text-gray-900 pb-0 mb-0">Payment Duration</legend>
                <p class="mt-0 pt-0 text-sm leading-6 text-gray-600">How often would you want to get paid</p>
                <div class="mt-6 space-y-6">
                  <div class="flex items-center gap-x-3">
                    <input v-model="userInfo.paymentDuration" type="radio" id="weekly" name="payment-duration" value="Weekly" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    <label for="weekly" class="block text-sm font-medium leading-6 text-gray-900">Weekly</label>
                  </div>
                  <div class="flex items-center gap-x-3">
                    <input v-model="userInfo.paymentDuration" type="radio" id="bi-weekly" name="payment-duration" value="Bi-weekly" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    <label for="bi-weekly" class="block text-sm font-medium leading-6 text-gray-900">Bi-weekly</label>
                  </div>
                  <div class="flex items-center gap-x-3">
                    <input v-model="userInfo.paymentDuration" type="radio" id="monthly" name="payment-duration" value="Monthly" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    <label for="monthly" class="block text-sm font-medium leading-6 text-gray-900">Monthly</label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useLogin } from '@/composables/auth/login'
  const { user } = useLogin()
  
  // Initial user info from user object
  const userInfo = ref({
    firstName: user.value.name || '',
    lastName: user.value.name || '',
    phone: user.value.phone || '',
    address: user.value.address || '',
    availabilityDays: user.value.availabilityDays || [],
    paymentDuration: user.value.paymentDuration || 'Weekly'
  })
  
  // Function to update user information
  const updateUserInfo = async () => {
    try {
    //   const response = await api.updateUser(userInfo.value)
      console.log('User info updated successfully:', userInfo.value)
      // Handle success (e.g., show a notification)
    } catch (error) {
      console.error('Error updating user info:', error)
      // Handle error (e.g., show an error message)
    }
  }
  
  // Function to update user settings (if separate)
  const updateUserSettings = async () => {
    try {
    //   const response = await api.updateUserSettings(userInfo.value)
      console.log('User settings updated successfully:', userInfo.value)
      // Handle success (e.g., show a notification)
    } catch (error) {
      console.error('Error updating user settings:', error)
      // Handle error (e.g., show an error message)
    }
  }
  
  definePageMeta({
    layout: 'customer-dashboard',
    middleware: 'auth'
  })
  </script>
  