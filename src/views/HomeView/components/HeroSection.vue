

<template>
  <!-- Hero -->
  <section
    class="relative container mx-auto min-h-screen grid grid-cols-2 gap-12 items-center z-10 max-lg:grid-cols-1 max-lg:text-center max-lg:pt-28 max-lg:px-4"
  >
    <div class="flex flex-col gap-8 items-start col-span-1 max-lg:items-center max-lg:px-10">
      <h1 class="text-6xl leading-snug font-bold block text-white max-lg:text-3xl">
        <span class="text-[#4833cc]">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit,
      </h1>
      <p class="text-gray-3 text-lg max-lg:text-3.2 leading-snug">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div class="flex gap-4">


    <Button  label="Get a Proposal"/>
    <Button  label="Contact Us" outlined/>
      </div>
    </div>
    <div class="col-span-1 py-8 overflow-hidden">
      <img class="ms-auto w-10/12 scale-140 max-lg:mx-auto" src="/assets/photos/hero.svg" alt="" />
    </div>
  </section>
  <!-- Hero End-->
</template>
