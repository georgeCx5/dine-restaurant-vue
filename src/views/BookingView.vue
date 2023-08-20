<script>
import { useMainStore } from '@/stores/MainStore';
import { mapStores } from 'pinia';

import ButtonManager from '../components/ButtonManager.vue';
import DropdownTime from '../components/DropdownTime.vue';
import logo from '@/assets/images/logo.svg?url'
import iconMinus from '@/assets/images/icons/icon-minus.svg?url'
import iconPlus from '@/assets/images/icons/icon-plus.svg?url'
import ptCurve from '@/assets/images/patterns/pattern-curve-bottom-right.svg?url'
import ptLines from '@/assets/images/patterns/pattern-lines.svg?url'

export default {
   data() {
      return {
         logo,
         iconMinus,
         iconPlus,
         ptCurve,
         ptLines,
         bgHero: [
            'bg-[url(@/assets/images/booking/hero-bg-mobile.jpg)]',
            'TB:bg-[url(@/assets/images/booking/hero-bg-tablet.jpg)]',
            'DT:bg-[url(@/assets/images/booking/hero-bg-desktop.jpg)]',
         ]
      }
   },
   components: {
      ButtonManager,
      DropdownTime,
   },
   computed: {
      ...mapStores(useMainStore),
   }
}
</script>
<template>
   <header
      :class="` relative flex flex-col justify-start items-center DT:items-start w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] h-[600px] mb-[534px] TB:mb-[435px] DT:mb-[320px] px-6 TB:px-10 DT:px-[10.25rem] ${mainStore.joinArr(bgHero)} bg-cover bg-center text-white text-center DT:text-left`">
      <img class=" absolute left-0 bottom-[-320px] hidden DT:block w-[69%]" :src="ptCurve" alt="pattern">
      <!-- Form -->
      <Transition name="fade">
         <div v-if="!mainStore.isSubmitted" class=" relative top-0 DT:self-end w-full TB:w-[540px] z-20">
            <img class=" absolute left-[-12%] bottom-[-825px] hidden DT:block z-30" :src="ptLines" alt="pattern">
            <div
               class=" absolute top-[463px] TB:top-[370px] DT:top-[258px] w-full p-8 TB:p-12 bg-white text-neo-inactive text-[1.25rem] leading-[1.75rem] shadow-xl TB:shadow-2xl select-none z-40">
               <!-- Name -->
               <div class=" relative flex flex-col gap-3 mb-[2.125rem]">
                  <input @blur="mainStore.checkName()" @keydown="mainStore.isRightName = true"
                     :class="` px-4 placeholder:text-neo-inactive ${mainStore.checkValue(mainStore.isRightName).txtColor} focus:outline-none`"
                     type="text" placeholder="Name" v-model="mainStore.nameVal">
                  <div :class="` w-full h-px ${mainStore.checkValue(mainStore.isRightName).bgColor}`"></div>
                  <h5 v-show="mainStore.isRightName == false"
                     class=" absolute bottom-[-20px] px-4 text-neo-error text-[.625rem] leading-[.625rem] tracking-[-.0075rem]">
                     This field is required</h5>
               </div>
               <!-- Email -->
               <div class=" relative flex flex-col gap-3 mb-[2.125rem]">
                  <input @blur="mainStore.checkEmail()" @keydown="mainStore.isRightEmail = true"
                     :class="` px-4 ${mainStore.checkValue(mainStore.isRightEmail).txtColor} focus:outline-none`"
                     type="email" placeholder="Email" v-model="mainStore.emailVal">
                  <div :class="` w-full h-px ${mainStore.checkValue(mainStore.isRightEmail).bgColor}`"></div>
                  <h5 v-show="mainStore.isRightEmail == false"
                     class=" absolute bottom-[-20px] px-4 text-neo-error text-[.625rem] leading-[.625rem] tracking-[-.0075rem]">
                     This field is required</h5>
               </div>
               <!-- Pick a date -->
               <div class=" relative flex flex-col TB:flex-row TB:justify-between items-start gap-2 mb-[2.125rem]">
                  <h4 :class="` TB:self-center TB:w-[90px] ${mainStore.checkValue(mainStore.isRightDate).txtColor}`">
                     Pick a date</h4>
                  <h5 v-show="mainStore.isRightDate == false"
                     class=" absolute bottom-[-20px] text-neo-error text-[.625rem] leading-[.625rem] tracking-[-.0075rem]">
                     This field is incomplete/incorrect</h5>
                  <div class=" flex justify-between w-full TB:w-[65%]">
                     <div class=" flex flex-col gap-[.875rem] w-[27.75%]">
                        <input @blur="mainStore.checkDate()" @keydown="mainStore.isRightDate = true"
                           :class="` w-full px-4 ${mainStore.checkValue(mainStore.isRightDate).txtColor} uppercase focus:outline-none`"
                           type="number" placeholder="mm" v-model="mainStore.monthVal" :min="1" :max="12">
                        <div :class="` w-full h-px ${mainStore.checkValue(mainStore.isRightDate).bgColor}`"></div>
                     </div>
                     <div class=" flex flex-col gap-[.875rem] w-[27.75%]">
                        <input @blur="mainStore.checkDate()" @keydown="mainStore.isRightDate = true"
                           :class="` w-full px-4 ${mainStore.checkValue(mainStore.isRightDate).txtColor} uppercase focus:outline-none`"
                           type="number" placeholder="dd" v-model="mainStore.dayVal" :min="1" :max="31">
                        <div :class="` w-full h-px ${mainStore.checkValue(mainStore.isRightDate).bgColor}`"></div>
                     </div>
                     <div class=" flex flex-col gap-[.875rem] w-[33.5%]">
                        <input @blur="mainStore.checkDate()" @keydown="mainStore.isRightDate = true"
                           :class="` w-full px-4 ${mainStore.checkValue(mainStore.isRightDate).txtColor} uppercase focus:outline-none`"
                           type="number" placeholder="yyyy" v-model="mainStore.yearVal" :min="2023" :max="2025">
                        <div :class="` w-full h-px ${mainStore.checkValue(mainStore.isRightDate).bgColor}`"></div>
                     </div>
                  </div>
               </div>
               <!-- Pick a time -->
               <div class=" relative flex flex-col TB:flex-row TB:justify-between items-start gap-2 mb-9">
                  <h4 :class="` TB:self-center TB:w-[90px] ${mainStore.checkValue(mainStore.isRightTime).txtColor}`">
                     Pick a time</h4>
                  <h5 v-show="mainStore.isRightTime == false"
                     class=" absolute bottom-[-20px] text-neo-error text-[.625rem] leading-[.625rem] tracking-[-.0075rem]">
                     This field is incomplete/incorrect</h5>
                  <div class=" flex justify-between w-full TB:w-[65%]">
                     <div class=" flex flex-col gap-[.875rem] w-[27.75%]">
                        <input @blur="mainStore.checkTime()" @keydown="mainStore.isRightTime = true"
                           :class="` w-full px-4 ${mainStore.checkValue(mainStore.isRightTime).txtColor} focus:outline-none`"
                           type="number" placeholder="09" v-model="mainStore.hourVal" :min="0" :max="12">
                        <div class=" w-full h-px bg-neo-inactive"></div>
                     </div>
                     <div class=" flex flex-col gap-[.875rem] w-[27.75%]">
                        <input @blur="mainStore.checkTime()" @keydown="mainStore.isRightTime = true"
                           :class="` w-full px-4 ${mainStore.checkValue(mainStore.isRightTime).txtColor} focus:outline-none`"
                           type="number" placeholder="00" v-model="mainStore.minuteVal" :min="0" :max="59">
                        <div :class="` w-full h-px ${mainStore.checkValue(mainStore.isRightTime).bgColor}`"></div>
                     </div>
                     <div class=" flex flex-col gap-[.875rem] w-[33.5%]">
                        <DropdownTime />
                        <div class=" w-full h-px bg-neo-inactive"></div>
                     </div>
                  </div>
               </div>
               <!-- People counter -->
               <div class=" flex flex-col gap-4 mb-8">
                  <div class=" flex justify-between items-center px-6 select-none">
                     <button @click="mainStore.reducePeople()" class=" h-full p-2">
                        <img :class="mainStore.getLowerMinus" :src="iconMinus" alt="iconMinus">
                     </button>
                     <h4 class=" text-neo-mirage leading-6 tracking-[-.015rem] font-bold">
                        {{ mainStore.peopleCount }} people</h4>
                     <button @click="mainStore.addPeople()" class=" h-full p-2">
                        <img :class="mainStore.getUpperPlus" :src="iconPlus" alt="iconPlus">
                     </button>
                  </div>
                  <div class=" w-full h-px bg-neo-inactive"></div>
               </div>
               <ButtonManager @click="mainStore.submitForm()" btn-type="Light" btn-text="Make reservation"
                  :is-wsize-full="true" />
            </div>
         </div>
      </Transition>
      <!-- - -->
      <RouterLink class=" self-start mt-14 DT:mt-16 mb-11 TB:mb-[4.5rem] DT:mb-[9.5rem]" to="/">
         <img class=" h-8 TB:h-10 select-none " :src="logo" alt="logo" draggable="false">
      </RouterLink>
      <div class=" DT:w-[40%]">
         <h1
            class=" mb-3 text-[2rem] TB:text-[3rem] DT:text-[5rem] leading-[2.5rem] TB:leading-[4rem] DT:leading-[5rem] tracking-[-.025rem] TB:tracking-[-.0375rem] DT:tracking-[-.0625rem] font-light">
            Reservations</h1>
         <p class=" mb-5 TB:px-[3.75rem] DT:px-0 text-[1rem] TB:text-[1.25rem] leading-[1.625rem] TB:leading-[1.875rem]">
            We can’t wait to host you. If you have any special requirements please feel free to
            call on the phone number below. We’ll be happy to accommodate you.
         </p>
      </div>
      <ButtonManager btn-type="Dark" btn-text="Reserve place" class=" TB:hidden" />
   </header>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
   transition: opacity 1s ease-in-out
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}
</style>