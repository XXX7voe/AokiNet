<template>
  <div id="wrap">
      <shop_home_head>
          <div  id="slot-head">
              <span class="el-icon-arrow-left" id="slot-span1" @click="backIndex"></span>
              <span id="slot-span2">选择发票抬头</span>
              <span class="el-icon-user" style="visibility:hidden" id="slot-span3"></span>
          </div>
      </shop_home_head>
      <div class="div2">
          <span>不需要开发票</span>
          <span class="el-icon-success"></span>
          <div>确定</div>
      </div>
  </div>
</template>

<script>
import shop_home_head from './shop_home_head'
export default {
    name:"shop_invoice",
    components:{
        shop_home_head
    },
    methods: {
        backIndex(){
            this.$router.back();
        }
    },
}
</script>

<style scope>
#wrap{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(245,245,245);
}
#slot-head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0.1rem;
}
#slot-head>span{
    font-size: 0.21rem;
    color: white;
    line-height: 0.45rem;
}
#slot-head>span:nth-of-type(2){
     font-size: 0.2rem;
}
.div2{
    width: 100%;
    height: 0.6rem;
    margin-top: 0.53rem;
    background-color: #fff;
    line-height: 0.6rem;
    position: relative;
}
.div2>span:nth-of-type(1){
    font-size: 0.185rem;
    margin-left: 0.2rem;
}
.div2>span:nth-of-type(2){
    font-size: 0.23rem;
    position: absolute;
    right:0.13rem;
    top: 0.17rem;
}
.div2>div{
    width: 94%;
    height: 0.43rem;
    font-size: 0.17rem;
    text-align: center;
    line-height: 0.43rem;
    color: #fff;
    font-weight: bold;
    position: absolute;
    left: 0.12rem;
    bottom: -0.55rem;
    background-color: rgb(0,220,110);
    border-radius: 5px;
}
</style>