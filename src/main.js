import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDa7Nfvc3joVS0A8tk5cdYztBKE752W39o',
    },
}).mount('#app')

import "bootstrap/dist/js/bootstrap";
