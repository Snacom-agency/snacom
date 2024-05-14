<script setup lang="ts">
const services = [
  {
    title:'Lorem ipsum dolor sit amet',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet',
    icon:'i-tabler-code',
  },
  {
    title:'Lorem ipsum dolor sit amet',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet',
    icon:'i-tabler-code',
    style:'bg-[#4833cc] text-white'
  },
  {
    title:'Lorem ipsum dolor sit amet',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet',
    icon:'i-tabler-code',
  },
  {
    title:'Lorem ipsum dolor sit amet',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet',
    icon:'i-tabler-code',
    style:'bg-[#4833cc] text-white'
  },
  {
    title:'Lorem ipsum dolor sit amet',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet',
    icon:'i-tabler-code',
  },
  {
    title:'Lorem ipsum dolor sit amet',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet',
    icon:'i-tabler-code',
    style:'bg-[#4833cc] text-white'

  }
]
</script>


<template>
  <!-- Services -->
  <section
    id="services"
    class="bg-[#f9f9fa] flex flex-col gap-4 items-center w-full py-12"
  >
    <p class="text-[#514f5f]">Our Services</p>
    <h2 class="m-0 font-bold text-3xl mb-8">
      What <span class="text-[#4833cc]">services</span> we provide?
    </h2>

    <div class="container mx-auto relative px-20 grid grid-cols-3 gap-8 max-lg:grid-cols-1 text-center">
      <Card v-for="service in services" :key="service.title" :pt="{
        root:{class:'shadow-none rounded-12 aspect-4/3	'+service.style}
      }">
        <template #content>
<div class="flex flex-col gap-4 items-center justify-center w-full ">
  <div class="rounded-8 bg-[#f9f9fa] p4">

    <i :class=" service.icon + ' ' + service.style+ 'text-[#4833cc] text-5xl block '"></i>
  </div>
          <h5 class="text-xl font-bold max-lg:text-4">{{ service.title }}</h5>
          <p :class="`text-center max-lg:text-3 ${service.style ? 'text-white':'text-[#514f5f] '}`">
{{ service.content }}
          </p>
</div>
    </template>
      </Card>

  
    </div>
  </section>
  <!-- Services End-->
</template>
