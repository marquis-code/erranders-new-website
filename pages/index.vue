<template>
  <main>
    <HeroSection />
    <MealsCarousel id="products" />
    <CtaSection />
    <OurService />
    <StepFlow  />
    <VendorList id="marketplace" />
    <ServiceSection id="features" />
    <Support />
    <PartnershipSection />
    <Testimonials />
    <NewsLetter id="company" />
    <FooterSection />
  </main>
</template>

<!-- pages/index.vue -->
<script setup lang="ts">
import { useCreateCart } from '@/composables/cart/create'
const { cartList } = useCreateCart()
// onMounted(() => {
//   const router = useRouter()
//   router.push('/login');
// });
</script>