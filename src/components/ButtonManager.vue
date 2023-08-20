<script>
export default {
   data() {
      return {

      }
   }, computed: {
      getType() {
         if (this.btnType == 'Light') {
            return 'bg-neo-cod-gray hover:bg-transparent hover:text-neo-cod-gray border border-neo-cod-gray'
         }
         if (this.btnType == 'Dark') {
            return 'hover:bg-white hover:text-neo-cod-gray border border-white'
         }
      },
      getWsize() {
         return this.isWsizeFull ? 'w-full' : 'w-[245px]'
      }
   },
   props: {
      btnType: {
         String,
         required: true,
      },
      btnText: {
         String,
         default: 'Empty'
      },
      isWsizeFull: {
         Boolean,
         default: false,
      }
   }
}
</script>
<template>
   <button
      :class="` ${getWsize} h-16 ${getType} text-white text-[1rem] leading-[1rem] tracking-[0.15rem] font-semibold uppercase select-none`">
      {{ btnText }}
   </button>
</template>