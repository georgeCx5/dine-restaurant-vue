<script>
import { useMainStore } from '@/stores/MainStore'
import { mapStores } from 'pinia'
import ButtonManager from './ButtonManager.vue'
import ptLines from '@/assets/images/patterns/pattern-lines.svg?url'
export default {
   data() {
      return {
         ptLines,
         data: [
            {
               header: 'Family Gathering',
               main: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
               bg: [
                  'bg-[url(@/assets/images/homepage/family-gathering-mobile@2x.jpg)]',
                  'TB:bg-[url(@/assets/images/homepage/family-gathering-tablet@2x.jpg)]',
                  'DT:bg-[url(@/assets/images/homepage/family-gathering-desktop@2x.jpg)]',
               ]
            },
            {
               header: 'Special Events',
               main: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
               bg: [
                  'bg-[url(@/assets/images/homepage/special-events-mobile@2x.jpg)]',
                  'TB:bg-[url(@/assets/images/homepage/special-events-tablet@2x.jpg)]',
                  'DT:bg-[url(@/assets/images/homepage/special-events-desktop@2x.jpg)]',
               ]
            },
            {
               header: 'Social Events',
               main: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
               bg: [
                  'bg-[url(@/assets/images/homepage/social-events-mobile@2x.jpg)]',
                  'TB:bg-[url(@/assets/images/homepage/social-events-tablet@2x.jpg)]',
                  'DT:bg-[url(@/assets/images/homepage/social-events-desktop@2x.jpg)]',
               ]
            }
         ]
      }
   },
   components: {
      ButtonManager,
   },
   computed: {
      ...mapStores(useMainStore),
      getDTGap() {
         return this.mainStore.featureIndex == 0 ?
            'DT:mb-[3.75rem]' : 'DT:mb-[1.875rem]'
      }
   },
   methods: {
      setActiveButton(value) {
         return value == this.mainStore.featureIndex ? '' : 'text-opacity-50'
      },
   }
}
</script>
<template>
   <div class=" relative DT:w-[48.5%] h-[400px] TB:h-[360px] DT:h-[600px] TB:mx-[4.5rem] DT:mx-0 z-10">
      <div v-for="(item, index) in data">
         <Transition>
            <div v-show="index == mainStore.featureIndex"
               :class="` absolute w-full h-full ${mainStore.joinArr(item.bg)} bg-cover bg-center shadow-2xl`"></div>
         </Transition>
      </div>
      <img class=" absolute -top-10 -left-14 DT:-left-12 hidden TB:block z-10" :src="ptLines" alt="ptLines">
   </div>
   <div class=" flex flex-col DT:flex-col-reverse gap-7 TB:gap-12 DT:gap-20 DT:w-[40%]">
      <div class=" flex flex-col TB:flex-row DT:flex-col items-center DT:items-start TB:justify-around gap-4 w-full ">
         <div v-for="(item, index) in data" @click="mainStore.featureIndex = index"
            class=" relative flex flex-col items-center z-10">
            <button
               :class="` text-neo-btn ${setActiveButton(index)} hover:text-opacity-100 text-[1rem] leading-[1.75rem] tracking-[.15rem] font-semibold uppercase select-none`">
               {{ item.header }}
            </button>
            <div v-show="index == mainStore.featureIndex"
               class=" TB:absolute TB:-bottom-2 DT:bottom-1/2 DT:-left-32 w-12 DT:w-24 h-px bg-neo-beaver"></div>
         </div>
      </div>
      <div class=" flex flex-col items-center DT:items-start TB:px-28 DT:px-0 text-center DT:text-left">
         <h1
            class=" mb-3 TB:mb-5 text-[2rem] TB:text-[3rem] leading-[2.5rem] TB:leading-[3rem] tracking-[-.025rem] font-bold">
            {{ data[mainStore.featureIndex].header }}</h1>
         <p
            :class="` mb-7 TB:mb-[3.75rem] ${getDTGap} text-[1rem] TB:text-[1.25rem] leading-[1.625rem] TB:leading-[1.875rem]`">
            {{ data[mainStore.featureIndex].main }}
         </p>
         <RouterLink to="/booking">
            <ButtonManager btn-type="Light" btn-text="Book a table" />
         </RouterLink>
      </div>
   </div>
</template>
<style>
.v-enter-active,
.v-leave-active {
   transition: opacity .5s ease;
}

.v-enter-from,
.v-leave-to {
   opacity: 0;
}
</style>