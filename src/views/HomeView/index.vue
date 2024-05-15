<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import AboutSection from "./components/AboutSection.vue";
import HeroSection from "./components/HeroSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
</script>

<template>
  <div class="absolute bg-[#0a001f] w-screen min-h-screen max-lg">
    <img class="mix-blend-screen	saturate-20 h-full 	" src="/assets/photos/hero-bg.svg">
    <img class="absolute w-100 -ml-40 -mb-50 left-0 bottom-0 " src="/assets/photos/planet.png" >
  </div>
  <div
    aria-hidden="true"
    class="absolute h-screen justify-between items-center inset-0 grid grid-cols-2 -space-x-52 z-0"
  >
    <div
      class="blur-[150px] -ms-10 mt-auto w-2/6 h-1/3 bg-gradient-to-r from-[#4833cc] to-[rgb(176,28,255)] opacity-80"
    ></div>
    <div class="w-full h-full flex items-center justify-end">
      <div
        class="blur-[150px] w-1/3 h-1/2 bg-gradient-to-r from-[#4833cc] to-[rgb(176,28,255)] opacity-90"
      ></div>
    </div>
  </div>
  <main class="w-full relative">
    <HeroSection />
    <AboutSection/>
    <ServicesSection />
  </main>
</template>
