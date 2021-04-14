<template>
<div id="wrap">
  <div id="center">
    <div>
      <div id="left">
          <span>5</span><br>
          <span>综合评价</span><br>
          <span>高于周边商家76.9%</span><br>
      </div>
      <div id="right">
        <div>
          <span>服务态度</span> <br>
          <span>菜品评价</span> <br>
          <span>送达时间</span> <br>
        </div>
        <div>
            <span><el-rate v-model="value1"></el-rate></span><h5>4.7</h5>
            <span><el-rate v-model="value1"></el-rate></span><h6>4.8</h6>
            <h4>分钟</h4>
        </div>
      </div>
    </div>
  </div>
   <loading v-if="loadingIsShow" style="position:fixed;top:1.35rem"></loading>
  <div id="list">
    <div id="checks">
        <div v-for="(v,i) in checksList" :key="i"
        @click="checkClick(i)"
        :class="{'unsatisfied':v.unsatisfied}">&nbsp;{{v.name}}({{v.count}})&nbsp;</div>
    </div>
    <div id="list_page">
      <ul>
        <li v-for="(v,i) in allList" :key="i">
          <div>
            <img v-if="!v.avatar" src="https://elm.cangdu.org/img/default.jpg" alt="">
             <img v-else :src="'https://fuss10.elemecdn.com/'+v.avatar" alt="">
          </div>
          <div>
            <span v-text="v.username"></span>
            <span v-text="v.rated_at"></span>
          </div>
          <div>
            <span><el-rate disabled v-model="v.rating_star"></el-rate></span>
            <span v-text="v.time_spent_desc"></span>
          </div>
          <div>
            <div v-for="(a,b) in v.item_ratings" :key="b">
              <img :src="'https://fuss10.elemecdn.com/'+a.image_hash" alt="">
            </div>
          </div>
          <div>
            <div v-for="(c,d) in v.item_ratings" :key="d" v-text="c.food_name">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import loading from '@/components/ly_cpn/loading'
import {mapState} from 'vuex'
export default {
    name:"detail_page_right",
    data() {
      return {
        value1:4,
        detail:{},
        checksList:[],
        allList:[],
        limitCount:0,
        loadingIsShow:true
      }
    },
    computed:{
      ...mapState(["detailObj"])
    },
    components:{
        loading
    },
    created(){
      //请求评论分类
      this.detail = this.detailObj;
      new Promise((resolve,reject) => {
          this.$request({
              url:"/ugc/v2/restaurants/"+this.detail.id+"/ratings/tags"
          }).then(res => {
              resolve(res)
          })
      }).then(res => {
        this.checksList = res;
        return new Promise((resolve,reject) => {
           this.$request({
              url:"https://elm.cangdu.org/ugc/v2/restaurants/"+this.detail.id+"/ratings?offset=0&limit=10"
           }).then(res => {
              resolve(res)
           })
        })
      }).then(res => {
        this.allList = res;
        this.loadingIsShow = false;
        //监听滚动条
        window.onscroll = this.windowScroll;
     })
    },
    methods:{
      windowScroll(){
        if(document.getElementById("list_page")){
        let minHeight = document.getElementById("list_page").offsetHeight;
        minHeight+=483;  /**483 */  /*436*/ 
        if(this.getWindowHeight() + this.getWindowScrollTop() >= minHeight){
          this.limitCount+=10;
          //请求数据
          this.loadingIsShow = true;
          this.$request({
              url:"https://elm.cangdu.org/ugc/v2/restaurants/"+this.detail.id+"/ratings?offset="+this.limitCount+"&limit=10"
           }).then(res => {
              this.allList.push(...res);
              this.loadingIsShow = false;
           })
        }
        }
      },
      getWindowHeight(){
		  	return window.innerHeight || document.documentElement.clientHeight;
		  },
      getWindowScrollTop(){
		  	return document.documentElement.scrollTop || document.body.scrollTop;
	  	},
      checkClick(i){
        let checks = document.querySelectorAll("#checks>div");
        for(let j=0;j<checks.length;j++){
          checks[j].style.backgroundColor = "rgb(232,245,255)";
          checks[j].style.color = "#000";
        }
        checks[i].style.backgroundColor = "rgb(73,145,231)";
        checks[i].style.color = "#fff";
      }
    }
}
</script>

