import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faInstagram, faLinkedin, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
