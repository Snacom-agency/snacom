<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
</script>

<template>
  <div
    aria-hidden="true"
    class="absolute h-screen justify-between items-center inset-0 grid grid-cols-2 -space-x-52 z-0"
  >
    <div
      class="blur-[150px] mt-auto w-1/4 h-1/2 bg-gradient-to-r from-[#4833cc] to-[rgb(176,28,255)] opacity-40"
    ></div>
    <div class="w-full h-full flex items-center justify-end">
      <div
        class="blur-[150px] w-1/3 h-1/2 bg-gradient-to-r from-[#4833cc] to-[rgb(176,28,255)] opacity-20"
      ></div>
    </div>
  </div>
  <main class="w-full relative">
    <HeroSection />
    <ServicesSection />
  </main>
</template>
