<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <vuexlizi :fatherState="fatherState"></vuexlizi>
    <vuexlizi :fatherState="fatherState"></vuexlizi>
    <!--<vuexlizi></vuexlizi>-->
    <!--<vuexlizi></vuexlizi>-->
    <!--<vuexlizi></vuexlizi>-->
    <button @click="clickMe()">点击我全部消失</button>
  </div>
</template>

<script>
  import vuexlizi from './vuexLizi.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fatherState:true
    }
  },
  components:{
    vuexlizi:vuexlizi
  },
  methods:{
    clickMe(){
      console.log(this.$store.state.VuexLizi.mystate)
      //修改状态机里的状态
      this.$store.dispatch('changeActions')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
