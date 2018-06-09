// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'

// 引入elementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

// 全局注册组件
// Vue.component('Amy', {
//   template: '<p> i am amy </p>',
//   data(){
//     return{name: 'Amy Lee'}; 
//   }
// })
// import HelloWorld from './components/HelloWorld';
// Vue.component('HelloWorld',HelloWorld);   

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
