<script setup>
import IconLogo from '@/components/icons/IconLogo.vue'
</script>

<template>
  <div class="flex justify-between py-7 px-5 md:px-10 lg:px-20 2xl:px-32 gap-2">
    <div class="logo flex justify-start">
      <IconLogo />
    </div>

    <div class="flex justify-end -mt-2">
      <a
        href="mailto:contact@trixlab.tech"
        class="bg-[#0C2A72] h-12 w-52 rounded-full font-medium text-base text-white hover:bg-[#03EBC8] hover:text-black flex items-center justify-center"
      >
        Prendre contact
      </a>
    </div>
  </div>
</template>

<style scoped></style>
