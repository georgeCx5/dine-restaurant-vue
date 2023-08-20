import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    featureIndex: 0,
    timeVal: 'am',
    isTimeOpen: false,
    peopleCount: 4,
    nameVal: '',
    isRightName: null,
    rgxEmail: new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    emailVal: '',
    isRightEmail: null,
    monthVal: null,
    dayVal: null,
    yearVal: null,
    isRightDate: null,
    hourVal: null,
    minuteVal: null,
    isRightTime: null,
    isSubmitted: false,
  }),
  getters: {
    checkLength(state) {
      return state.nameVal.length
    },
    getLowerMinus(state) {
      return state.peopleCount == 1 ? 'invisible' : ''
    },
    getUpperPlus(state) {
      return state.peopleCount == 10 ? 'invisible' : ''
    },
  },
  actions: {
    joinArr(arrVal) {
      return arrVal.join(' ')
    },
    addPeople() {
      if (this.peopleCount < 10) this.peopleCount++
    },
    reducePeople() {
      if (this.peopleCount > 1) this.peopleCount--
    },
    checkName() {
      this.nameVal.length > 0 ? this.isRightName = true : this.isRightName = false
    },
    checkEmail() {
      if (this.emailVal.length > 0) {
        if (this.rgxEmail.test(this.emailVal)) {
          this.isRightEmail = true
        } else {
          this.isRightEmail = false
        }
      } else {
        this.isRightEmail = false
      }
    },
    checkDate() {
      let arrDataDate = [false, false, false]
      if (this.monthVal > 0 && this.monthVal <= 12) arrDataDate[0] = true
      if (this.dayVal > 0 && this.dayVal <= 31) arrDataDate[1] = true
      if (this.yearVal >= 2023 && this.yearVal <= 2025) arrDataDate[2] = true
      this.isRightDate = !arrDataDate.includes(false)
    },
    checkTime() {
      let arrDataTime = [false, false]
      if (this.hourVal > 0 && this.hourVal <= 12) arrDataTime[0] = true
      if (this.minuteVal > 0 && this.minuteVal <= 59) arrDataTime[1] = true
      this.isRightTime = !arrDataTime.includes(false)
    },
    checkValue(value) {
      let bgColor
      let txtColor
      if (value == false) {
        bgColor = 'bg-neo-error'
        txtColor = 'text-neo-error placeholder:text-neo-error'
      } else {
        bgColor = 'bg-neo-inactive'
        txtColor = 'text-neo-active'
      }
      return { bgColor, txtColor }
    },
    submitForm() {
      let arrData = []
      if (this.isRightName == true) {
        arrData.push(true)
      } else {
        this.isRightName = false
      }
      if (this.isRightEmail == true) {
        arrData.push(true)
      } else {
        this.isRightEmail = false
      }
      if (this.isRightDate == true) {
        arrData.push(true)
      } else {
        this.isRightDate = false
      }
      if (this.isRightTime == true) {
        arrData.push(true)
      } else {
        this.isRightTime = false
      }
      arrData.length >= 4 ? this.isSubmitted = true : this.isSubmitted = false
    }
  }
})
