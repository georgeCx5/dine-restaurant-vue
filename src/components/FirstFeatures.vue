<script setup>
import { useMainStore } from '../stores/MainStore';
const store = useMainStore()
</script>
<script>
import ptDivide from '@/assets/images/patterns/pattern-divide.svg?url'
import ptLines from '@/assets/images/patterns/pattern-lines.svg?url'

export default {
   data() {
      return {
         ptDivide,
         ptLines,
         data: [
            {
               header: ' Enjoyable place for all the family',
               main: 'Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.',
               bg: [
                  'bg-[url(@/assets/images/homepage/enjoyable-place-mobile@2x.jpg)]',
                  'TB:bg-[url(@/assets/images/homepage/enjoyable-place-tablet@2x.jpg)]',
                  'DT:bg-[url(@/assets/images/homepage/enjoyable-place-desktop@2x.jpg)]',
               ]
            },
            {
               header: 'The most locally sourced food',
               main: 'All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.',
               bg: [
                  'bg-[url(@/assets/images/homepage/locally-sourced-mobile@2x.jpg)]',
                  'TB:bg-[url(@/assets/images/homepage/locally-sourced-tablet@2x.jpg)]',
                  'DT:bg-[url(@/assets/images/homepage/locally-sourced-desktop@2x.jpg)]',
               ]
            },
         ],
      }
   },
   computed: {
      getFirstF() {
         return this.dataIndex == 0 ?
            'DT:flex-row' : 'DT:flex-row-reverse'
      }
   },
   props: {
      dataIndex: {
         Number,
         required: true,
      }
   }
}
</script>
<template>
   <article :class="` relative flex flex-col ${getFirstF} DT:justify-between gap-12 TB:gap-14`">
      <div
         :class="` w-full DT:w-[48.5%] h-[400px] TB:h-[360px] DT:h-[720px] ${store.joinArr(data[dataIndex].bg)} bg-cover bg-bottom shadow-2xl`">
      </div>
      <div
         class=" relative flex flex-col items-center DT:items-start DT:self-center DT:w-[40%] TB:px-[3.75rem] DT:px-0 text-center DT:text-left">
         <img class=" mb-9 TB:mb-10 DT:mb-14 select-none" :src="ptDivide" alt="pattern divide" draggable="false">
         <h2
            class=" mb-3 TB:mb-7 px-10 DT:px-0 text-[2rem] TB:text-[3rem] leading-[2.5rem] TB:leading-[3rem] tracking-[-.025rem] font-bold">
            {{ data[dataIndex].header }}</h2>
         <p class=" text-[1rem] TB:text-[1.25rem] leading-[1.625rem] TB:leading-[1.875rem]">
            {{ data[dataIndex].main }}
         </p>
      </div>
      <img v-show="dataIndex == 1" class=" absolute top-56 DT:top-72 -right-14 DT:-right-[6.5rem] hidden TB:block"
         :src="ptLines" alt="patternLines">
   </article>
</template>