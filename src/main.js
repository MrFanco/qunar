// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'

import store from './store'

// 点击延迟问题解决方案
import fastClick from 'fastclick'

import 'swiper/dist/css/swiper.css'

// 统一样式
import 'styles/reset.css'
// 1像素边框
import 'styles/border.css'

import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // es6的语法，实际上等于{App : App}，定义了一个局部组件
  // es6中，键和值一样时可以写一个
  components: { App },
  template: '<App/>'
})

// 路由就是根据网址的不同，返回不同的页面
