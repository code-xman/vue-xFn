import DatePicker from './datePicker.vue'

DatePicker.install = function (vue) {
  vue.component(DatePicker.name, DatePicker)
}

export default DatePicker
