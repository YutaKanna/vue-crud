import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //ここはindex.jsを書かなくても自動的にindex.jsを意味する

createApp(App).use(router).mount('#app')
