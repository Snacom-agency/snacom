<script setup lang="ts">

</script>


<template>
  <!-- Navbar -->
  <nav class="sticky w-full top-0 z-50 bg-white border-b boreder-solid boreder-[#817e95]">
    <div class="flex justify-between container mx-auto items-center pt-6 pb-6 z-10">
      <div class="flex gap-20 items-center">
        <a href="#" class="text-[#150f3e] cursor-pointer">
          <img class="h-12" src="/assets/logo/snacom-logo.svg" alt="snacom logo" />
        </a>
        <div class="flex gap-8 items-center">
          <a href="#services" class="hover:text-[#4833cc] transition ease-in">خدماتنا</a>
          <a href="#articles" class="hover:text-[#4833cc] transition ease-in">مقالات</a>
          <a href="#" class="hover:text-[#4833cc] transition ease-in">عن ايفانتو</a>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex gap-2 items-center justify-start py-2 px-4">
          <label for="search" class="i-tabler-search"></label>
          <input
            class="bg-transparent outline-none"
            id="search"
            type="text"
            placeholder="بحث في الموقع"
          />
        </div>

        <button
          class="pointer-events-auto cursor-pointer !rounded-full px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-[#4833cc] border border-[#4833cc] hover:bg-[rgba(72,51,204,0.06)]"
        >
          تسجيل
        </button>

        <div
          class="pointer-events-auto cursor-pointer rounded-full bg-[#4833cc] px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-[#4733ccc4]"
        >
          تسجيل الدخول
        </div>
        <Button label="Submit" />

      </div>
    </div>
  </nav>
  <!-- Navbar End-->
</template>
