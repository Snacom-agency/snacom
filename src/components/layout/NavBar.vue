<script setup lang="ts">

</script>


<template>
  <!-- Navbar -->
  <nav class="absolute w-full top-0 z-50">
    <div class=" flex justify-between container mx-auto items-center pt-6 pb-6 z-10">
      <div class="flex gap-20 items-center">
        <a href="#" class="text-[#150f3e] cursor-pointer">
          <img class="h-12" src="/assets/logo/snacom-logo.svg" alt="snacom logo" />
        </a>
        <div class="flex gap-8 items-center text-white">
          <a href="#services" class="hover:text-[#4833cc] transition ease-in">Services</a>
          <a href="#articles" class="hover:text-[#4833cc] transition ease-in">Blog</a>
          <a href="#" class="hover:text-[#4833cc] transition ease-in">About us</a>
        </div>
      </div>
      <div class="flex items-center gap-4">

        <Button label="Contact Us" />

      </div>
    </div>
  </nav>
  <!-- Navbar End-->
</template>
