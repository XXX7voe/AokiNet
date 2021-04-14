<template>
  <div id="wrap">
      <shop_home_head>
          <div  id="slot-head">
              <span :class="head_text.iconClass" id="slot-span1" @click="backIndex"></span>
              <span id="slot-span2">{{head_text.title}}</span>
              <span class="el-icon-user" :style="{visibility:head_text.isShow}" id="slot-span3"></span>
          </div>
      </shop_home_head>
      <img :src="'//elm.cangdu.org/img/'+detail.image_path" alt="">
      <div>
          {{detail.description}}
      </div>
      <div>
          {{detail.name}}
      </div>
      <div>
          <span>评分</span> 
          <span>
              <el-rate v-model="value1"></el-rate>
          </span>
          <span>{{value1}}</span>
      </div>
      <div>
          {{detail.tips}}
      </div>
      <div>
          评论数：{{detail.rating_count}}
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import shop_home_head from './shop_home_head'
export default {
    name:"shop_detail",
    data() {
        return {
            detail:{},
            value1:0
        }
    },
    computed:{
        ...mapState(["detailObj","head_text"])
    },
    components:{
        shop_home_head
    },
    created() {
        this.detail = this.$route.query;
        this.value1 = Number(this.detail.rating);
    },
    methods:{
        backIndex(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
img{
    width: 100%;
    margin-top: 0.45rem;
}
div{
    margin-bottom: 0.05rem;
}
#wrap{
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px sold black;
    z-index: 10;
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
#wrap>div:nth-of-type(2){
    margin-left: 0.1rem;
    color:gray;
    font-size: 0.1rem;
}
#wrap>div:nth-of-type(3){
    font-size: 0.15rem;
    color: black;
    margin-left: 0.13rem;
    margin-top: 0.1rem;
}
#wrap>div:nth-of-type(4)>span:nth-of-type(1){
    margin-left: 0.15rem;
    font-size: 0.1rem;
    color:gray;
}
#wrap>div:nth-of-type(4)>span:nth-of-type(2){
    display: inline-block;
    font-size: 0.1rem;
    letter-spacing: -10px;
}
#wrap>div:nth-of-type(4)>span:nth-of-type(3){
    display: inline-block;
    font-size: 0.1rem;
    color:rgb(255,148,0);
}
#wrap>div:nth-of-type(5){
    margin-left: 0.1rem;
}
#wrap>div:nth-of-type(6){
    margin-left: 0.1rem;
}
</style>