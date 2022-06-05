import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App).use(VueGoogleMaps, {
    load: {
        key: 'apiKey',
    },
}).mount('#app')

import "bootstrap/dist/js/bootstrap";
