<template>
  <div id="wrap" class="animated fadeIn">
      <div id="head">
          <i class="el-icon-arrow-left"
          style="position:absolute;left:0.05rem;top:0.05rem;font-size:0.23rem;z-index:5;"
          @click="backIndex"
          ></i>
          <img :src="'http://elm.cangdu.org/img/'+detail.image_path" alt="">
          <div> 
              <img :src="'http://elm.cangdu.org/img/'+detail.image_path" alt="">
          </div>
          <div>
            <h3 v-text="detail.name"></h3>
            <h4>商家配送&nbsp;/&nbsp; 分钟送达&nbsp; /&nbsp; {{detail.piecewise_agent_fee.tips}}</h4>
            <h5>公告: {{detail.promotion_info}}</h5>
            <span class="el-icon-arrow-right"  @click="linkRestaurantDetail"></span>
          </div>
          <div></div>
          <div v-for="(v,i) in huodong.data" :key="i">
                 <span><span :style="{backgroundColor:'#'+v.icon_color}">{{v.icon_name}} &nbsp;</span> {{v.description}}&nbsp;&nbsp;(App专享)</span>
                 <span>{{huodong.count}}个活动&nbsp;<span :style="{fontSize:'0.14rem'}" class="el-icon-arrow-right" @click="linkActivityDetail(v,i)"></span></span>        
          </div>
      </div>
      <div id="center">
          <div>
              <span @click="linkShangPin">商品</span>
          </div>
          <div>
              <span @click="linkPingJia">评价</span>
          </div>
      </div>
      <!-- <div id="chengkai"></div> -->
      <!-- <keep-alive include="detail_page_left"> -->
          <!-- <keep-alive> -->
              <div id="aaa">
                <router-view></router-view>  
              </div>
      
      <!-- </keep-alive> -->
      
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:"detail_page",
    data() {
        return {
            detail:{},
            huodong:{
                count:0,
                data:[]
            }
        }
    },
    created(){
        this.detail = this.detailObj;
        if(this.detail.activities){
            for(let i=0;i<this.detail.activities.length;i++){
             this.huodong.count = this.detail.activities.length;
             this.huodong.data.push(this.detail.activities[0])
             return;
            }
        }
    },
    methods:{
        backIndex(){
            this.$router.push({
                path:"/shop_home_page"
            });
            this.$store.commit({
                type:"setHeadText",
                query:{
                    iconClass:"el-icon-search",
                    title:this.addressObj.name,
                    isShow:"visible"
                }
            })
        },
        linkPingJia(){
            document.querySelector("#center>div:nth-of-type(2)>span").style.borderBottom = "3px solid rgb(59,127,222)"
            document.querySelector("#center>div:nth-of-type(1)>span").style.borderBottom = "none"
            this.$router.push({
                path:"/detail_page_right"
            });
        },
         linkShangPin(){
             document.querySelector("#center>div:nth-of-type(1)>span").style.borderBottom = "3px solid rgb(59,127,222)"
             document.querySelector("#center>div:nth-of-type(2)>span").style.borderBottom = "none"
            this.$router.push({
                path:"/detail_page_left",
                query:this.detailObj
            });
        },
        linkRestaurantDetail(v,i){
            this.$router.push({
                path:"/restaurant_detail"
            })
            this.$store.commit({
                type:"setHeadText",
                query:{
                    iconClass:"el-icon-arrow-left",
                    title:"商家详情",
                    isShow:"hidden"
                }
            })
        },
        linkActivityDetail(v,i){
            this.$router.push({
                path:"/activity_detail"
            })
        }
    },
    computed:{
        ...mapState(["detailObj","addressObj"])
    },
    mounted() {
        document.getElementById("center").style.top =  document.getElementById("head").offsetHeight+"px";
        document.getElementById("aaa").style.marginTop =
         document.getElementById("head").offsetHeight+
         document.getElementById("center").offsetHeight+"px";
        //  document.getElementById("aaa").style.marginTop = document.getElementById("head").offsetHeight+"px";
        //     console.log(document.getElementById("head").offsetHeight)
    },
}
</script>

<style scoped>
img{
    width: 100%;
}
#chengkai{
    width: 100%;
    height: 0;
}
#aaa{
    width: 100%;
}
#wrap{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(246,246,246);
}
#head{
    width: 100%;
    position: fixed;
    overflow: hidden;
    top: 0;
    z-index: 3;
}
#head>img{
    position: absolute;
    top:0;
     filter:blur(8px) brightness(80%);
}
#head>div:nth-of-type(1){
    width: 0.66rem;
    height: 0.66rem;
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
    border-radius: 6px;
    overflow: hidden;
    /* z-index: 3; */
}
#head>div:nth-of-type(2){
    width: 2.8rem;
    height: 90%;
    position: absolute;
    left: 0.86rem;
    z-index: 3;
}
#head>div:nth-of-type(2)>h3{
    font-size: 0.175rem;
    font-weight: bold;
    color:#fff;
    position: absolute;
    top: 0.07rem;
}
#head>div:nth-of-type(2)>h4{
    font-size: 0.12rem;
    position: absolute;
    top: 0.4rem;
    color:#fff;
}
#head>div:nth-of-type(2)>h5{
    font-size: 0.12rem;
    position: absolute;
    top: 0.63rem;
    color:#fff;
}
#head>div:nth-of-type(2)>span{
    font-size: 0.24rem;
    position: absolute;
    top: 0.43rem;
    right: -0.05rem;
    z-index: 3;
    color: #fff;
}
#head>div:nth-of-type(3){
    position: relative;
    z-index: 3;
    margin-bottom: 0.1rem;
    margin-top: 0.9rem;
    margin-left: 0.1rem;
}
#head>div:nth-of-type(4){
    color: #fff;
    position: relative;
    z-index: 3;
    font-size: 0.12rem;
    margin-bottom: 0.1rem;
    margin-top: 0.9rem;
    margin-left: 0.1rem;
}
#head>div:nth-of-type(4) span:nth-of-type(1)>span{
    display: inline-block;
    width: 0.15rem;
    height: 0.15rem;
    text-align: center;
    line-height: 0.15rem;
    /* background-color: rgb(235,117,110); */
    font-size: 0.11rem;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    top: 0.029rem;
}
#head>div:nth-of-type(4) span:nth-of-type(2){
    position: absolute;
    top: 50%;
    right:0.1rem ;
    transform:translateY(-50%);
}
#center{
    width: 100%;
    height: 0.5rem;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    position: fixed;
    /* top: 0.905rem; */
    z-index: 3;
}
#center>div{
    width: 50%;
    height: .5rem;
    box-sizing: border-box;
    text-align: center;
}
#center>div:nth-of-type(1)>span{
    border-bottom: 3px solid rgb(59,127,222);
}
#center>div>span{
    display: inline-block;
    font-size: 0.18rem;
    margin-top: 0.1rem;
}
</style>