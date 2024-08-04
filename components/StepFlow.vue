<template>
    <div class="items-center bg-blue-50 p-6 rounded-lg mx-auto flex flex-col lg:flex-row max-w-screen-xl my-10">
      <div class="mb-4 pl-6 order-2 lg:order-1">
        <h2 class="text-3xl text-blue-900 pl-3 font-medium">Simple steps to make it more easier</h2>
        <ol class="text-left text-blue-600 mt-4 space-y-6">
          <li class="mb-2 space-y-2 pl-3">
            <span class="block"><strong>1. Search Item</strong></span>
            <span class="mt-3 block text-gray-500 font-light">Online ordering systems operate similarly to an online takeaway.</span>
          </li>
          <li class="mb-2 space-y-2 pl-3">
            <span class="block"><strong>2. Place Order</strong></span>
            <span class="mt-3 block text-gray-500 font-light">Place is defined as a particular location or space or the particular area normally occupied.</span>
          </li>
          <li class="mb-2 space-y-2 pl-3">
            <span class="block"><strong>3. Pay & Deliver</strong></span>
            <span class="mt-3 block text-gray-500 font-light">The terms and accepted forms of payment vary according to the payment provisions.</span>
          </li>
        </ol>
      </div>
      <div class="relative mx-auto mb-10 lg:mb-0 border-gray-800 order-1 lg:order-2 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
        <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div class="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="dark:hidden w-[272px] h-[572px]" alt="">
            <img :src="currentImage" class="transition-opacity duration-500 ease-in-out hidden dark:block w-[272px] h-[572px]" :class="{'opacity-0': fading}" alt="">
        </div>
    </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import image2 from '@/assets/img/mobile2.png'
  import image3 from '@/assets/img/mobile3.png'
  import image4 from '@/assets/img/mobile4.png'
  import image5 from '@/assets/img/mobile5.png'
const images = [
    image2, image3, image4, image5
    ];

    const currentImage = ref(images[0]);
const fading = ref(false);
let imageIndex = 0;

const changeImage = () => {
  fading.value = true;
  setTimeout(() => {
    imageIndex = (imageIndex + 1) % images.length;
    currentImage.value = images[imageIndex];
    fading.value = false;
  }, 500); // Match the duration with the CSS transition
};

let intervalId: number;

onMounted(() => {
  intervalId = setInterval(changeImage, 3000); // Change image every 3 seconds
});

onUnmounted(() => {
  clearInterval(intervalId);
});
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  