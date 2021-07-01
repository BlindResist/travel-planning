import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('breakLine', (string: string): string => {
    return string.replace(/(?:\r\n|\r|\n)/g, '<br>')
})

Vue.filter('date', (date: number, format = 'DD.MM.YYYY'): string => {
    return dayjs.unix(date).format(format)
})
