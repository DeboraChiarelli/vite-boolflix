import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass as faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faStarSolid, faStarRegular, faMagnifyingGlass)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
