/**
 * Created by Administrator on 2017/12/28.
 */
import * as types from '../types'

const state = {
  iPhone6S: {
    name: 'Apple/苹果 iPhone 6S',
    desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
    price: '5288 - 6888',
    isSelected: true,
    style: {
      '银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
      '深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
      '金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
      '玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
    },
    activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
    storage: {
      '16GB': 5288,
      '64GB': 6088,
      '128GB': 6888
    }
  },
  car:[]
}
const actions = {
  //操作mutations的方法,让这个方法去操作state
  [types.ACTIONS_ADD_SHOPPINGCAR](context,shopping){
    // 在这里做判断
    if(state.car.length == 0 ){
      console.log("进入length判断")
      shopping.num = 1
      context.commit(types.MUTATIONS_ADD_SHOPPINGCAR,shopping)
    }else {
      state.car.forEach(key=>{
        console.log(key)
        if(key != shopping){
          console.log("进入对象判断")
          shopping.num = 1
          context.commit(types.MUTATIONS_ADD_SHOPPINGCAR,shopping)
        }else {
          console.log("进入对象else判断")
          key.num++
        }
      })
    }
  }

}
const mutations = {
  [types.MUTATIONS_ADD_SHOPPINGCAR](state,car){
    state.car.push(car)
  }
}
export default {
  state,
  actions,
  mutations
}





