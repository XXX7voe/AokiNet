<template>
  <div id="wrap">
     <div>
        <div>
          <input type="text" v-model="keyword" placeholder="请输入商家或美食名称">
          <button @click="submitClick">提交</button>
          <span v-if="keyword.length > 0" @click="clearKeyword" class="el-icon-close"></span>
        </div>
     </div>
        <div id="oneDiv">
          <span>{{title}}</span>
        </div>
        <div id="twoDiv" v-if="twoDivIsShow">
          <ul>
            <li v-for="(v,i) in arr" :key="i" @click="linkDetail(v)">
              <div>
                <img :src="'http://elm.cangdu.org/img/'+v.image_path" alt="">
              </div>
              <div>
                <!-- http://elm.cangdu.org/img/16a6143162933804.jpg
                http://elm.cangdu.org/img/16fad6c93b163149.png -->
                <span v-text="v.name"></span>
                <span>支付</span>
              </div>
              <div>
                <span>月售{{v.recent_order_num}}单</span>
              </div>
              <div>
                <span>{{v.float_minimum_order_amount}}元起送 / 距离{{v.distance}}</span>
              </div>
            </li>
          </ul>
    </div>
    <div id="threeDiv" v-if="threeDivIsShow">
      <ul>
        <li v-for="(a,b) in historys" :key="b" @click="historyClick(a)">
          <span v-text="a"></span>
          <span class="el-icon-close" @click="closeHistory(b)"></span>
        </li>
        <p class="clearHistory" v-if="historys.length > 0" @click="clearHistorys">清空搜索历史</p>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:"shop_serch",
   data() {
     return {
       keyword:"",
       arr:[],
       twoDivIsShow:false,
       threeDivIsShow:true,
       title:"搜索历史",
       historys:[]
     }
   },
   created() {
     this.city = this.cityObj.cityObj
     this.historys = this.serchHistory;
   },
   methods: {
     submitClick(){
       this.title = "商家";
       this.threeDivIsShow = false;
       this.twoDivIsShow = true;
       this.$request({
         url:"/v4/restaurants?geohash="+this.city.latitude+","+this.city.longitude+"&keyword="+this.keyword+""
       }).then(res => {
         this.arr = res;
       })
       //储存历史记录
       this.$store.commit("setSerchHistory",this.keyword);
     },
     clearKeyword(){
       this.keyword = "";
       this.twoDivIsShow = false;
       this.threeDivIsShow = true;
       this.title = "搜索历史";
     },
     closeHistory(i){
       this.$store.commit("deleteSerchHistory",i);
     },
     clearHistorys(){
       this.$store.commit("clearSerchHistory")
       this.historys = this.serchHistory;
     },
     historyClick(a){
       this.keyword = a;
       this.submitClick()
     },
     linkDetail(v){
       this.$store.commit("setDetailObj",v);
        this.$router.push({
          path:"/detail_page",
        })
     }
   },
   computed:{
     ...mapState(["cityObj","serchHistory"])
   }
}
</script>

<style scoped>
img{
  width: 100%;
}
#wrap{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(245,245,245);
}
#wrap>div:nth-of-type(1){
  width: 100%;
  height: 0.6rem;
  background-color: #fff;
  margin-top: 0.45rem;
  position: relative;
}
#wrap>div:nth-of-type(1)>div{
  width: 95%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
#wrap>div:nth-of-type(1)>div>input{
  width: 75%;
  outline: none;
  border: none;
  height: 0.37rem;
  border-radius: 5px;
  font-size: 0.15rem;
  text-indent: 10px;
  background-color: rgb(242,242,242);
  color: black;
  font-weight: bold;
}
#wrap>div:nth-of-type(1)>div>button{
  width: 22.5%;
  height: 0.35rem;
  background-color: rgb(0,146,232);
  color: #fff;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-size: 0.15rem;
}
#wrap>div:nth-of-type(1)>div>span{
  position: absolute;
  color: rgb(40,100,163);
  right: 0.95rem;
  top: 0.11rem;
  font-size: 0.15rem;
  font-weight: bold;
}
#oneDiv{
  width: 100%;
  height: 0.5rem;
  line-height: 0.45rem;
}
#oneDiv>span{
  margin-left: 0.15rem;
  font-size: 0.14rem;
  font-weight: bold;
}
#twoDiv{
  width: 100%;
}
#twoDiv>ul{
  width: 100%;
}
#twoDiv li{
  width: 100%;
  height: 1rem;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border-bottom: 1px solid rgb(247,247,247);
}
#twoDiv li>div:nth-of-type(1){
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  left: 0.12rem;
  top: 0.08rem;
}
#twoDiv li>div:nth-of-type(2){
  display: inline-block;
  margin-left: 0.6rem;
  font-size: 0.114rem;
  margin-top: 0.105rem;
  color:black;
}
#twoDiv li>div:nth-of-type(2)>span:nth-of-type(2){
  font-size: 0.1rem;
  border: 1px solid rgb(255,103,46);
  color:rgb(255,103,46);
  font-weight: bold;
}
#twoDiv li>div:nth-of-type(3){
  margin-left: 0.6rem;
  margin-top: 0.05rem;
  color:black;
}
#twoDiv li>div:nth-of-type(4){
  height: 0.3rem;
  margin-left: 0.6rem;
  border-bottom:1px solid rgb(240,240,240);
  color:black;
}
#threeDiv{
  width: 100%;
  height: 1rem;
}
#threeDiv>ul{
  width: 100%;
}
#threeDiv li{
  width: 100%;
  height: 0.455rem;
  line-height: 0.455rem;
  background-color: #fff;
  border-bottom: 1px solid rgb(237,237,237);
}
.clearHistory{
  width: 100%;
  height: 0.455rem;
  text-align: center;
  line-height: 0.455rem;
  background-color: #fff;
  font-size: 0.16rem;
  font-weight: bold;
  color: rgb(0,146,232);
}
#threeDiv li>span:nth-of-type(1){
   font-size: 0.15rem;
   margin-left: 0.07rem;
   color:black;
}
#threeDiv li>span:nth-of-type(2){
  float: right;
  font-size: 0.18rem;
  font-weight: bold;
  margin-top: 0.135rem;
  margin-right: 0.1rem;
}
</style>