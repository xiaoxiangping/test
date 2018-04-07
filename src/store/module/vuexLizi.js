/**
 * Created by Administrator on 2017/12/27.
 */
const state = {
  mystate:true
}
const actions = {
  changeActions (context){  //触发mutations对象里面改变state的方法
    console.log(actions)
    context.commit("changeState")
  }
}
const mutations = {
  changeState (state){  //最终改变状态的方法
    console.log(state.mystate)
    state.mystate = !state.mystate
    console.log(state.mystate)
  }
}
export default {
  state,
  actions,
  mutations
}
