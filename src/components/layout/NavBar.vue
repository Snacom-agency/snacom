<script setup lang="ts">
import Sidebar from 'primevue/sidebar';
import { ref } from 'vue';

const visible = ref(false);
</script>


<template>
  <!-- Navbar -->
  <nav class="absolute w-full top-0 z-50">
    <div class=" flex justify-between container mx-auto items-center pt-6 pb-6 z-10">
      <div class="flex gap-20 items-center">
        <a href="#" class="text-[#150f3e] cursor-pointer">
          <img class="h-12" src="/assets/logo/snacom-logo.svg" alt="snacom logo" />
        </a>
        <div class="flex gap-8 items-center text-white max-lg:hidden">
          <a href="#services" class="hover:text-[#4833cc] transition ease-in">Services</a>
          <a href="#articles" class="hover:text-[#4833cc] transition ease-in">Blog</a>
          <a href="#" class="hover:text-[#4833cc] transition ease-in">About us</a>
        </div>
        <Sidebar v-model:visible="visible" ></Sidebar>

      </div>
      <div class="flex items-center gap-4 ">


        <Button label="Contact Us" />
        <Button
        class="lg:hidden"
        @click="visible = true"
        icon="i-tabler-menu-2"
        outlined
        />

      </div>
    </div>
  </nav>
  <!-- Navbar End-->
</template>
