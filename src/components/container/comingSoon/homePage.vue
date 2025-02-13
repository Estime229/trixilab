<script setup>
import IconBenin from '@/components/icons/IconBenin.vue'
import IconFrance from '@/components/icons/IconFrance.vue'
import Benin from '@/components/container/comingSoon/BeninComponent.vue'
import France from '@/components/container/comingSoon/FranceComponent.vue'
import { ref, computed } from 'vue'

const isFrance = ref(true)
const isBenin = ref(false)

const openBenin = () => {
  isBenin.value = true
  isFrance.value = false
}

const openFrance = () => {
  isBenin.value = false
  isFrance.value = true
}

const activeButton = computed(() => {
  return isBenin.value ? 'benin' : isFrance.value ? 'france' : null
})
</script>
<template>
  <div class="py-7 px-5 md:px-10 lg:px-20 2xl:px-32 your-div-class">
    <div>
      <div
        class="font-medium text-5xl md:text-7xl text-center w-11/12 md:w-8/12 text-[#31353C] mx-auto"
      >
        Notre site se refait une beauté pour une meilleure expérience
      </div>
      <div class="text-center text-2xl font-normal text-[#4A505A] mt-8">
        Nous revenons bientôt avec des nouveautés !
      </div>
      <div
        class="w-[147px] h-9 bg-[#B3D2E0] rounded-full mx-auto mt-10 flex gap-2 p-1 items-center"
      >
        <!-- Bouton France -->
        <div
          :class="[
            'w-[55%] h-7 flex gap-2 rounded-full items-center p-1 cursor-pointer',
            activeButton === 'france' ? 'bg-white' : '',
          ]"
          @click="openFrance"
        >
          <IconFrance v-if="activeButton === 'france'" />
          <div class="text-xs font-medium">France</div>
        </div>
        <!-- Bouton Bénin -->
        <div
          :class="[
            'w-[55%] h-7 flex gap-2 rounded-full items-center p-1 cursor-pointer',
            activeButton === 'benin' ? 'bg-white' : '',
          ]"
          @click="openBenin"
        >
          <IconBenin v-if="activeButton === 'benin'" />
          <div class="text-xs font-medium">Bénin</div>
        </div>
      </div>
      <!-- France Component -->
      <transition name="fade" mode="out-in">
        <div v-if="isFrance">
          <France @closeWork="openBenin" />
        </div>
      </transition>
      <!-- Benin Component -->
      <transition name="fade" mode="out-in">
        <div v-if="isBenin">
          <Benin @closeDay="openFrance" />
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.cursor-pointer {
  cursor: pointer;
}

.your-div-class {
  background-color: rgba(255, 255, 255, 0.008); /* 0.5 est l'opacité, ajustez selon vos besoins */
}
</style>
