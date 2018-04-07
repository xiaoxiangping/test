<template>
    <div id="container">
      <h3 v-text="iPhone6S.name"></h3>
      <div id="container_left">
        <img :src="iPhone6S.activeStyleUrl" alt="">
      </div>
      <div id="container_right">
        <div>
          <div id="describe">
            <h3>描素 :</h3>
            <p v-text="iPhone6S.desc"></p>
          </div>
          <div class="color">
            <h3>颜色 :</h3>
            <div :class="{'active':color == index}" @click="changeColor(index)" v-for="(item,index) in iPhone6S.style" v-text="index"></div>
          </div>
          <div id="storage">
            <h3>内存 :</h3>
            <div :class="{'active':storage == index}" @click="changeStorage(index)"  v-for="(item,index) in iPhone6S.storage" v-text="index"></div>
          </div>
          <div id="price">
            <h3>价钱 :</h3>
            <p v-text="iPhone6S.price"></p>
          </div>
        </div>
        <div>
          <button @click="toShopping">加入购物车</button>
        </div>
      </div>
      </div>
    </div>
</template>
<style>
  #container{
    outline: 1px solid #43ff17;
  }
  #container_left{
    margin-left:10%;
    outline: 1px solid red;
    float: left;
  }
  #container_right{
    text-align: left;
    outline: 1px solid #2c4aff;
    float: left;
    margin-left: 10%;
  }
  .color>div{
    float: left;
    padding: 10px;
    border:1px solid black;
    line-height: 18px;
    margin-right: 10px;
  }
  #price{
    clear: both;
  }
  #storage,.color{
    overflow: hidden;
  }
  #storage>div{
    border:1px solid black;
    float: left;
    margin-right: 10px;
    padding: 10px;
    line-height: 18px;
  }
  #container_right>div{
    margin: 60px 0 0 10%;
  }
  #container_right>div button{
    padding: 10px 20px;
    background-color: red;
    margin-left: 200px;
  }
  .active{
    border:1px solid red!important;
  }
</style>
<script>
  import * as types from '../store/types'
  export default{
    data () {
      return {
        iPhone6S:{},
        color:"",
        storage:"",
      }
    },
    methods:{
      changeColor(index){
        this.color = index
      },
      changeStorage(index){
        this.storage = index
        this.iPhone6S.price = this.iPhone6S.storage[index]
  },
      toShopping(){
        let shopObj = {
          color:this.color,
          storage:this.storage,
          price:this.iPhone6S.price
        }
        //需要去操作vuex的state的car数组(要去触发actions的方法)
        this.$store.dispatch(types.ACTIONS_ADD_SHOPPINGCAR,shopObj)
        this.$router.push({ path: '/ShoppingCar'})
      }
    },
    components: {},
    created(){
      this.iPhone6S = this.$store.state.shopping.iPhone6S
    }
  }
</script>
