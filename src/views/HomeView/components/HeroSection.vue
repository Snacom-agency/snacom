<template>
  <!-- Hero -->
  <section
    class="relative container mx-auto h-screen grid grid-cols-2 gap-12 items-center z-10"
  >
    <div class="flex flex-col gap-8 items-start col-span-1">
      <h1 class="text-6xl leading-snug font-bold block">
        احصل على ما تريد ومن أي مكان تريد
      </h1>
      <p class="text-[#514f5f] text-lg">
        عالم من الإمكانيات تحت تصرفك. من مختلف المجالات والخدمات ، نُقدم لك خدمات متنوعة
        تُساعدك على تحويل أفكارك إلى واقع مدهش.
      </p>
      <div class="flex gap-4">
        <button
          class="pointer-events-auto cursor-pointer !rounded-full px-8 py-4 text-[1.3rem] font-semibold leading-5 text-[#4833cc] border border-[#4833cc] hover:bg-[rgba(72,51,204,0.06)]"
        >
          اطلب خدمتك
        </button>

        <button
          class="pointer-events-auto cursor-pointer rounded-full bg-[#4833cc] px-8 py-4 text-[1.3rem] font-semibold leading-5 text-white hover:bg-[#4733ccc4]"
        >
          أضف خدمتك
        </button>
      </div>
    </div>
    <div class="col-span-1 py-8">
      <img class="ms-auto w-10/12" src="/assets/photos/hero.svg" alt="" />
    </div>
  </section>
  <!-- Hero End-->
</template>
