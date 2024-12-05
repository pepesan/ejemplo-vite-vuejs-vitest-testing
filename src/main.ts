import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vYellowBackground from './directives/v-yellow-background';
import vRedBackground from './directives/v-red-background';

const app = createApp(App);
// cargo una directiva para usarla en cualquier parte de la jerarquía de componentes
app.directive('yellow-background', vYellowBackground);
// cargo una directiva para usarla en cualquier parte de la jerarquía de componentes
app.directive('red-background', vRedBackground);
app.mount('#app')
