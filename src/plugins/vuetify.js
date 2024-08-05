import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VApp, VAppBar, VMain, VContainer, VRow, VCol, VCheckbox, VBtn, VProgressCircular, VSelect } from 'vuetify/components'


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
  },
})

export default vuetify;