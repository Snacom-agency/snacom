<script setup lang="ts">
import Sidebar from "primevue/sidebar";
import { ref } from "vue";

const visible = ref(false);
</script>

<template>
  <!-- Navbar -->
  <nav class="absolute w-full top-0 z-50">
    <div
      class="flex justify-between container mx-auto items-center pt-6 pb-6 max-lg:px-4 z-10"
    >
      <div class="flex gap-20 items-center">
        <a href="#" class="text-[#150f3e] cursor-pointer">
          <img class="h-12" src="/assets/logo/snacom-logo-dark.svg" alt="snacom logo" />
        </a>
        <div class="flex gap-8 items-center text-white max-lg:hidden">
          <a href="#about" class="hover:text-[#4833cc] transition ease-in">About us</a>
          <a href="#services" class="hover:text-[#4833cc] transition ease-in">Services</a>
        </div>
        <Sidebar v-model:visible="visible">
          <template #container="{ closeCallback }">
            <div class="flex flex-col gap-4 p-4">
              <div class="flex justify-between items-center">
                <img class="h-12" src="/assets/logo/snacom-logo.svg" alt="snacom logo" />
                <Button
                  type="button"
                  @click="closeCallback"
                  icon="i-tabler-x"
                  rounded
                  outlined
                  class="h-2rem w-2rem"
                ></Button>
              </div>
              <Divider />
              <div class="flex flex-col gap-4 w-full">
                <a
                  v-ripple
                  href="#about"
                  class="w-full flex gap-2 items-center py-2 px-4 cursor-pointer hover:bg-[#edeafa] rounded-3 transition-duration-150 transition-colors p-ripple"
                >
                  <i class="i-tabler-users-group"></i>
                  <span>About us</span>
                </a>
                <a
                  v-ripple
                  href="#services"
                  class="w-full flex gap-2 items-center py-2 px-4 cursor-pointer hover:bg-[#edeafa] rounded-3 transition-duration-150 transition-colors p-ripple"
                >
                  <i class="i-tabler-universe"></i>
                  <span>Services</span>
                </a>
              </div>
            </div>
          </template>
        </Sidebar>
      </div>
      <div class="flex items-center gap-4">
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
