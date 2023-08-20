<script setup>
import { useMainStore } from '../stores/MainStore';
const store = useMainStore()
</script>
<script>
export default {
   data() {
      return {
         data: [
            {
               header: 'Seared Salmon Fillet',
               main: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
               bg: [
                  'bg-[url(@/assets/images/homepage/salmon-mobile@2x.jpg)]',
                  'TB:bg-[url(@/assets/images/homepage/salmon-desktop-tablet@2x.jpg)]',
               ]
            },
            {
               header: 'Rosemary Filet Mignon',
               main: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
               bg: [
                  'bg-[url(@/assets/images/homepage/beef-mobile@2x.jpg)]',
                  'TB:bg-[url(@/assets/images/homepage/beef-desktop-tablet@2x.jpg)]',
               ]
            },
            {
               header: 'Summer Fruit Chocolate Mousse',
               main: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
               bg: [
                  'bg-[url(@/assets/images/homepage/chocolate-mobile@2x.jpg)]',
                  'TB:bg-[url(@/assets/images/homepage/chocolate-desktop-tablet@2x.jpg)]',
               ]
            },
         ]
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
   <article class=" flex flex-col TB:flex-row TB:justify-between gap-9 TB:gap-0 h-[394px] TB:h-full">
      <div
         :class="` TB:relative w-full TB:w-[22.5%] h-[245px] TB:h-[96px] ${store.joinArr(data[dataIndex].bg)} bg-cover bg-center`">
         <div class=" absolute -right-8 top-4 hidden TB:block w-8 h-px bg-neo-beaver"></div>
      </div>
      <div class=" flex flex-col gap-[.375rem] TB:w-[66%] text-center TB:text-left">
         <h3 class=" text-[1.25rem] leading-[1.5rem] tracking-[-.015rem] font-bold">
            {{ data[dataIndex].header }}</h3>
         <p class=" px-8 TB:px-0 text-[1rem] leading-[1.625rem]">
            {{ data[dataIndex].main }}
         </p>
      </div>
   </article>
</template>