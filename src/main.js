import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass as faMagnifyingGlassSolid } from '@fortawesome/free-solid-svg-icons'
import { faBell as faBellSolid } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown as faCaretDownSolid } from '@fortawesome/free-solid-svg-icons'
library.add(faStarSolid, faStarRegular, faMagnifyingGlassSolid, faBellSolid, faCaretDownSolid)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
