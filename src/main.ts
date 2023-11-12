import { createApp } from 'vue'
import App from './App.vue'
import components from './components'
// import router from './router'

const app = createApp(App)
app.use(components)
app.mount('#app')
