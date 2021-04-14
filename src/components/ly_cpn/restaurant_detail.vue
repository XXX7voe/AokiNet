<template>
  <div id="wrap" class="animated fadeInRight">
      <shop_home_head>
          <div  id="slot-head">
              <span :class="head_text.iconClass" id="slot-span1" @click="backIndex"></span>
              <span id="slot-span2">{{head_text.title}}</span>
              <span class="el-icon-user" :style="{visibility:head_text.isShow}" id="slot-span3"></span>
          </div>
      </shop_home_head>
      <div id="one">
          <div>活动与属性</div>
          <div>
              <ul>
                  <li v-for="(v,i) in detailObj.activities" :key="i">
                      <span v-text="v.icon_name" :style="{'backgroundColor':'#'+v.icon_color}"></span>
                      <p v-text="v.description"></p>
                  </li>
                  <li v-for="(x,j) in detailObj.supports" :key="j+'j'">
                      <span v-text="x.icon_name" :style="{'backgroundColor':'#'+x.icon_color}"></span>
                      <p v-text="x.description+'(App专享)'"></p>
                  </li>
                  <li style="height:0.15rem"></li>
              </ul>
          </div>
      </div>
      <div id="two">
          <div>食品监督安全公示 <div>企业认证详情<span class="el-icon-arrow-right"></span></div></div>
          <div>
              <div>
                  <img :src="imgObj.url" alt="">
              </div>
              <div>
                  <p>
                      <span>监督检查结果:&nbsp;</span>
                      <span v-text="imgObj.title" :style="{color:'rgb('+imgObj.icon_color+')'}"></span>
                  </p>
                  <span>检查日期:</span>
              </div>
          </div>
      </div>
       <div id="three">
            <div>商家信息</div>
            <div v-text="detail.name"></div>
            <div v-text="detail.address"></div>
            <div>营业时间:[06:30/09:30]</div>
            <div>营业执照</div>
            <div>餐饮许可证</div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import shop_home_head from './shop_home_head'
export default {
    name:"restaurant_detail",
    data() {
        return {
            detail:{},
            imgUrl:[
                {url:require("../../assets/x_better.png"),title:"良好",icon_color:"135,208,60"},
                {url:require("../../assets/x_bad.png"),title:"差",icon_color:"207,34,36"},
            ],
            imgObj:{}
        }
    },
    created(){
        this.detail = this.detailObj;
        this.imgObj = Math.random() > 0.5 ? this.imgUrl[0] : this.imgUrl[1];
        // activities
    },
    computed:{
        ...mapState(["detailObj","head_text"])
    },
    methods:{
        backIndex(){
            this.$router.back();
        }
    },
    components:{
        shop_home_head
    }
}
</script>

<style scoped>
#wrap{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgb(245,245,245);
    overflow: hidden;
    z-index: 5;
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
#one{
    width: 100%;
    background-color: #fff;
    margin-top: 0.48rem;
    /* position: relative;z-index: 5; */
}
#one>div:nth-of-type(1){
    font-size: 0.18rem;
    text-indent: 13px;
    height: 0.373rem;
    line-height: 0.35rem;
    border-bottom: 1px solid lightgray;
}
#one>div:nth-of-type(2){
    width: 100%;
    margin-top: 0.15rem;
    margin-bottom: 0.15rem;
}
#one>div:nth-of-type(2)>ul{
    width: 100%;
    height: 100%;
}

#one>div:nth-of-type(2) li{
    width: 100%;
}
#one>div:nth-of-type(2) li>span{
    display: inline-block;
    width: 0.17rem;
    height: 0.17rem;
    margin-left: 0.15rem;
    color: #fff;
    text-align: center;
    line-height: 0.17rem;
    margin-top: 0.15rem;
    border-radius: 3px;
}
#one>div:nth-of-type(2) li>p{
    display: inline-block;
    margin-left: 0.1rem;
}
#two{
    width: 100%;
    margin-top: -0.03rem;
    background-color: #fff;
}
#two>div:nth-of-type(1){
    font-size: 0.18rem;
    text-indent: 13px;
    height: 0.373rem;
    line-height: 0.35rem;
    position: relative;
}
#two>div:nth-of-type(1)>div{
    position: absolute;
    top: 0;
    right: 0.1rem;
    color: gray;
    font-size: 0.15rem;
}
#two>div:nth-of-type(1)>div>span{
    margin-left: -0.07rem;
}
#two>div:nth-of-type(2){
    width: 100%;
    height: 0.8rem;
    position: relative;
}
#two>div:nth-of-type(2)>div:nth-of-type(1){
    width: 0.53rem;
    height: 0.53rem;
    border-radius: 50%;
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
}
#two>div:nth-of-type(2)>div:nth-of-type(2){
    display: inline-block;
    line-height: 0.3rem;
    height: 0.5rem;
    position: absolute;
    left: 0.8rem;
    top: 0.16rem;
}
#three{
    width: 100%;
    line-height: 0.24rem;
    margin-top: 0.05rem;
  }
#three>div{ 
    font-size: 0.16rem;
    width: 100%;
    border-bottom: 1px solid #e4e4e4;
    padding: 0.1rem;
    margin-left: 0.1rem;
    background-color: #fff;
}
</style>