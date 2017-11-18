import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', function (value) {
  if (value) {
    return moment(String(value)).format('DD.MM.')
  }
})

Vue.filter('time', function (value) {
  if (value) {
    return moment(String(value)).format('HH:mm')
  }
})

Vue.filter('year', function (value) {
  if (value) {
    return moment(String(value)).format('YYYY')
  }
})
