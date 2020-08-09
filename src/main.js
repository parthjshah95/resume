import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import checkView from 'vue-check-view'

Vue.use(checkView)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  created(){
    AOS.init();
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  data(){
    return {
      windowWidth: 0
    };
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  render: h => h(App)
}).$mount('#app')
