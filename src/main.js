// FILE: main.js
import { createApp } from 'vue'
import { Quasar } from 'quasar'

//Import language (actually i dont know what will happened)
import quasarLang from 'quasar/lang/zh-CN'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

//导入vueRouter
import router from './router/router'



const myApp = createApp(App)
myApp.use( router)
myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
})

myApp.mount('#app')

