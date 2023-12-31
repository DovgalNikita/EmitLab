import { createApp } from 'vue'
import App from './App.vue'
import components from './components'
import { store } from './store'
// import router from './router'

const app = createApp(App)
app
    .use(store)
    .use(components)
    .mount('#app')
