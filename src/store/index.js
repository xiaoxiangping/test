/**
 * Created by Administrator on 2017/12/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VuexLizi from './module/vuexLizi'
import shopping from './module/shoppingModule'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    VuexLizi: VuexLizi,
    shopping: shopping
  }
})
