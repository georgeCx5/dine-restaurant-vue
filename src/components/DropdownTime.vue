<script>
import { useMainStore } from '@/stores/MainStore'
import { mapStores } from 'pinia'

import arrow from '@/assets/images/icons/icon-arrow.svg?url'
import check from '@/assets/images/icons/icon-check.svg?url'
export default {
   data() {
      return {
         arrow,
         check,
      }
   },
   computed: {
      ...mapStores(useMainStore),
      getRotate() {
         return this.mainStore.isTimeOpen ? 'rotate-180' : ''
      }
   },
   methods: {
      setNewVal(newValue) {
         this.mainStore.timeVal = newValue
         this.mainStore.isTimeOpen = false
      },
      setVisibility(value) {
         if (this.mainStore.timeVal != value) return 'invisible'
      },
   }
}
</script>
<template>
   <div class=" relative flex items-center TB:justify-between gap-4 px-4 TB:px-6 text-neo-cod-gray select-none">
      <h5 class=" uppercase">
         {{ mainStore.timeVal }}</h5>
      <img @click="mainStore.isTimeOpen = !mainStore.isTimeOpen" :class="` ${getRotate} cursor-pointer py-1`" :src="arrow"
         alt="arrow" draggable="false">
      <Transition name="fade-drop">
         <div v-show="mainStore.isTimeOpen"
            class=" absolute top-[3.125rem] left-0 flex flex-col gap-3 w-[106px] h-[103px] px-4 py-4 bg-white shadow-xl">
            <button @click="setNewVal('am')" class=" flex items-center gap-4 uppercase">
               <img :class="` pb-1 ${setVisibility('am')}`" :src="check" alt="check">
               <p>am</p>
            </button>
            <button @click="setNewVal('pm')" class=" flex items-center gap-4 uppercase">
               <img :class="` pb-1 ${setVisibility('pm')}`" :src="check" alt="check">
               <p>pm</p>
            </button>
         </div>
      </Transition>
   </div>
</template>
<style>
.fade-drop-enter-active,
.fade-drop-leave-active {
   transition: opacity .25s ease-in-out
}

.fade-drop-enter-from,
.fade-drop-leave-to {
   opacity: 0;
}
</style>