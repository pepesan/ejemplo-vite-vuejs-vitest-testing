import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vYellowBackground from './directives/v-yellow-background';

const app = createApp(App);
app.directive('yellow-background', vYellowBackground);
app.mount('#app')
