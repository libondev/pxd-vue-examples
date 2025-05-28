
import { createApp } from 'vue'
// @ts-expect-error
import App from './App.vue'
import './styles.css'

const app = createApp(App)

app.mount('#app')