<style scoped> 
img{
  width:100%;
}
#wrap{
  width: 100%;
  height: 100%;
  /* background-color: rgb(245,245,245); */
}
#center{
    width: 100%;
    height: 1.04rem;
}
#center>div:nth-of-type(1){
  width: 100%;
  height: 1rem;
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: row;
}
#left{
  width: 1rem;
  height: 100%;
  position: relative;
  left: 0.4rem;
  text-align: center;
}
#left>span:nth-of-type(1){
  font-size: 0.3rem;
  color:red;
}
#left>span:nth-of-type(2){
  font-size: 0.15rem;
    color: black;
}
#left>span:nth-of-type(3){
  font-size: 0.1rem;
  color:gray;
}
#right{
  width: 2.2rem;
  height: 100%;
  margin-left: 0.6rem;
  position: relative;
}
#right>div:nth-of-type(1){
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
}
#right>div:nth-of-type(1)>span{
  font-size: 0.174rem;
  line-height: 0.24rem;
}
#right>div:nth-of-type(2){
  width: 0.9rem;
  height: 0.7rem;
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
  left: 0.8rem;
}
#right>div:nth-of-type(2){
  position: relative;
}
#right>div:nth-of-type(2)>span{
  display: inline-block;
   letter-spacing: -11px;
   position: relative;
}
#right>div:nth-of-type(2)>span:nth-of-type(1){
   position: absolute;
   top: 0.08rem;
}
#right>div:nth-of-type(2)>span:nth-of-type(2){
   position: absolute;
   top: 0.31rem;
}
#right>div:nth-of-type(2)>h4{
  font-size: 0.11rem;
   position: absolute;
   top: 0.5rem;
   left: 0.05rem;
   color: gray;
}
#right>div:nth-of-type(2)>h5{
  font-size: 0.13rem;
  position: absolute;
  top: 0.053rem;
  right: 0.02rem;
  color: red;
}
#right>div:nth-of-type(2)>h6{
  font-size: 0.13rem;
  position: absolute;
  top: 0.305rem;
  right: 0.02rem;
  color: red;
}
#list{
  width: 100%;
  background-color: #fff;
  margin-top: 0.1rem;
}
#checks{
  width: 100%;
  height: 1.835rem;
  padding: 0.06rem;
}
#checks>div{
  font-size: 0.14rem;
  /* display: inline-block; */
  padding: 0 0.04rem;
  height: 0.35rem;
  border-radius: 7px;
  line-height: 0.35rem;
  background-color: rgb(235,245,255);
  float: left;
  margin-top: 0.05rem;
  margin-left: 0.07rem;
}
.unsatisfied{
  background-color: rgb(246,246,246) !important; 
}

#list_page{
  width: 100%;
}
#list_page ul{
  width: 100%;
}
#list_page li{
  width: 100%;
  /* height: 1.93rem; */
  position: relative;
  overflow: hidden;
  border-top: 1px solid lightgray;
}
#list_page li>div:nth-of-type(1){
  width: 0.44rem;
  height: 0.44rem;
  border-radius: 50%;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  overflow: hidden;
}
#list_page li>div:nth-of-type(2){
  width: 82%;
  margin-top: 0.1rem;
  overflow: hidden;
  margin-left: 0.67rem;
}
#list_page li>div:nth-of-type(2)>span:nth-of-type(1){
  float: left;
}
#list_page li>div:nth-of-type(2)>span:nth-of-type(2){
  float: right;
  margin-right: 0.05rem;
  font-size: 0.1;
  color: lightgray;
}
#list_page li>div:nth-of-type(3){
  margin-top: 0.1rem;
  margin-left: 0.67rem;
  overflow: hidden;
}
#list_page li>div:nth-of-type(3)>span{
  float: left;
}
#list_page li>div:nth-of-type(3)>span:nth-of-type(1){
  letter-spacing: -8px;
}
#list_page li>div:nth-of-type(3)>span:nth-of-type(2){
  margin-left: 0.08rem;
  font-size: 0.13rem;
}
#list_page li>div:nth-of-type(4){
  margin-left: 0.67rem;
  overflow: hidden;
}
#list_page li>div:nth-of-type(4)>div img{
  width:0.7rem;
}
#list_page li>div:nth-of-type(4)>div{
  float: left;
  margin-right: 0.1rem;
}
#list_page li>div:nth-of-type(5){
  margin-left: 0.67rem;
  overflow: hidden;
}
#list_page li>div:nth-of-type(5)>div{
  width: 0.52rem;
  height: 0.27rem;
  line-height: 0.27rem;
  border: 1px solid lightgray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 5px;
  text-align: center;
  margin-left: 0.02rem;
  margin-bottom: .08rem;
  float: left;
  margin-right: 0.1rem;
}
</style>