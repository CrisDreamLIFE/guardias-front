import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Vuetify
import 'vuetify/styles'
import vuetify from './plugins/vuetify'

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
