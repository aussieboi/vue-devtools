import Vue from 'vue'
import store from './store'
import Target from './Target.vue'
import Other from './Other.vue'
import Counter from './Counter.vue'
import NativeTypes from './NativeTypes.vue'
import Events from './Events.vue'
import MyClass from './MyClass.js'
import Router from './Router.vue'
import router from './router'

const items = []
for (var i = 0; i < 100; i++) {
  items.push({ id: i })
}

const circular = {}
circular.self = circular

new Vue({
  store,
  router,
  render (h) {
    return h('div', null, [h(Counter)])
  },
  data: {
    obj: {
      items: items,
      circular
    }
  }
}).$mount('#app')

// custom element instance
