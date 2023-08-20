<script>
import { RouterLink, RouterView } from 'vue-router'
import logo from '@/assets/images/logo.svg?url'
export default {
  data() {
    return {
      logo,
    }
  }
}
</script>

<template>
  <body class=" flex flex-col items-center bg-white text-neo-ebony-clay font-spartan">
    <RouterView />
    <footer class=" w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] bg-neo-cod-gray text-white">
      <div class=" flex flex-col TB:flex-row items-center TB:items-start gap-10 TB:gap-[18.5%] DT:gap-[17.25%] TB:px-10 DT:px-[165px] py-20 TB:py-16 DT:py-20">
        <img class=" select-none" :src="logo" alt="logo" draggable="false">
        <div class=" flex flex-col DT:flex-row gap-8 DT:gap-[8rem] text-center TB:text-left text-[.875rem] leading-[1.75rem] tracking-[.125rem] uppercase">
          <div>
            <p>Marthwaite, Sedbergh</p>
            <p>Cumbria</p>
            <p>+00 44 123 4567</p>
          </div>
          <div>
            <p>Open Times</p>
            <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
            <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </div>
    </footer>
  </body>
</template>