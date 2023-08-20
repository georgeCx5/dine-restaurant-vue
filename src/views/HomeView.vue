<script setup>
import { useMainStore } from '@/stores/MainStore';
const store = useMainStore()
</script>
<script>
import ButtonManager from '@/components/ButtonManager.vue';
import FirstFeatures from '@/components/FirstFeatures.vue';
import SecondFeatures from '@/components/SecondFeatures.vue';
import ThirdFeatures from '@/components/ThirdFeatures.vue';

import logo from '@/assets/images/logo.svg?url'
import ptDivide from '@/assets/images/patterns/pattern-divide.svg?url'
import ptCurveTL from '@/assets/images/patterns/pattern-curve-top-left.svg?url'
import ptCurveTR from '@/assets/images/patterns/pattern-curve-top-right.svg?url'

export default {
  data() {
    return {
      logo,
      ptDivide,
      bgHero: [
        'bg-[url(@/assets/images/homepage/hero-bg-mobile@2x.jpg)]',
        'TB:bg-[url(@/assets/images/homepage/hero-bg-tablet@2x.jpg)]',
        'DT:bg-[url(@/assets/images/homepage/hero-bg-desktop@2x.jpg)]',
      ],
      bgSection: [
        'bg-[url(@/assets/images/homepage/ready-bg-mobile.jpg)]',
        'TB:bg-[url(@/assets/images/homepage/ready-bg-tablet.jpg)]',
        'DT:bg-[url(@/assets/images/homepage/ready-bg-desktop.jpg)]',
      ],
      ptCurveTL,
      ptCurveTR,
    }
  },
  components: {
    ButtonManager,
    FirstFeatures,
    SecondFeatures,
    ThirdFeatures,
  }
}
</script>
<template>
  <header
    :class="` flex flex-col justify-center DT:justify-start items-center DT:items-start w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] h-[748px] TB:h-[992px] DT:h-[820px] pt-20 TB:pt-36 DT:pt-16 px-6 TB:px-10 DT:px-[10.25rem] ${store.joinArr(bgHero)} bg-cover bg-center text-white text-center DT:text-left`">
    <img class=" h-8 TB:h-10 mb-9 TB:mb-10 DT:mb-[9.5rem] select-none" :src="logo" alt="logo" draggable="false">
    <h1
      class=" DT:w-[50%] mb-5 DT:mb-[.625rem] px-8 TB:px-40 DT:px-0 text-[2rem] TB:text-[3rem] DT:text-[5rem] leading-[2.5rem] TB:leading-[4rem] DT:leading-[5rem] tracking-[-.025rem] TB:tracking-[-.0375rem] DT:tracking-[-0.0625rem] font-light">
      Exquisite dining since 1989</h1>
    <p
      class=" DT:w-[40%] mb-[3.25rem] DT:mb-10 TB:px-14 DT:px-0 text-[1rem] TB:text-[1.25rem] leading-[1.625rem] TB:leading-[1.875rem]">
      Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from
      the comfort of our farmhouse.
    </p>
    <RouterLink to="/booking">
      <ButtonManager btn-type="Dark" btn-text="Book a table" />
    </RouterLink>
  </header>
  <main class=" w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px]">
    <!-- First F -->
    <section
      class=" relative flex flex-col gap-[6.25rem] TB:gap-[7.375rem] DT:gap-[7rem] mt-[-4.5rem] TB:-mt-24 DT:mt-[-4.5rem] DT:-mb-20 pb-[6.25rem] TB:pb-[7.375rem] DT:pb-0 px-6 TB:px-24 DT:px-[10.25rem] overflow-hidden">
      <FirstFeatures :data-index="0" />
      <FirstFeatures :data-index="1" />
      <img class=" absolute top-48 DT:top-72 left-[-385px] DT:left-0 hidden TB:block h-80" :src="ptCurveTR"
        alt="ptCurveTR">
      <img class=" absolute bottom-0 DT:bottom-20 right-[-385px] DT:right-0 hidden TB:block h-80" :src="ptCurveTL"
        alt="ptCurveTL">
    </section>
    <!-- Second F -->
    <section
      class=" flex flex-col DT:flex-row DT:justify-between gap-[5.25rem] TB:gap-[3.375rem] mb-20 TB:mb-[7.5rem] DT:mb-40 px-6 TB:px-0 DT:px-[10.25rem] pt-[4.5rem] pb-[3rem] TB:py-24 DT:pt-[12.5rem] DT:pb-[7.5rem] bg-neo-cod-gray text-white">
      <article class=" flex flex-col items-center DT:items-start DT:w-[40%] TB:px-40 DT:px-0 text-center DT:text-left">
        <img class=" mb-9 TB:mb-10 select-none" :src="ptDivide" alt="pattern divide" draggable="false">
        <h2
          class=" mb-3 TB:mb-7 text-[2rem] TB:text-[3rem] leading-[2.5rem] TB:leading-[3rem] tracking-[-0.025rem] font-bold">
          A few highlights from our menu</h2>
        <p class=" text-[1rem] TB:text-[1.25rem] leading-[1.625rem] TB:leading-[1.875rem]">
          We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
          Our menu is revamped every season.
        </p>
      </article>
      <div class=" flex flex-col gap-6 DT:w-[48.5%] DT:mt-12 TB:px-24 DT:px-0">
        <SecondFeatures :data-index="0" />
        <div class=" w-full h-px bg-white bg-opacity-[.15]"></div>
        <SecondFeatures :data-index="1" />
        <div class=" w-full h-px bg-white bg-opacity-[.15]"></div>
        <SecondFeatures :data-index="2" />
      </div>
    </section>
    <!-- Third F -->
    <section class=" relative flex flex-col DT:flex-row DT:justify-end DT:items-center gap-12 TB:gap-14 DT:gap-[11.5%] mb-[7.75rem] TB:mb-[7.5rem] DT:mb-40 px-6 DT:px-[10.25rem]">
      <ThirdFeatures />
      <img class=" absolute -top-32 DT:-top-40 -left-96 hidden TB:block h-80" :src="ptCurveTR" alt="ptCurveTR">
    </section>
    <!-- Little fourth -->
    <section
      :class="` flex flex-col DT:flex-row justify-center DT:justify-between items-center gap-5 w-full h-[328px] TB:h-[272px] DT:h-[240px] px-6 DT:px-[10.25rem] ${store.joinArr(bgSection)} bg-cover bg-center text-white`">
      <h2
        class=" text-center text-[2rem] TB:text-[3rem] leading-[2.5rem] TB:leading-[3rem] tracking-[-.025rem] font-bold">
        Ready to make a reservation?</h2>
      <RouterLink to="/booking">
        <ButtonManager btn-type="Dark" btn-text="Book a table" />
      </RouterLink>
    </section>
  </main>
</template>
