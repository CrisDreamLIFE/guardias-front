import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Vuetify
import 'vuetify/styles'
import vuetify from './plugins/vuetify'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

// const vuetify = createVuetify({
//   components,
//   directives,
// })

app.use(router)
app.use(vuetify)
app.mount('#app')
