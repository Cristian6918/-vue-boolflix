import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

//  import specific icons 
import { faStar as FaFileSolid} from '@fortawesome/free-solid-svg-icons'
import { faStar as FaFileRegular} from '@fortawesome/free-regular-svg-icons'


  /* import font awesome icon component */
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  /* add icons to the library */
library.add(FaFileSolid)
library.add(FaFileRegular)



/* add font awesome icon component */
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  Vue.config.productionTip = false


 

new Vue({
  render: h => h(App),
}).$mount('#app')
