<template>
    <div>
      <div id="mydiv">
        {{mystate}}
        <div id="mydiv1" v-show="mystateComputed">
          {{mystate}}
        </div>
        <button @click="clickNone">点击消失</button>
      </div>
    </div>
</template>
<style scoped>
  #mydiv{
    width: 200px;
    height: 100px;
    border: 1px solid red;
    margin: 20px;
  }
  #mydiv1{
    width: 50px;
    height: 50px;
    border: 1px solid red;
    margin: 20px;
  }
</style>
<script>
  export default{
    props:['fatherState'],
    data () {
      return {
        msg: 'hello vue',
        mystate:this.$store.state.VuexLizi.mystate
      }
    },
    computed: {
      mystateComputed () {
        return this.$store.state.VuexLizi.mystate
      }
    },
    methods:{
      clickNone(){
        this.$store.dispatch('changeActions')
      }
    },
    components: {},
    created(){
      console.log(this.$store.state.VuexLizi.mystate)
//      this.mystate = this.$store.state.VuexLizi.mystate
    }
  }
</script>
