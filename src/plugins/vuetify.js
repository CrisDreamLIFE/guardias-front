import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VApp, VAppBar, VMain, VContainer, VRow, VCol, VCheckbox, VBtn, VProgressCircular, VSelect, VCard } from 'vuetify/components'


const vuetify = createVuetify({
  ssr: true,
  components: {
    VApp,
    VAppBar,
    VMain,
    VContainer,
    VRow,
    VCol,
    VCheckbox,
    VBtn,
    VProgressCircular,
    VSelect,
    VCard,
  },
})

export default vuetify;