<template>
  <div id="wrap">
      <loading v-if="loadingIsShow" style="margin-top:-1.4rem"> <img style="height:100%" src="../../assets/imgs/gujia.jpg" alt=""></loading>
      <div>
        <div id="left">
            <ul>
                <li v-for="(v,i) in allList" @click="leftClick(v,i)" :key="i">
                    <span v-text="v.name"></span>
                    <!-- <div  v-for="(a,b) in v.foods" :key="b">
                        <div class="leftCount" v-if="a.specfoods[0].packing_fee>1">
                            {{a.specfoods[0].packing_fee}}
                       </div>
                    </div> -->
                </li>
            </ul>
        </div>
        <div id="right">
            <ul v-for="(v,i) in allList" :key="i">
                <p>
                    <span v-text="v.name"></span> &nbsp;
                    <span>{{v.description}}~</span>
                    <span class="el-icon-more"></span>
                </p>
                <li v-for="(a,b) in v.foods" :key="b" @click="linkShopDetail(a,b)">
                    <div>
                        <!-- //elm.cangdu.org/img/16f35f39b6262048.jpg -->
                        <img v-if="a.image_path" :src="'//elm.cangdu.org/img/'+a.image_path" alt="">
                    </div>
                    <div>
                            <div>
                                <span v-text="a.specfoods[0].name"></span>
                                <span v-for="(c,d) in a.attributes" class="zhaopai"
                                 v-text="Object(c).hasOwnProperty('icon_name') ? c.icon_name == '招牌' ? '招牌' : '' : ''" 
                                 :key="d">&nbsp;
                                    {{Object(c).icon_name}}
                                    &nbsp;</span>
                            </div>
                            <div>
                                <span v-text="a.description"></span>
                            </div>
                            <div>
                                {{a.tips}}
                            </div>
                            <div>
                                <span v-if="Object(a.activity).image_text !== undefined 
                                    && Object(a.activity).image_text.length > 0
                                 ">&nbsp;{{Object(a.activity).image_text}}&nbsp;</span>
                            </div>
                            <div>
                                <span><span style="font-size:0.1rem;">￥</span>{{a.specfoods[0].price}}</span>
                                <span v-show="a.specfoods[0].specs.length>0">起</span>
                                <span class="xuanguige" v-if="a.specfoods[0].specs.length>0 " @click.stop="xuanGG(a)">选规格</span>
                                <span v-if="a.specfoods[0].specs.length<=0" class="el-icon-circle-plus jia" @click.stop="computeCount(a,true)"></span>
                               <!-- 是否显示减号 -->
                                <div :class="{
                                    'jian':a.specfoods[0].specs.length>0,
                                    'jian2':a.specfoods[0].specs.length<=0
                                    }" v-if="a.specfoods[0].original_price>0">   
                                    <span>{{a.specfoods[0].original_price}}</span>
                                    <span class="el-icon-remove-outline" @click.stop="computeCount(a,false)"></span>
                                </div>
                            </div>
                    </div>
                    <!-- 是否是新品--------------------- -->
                    <div v-for="(e,f) in a.attributes" :key="f" >
                        <div id="xinpin" class="iconfont icon-xinpin" 
                        v-if="Object(e).hasOwnProperty('icon_name') && Object(e).icon_name == '新'" 
                    ></div>
                    </div>
                </li>
            </ul>
        </div>
      </div>
      <div id="bottom" @click="bottomClick">
          <div>
              <div :class="{'divOne':shopCount>0}">
                <span class="iconfont icon-03f"></span>
              </div>
          </div>
          <div>￥{{sumPrice}}</div>
          <div>配送费￥5</div>
          <div :class="{'divFour':shopCount>0}" @click.stop="linkShopOrder" v-text="shopsCar.length <=0 ? '差20起送' : '去结算'"></div>
          <div v-if="shopCount>0" v-text="shopCount"></div>
      </div>
        <div id="wrap2" v-if="wrap2IsShow">
            <div>
                <div>
                    <span v-text="wrap2Detail.name"></span>
                    <span class="el-icon-close" @click="wrap2Click"></span>
                </div>
                <div>规格</div>
                <div>
                    <div v-for="(v,i) in wrap2Detail.specfoods"
                     class="guige" :key="i"
                     @click="checkGuiGe(v,i)"
                     >&nbsp;&nbsp;&nbsp;{{v.specs_name}}&nbsp;&nbsp;&nbsp;</div>
                </div>
                <div>
                    <span><span>￥</span>{{wrap2Detail.specfoods[0].price}}</span>
                    <span @click="computeCount(wrap2Detail,true)">加入购物车</span>
                </div>
            </div>
        </div>
      <div id="shopCar" v-if="shopsCarIsShow && shopsCar.length > 0">
          <div>
              <span>购物车</span>
              <span class="el-icon-delete"></span>
              <span @click="clearShopsCar">清空</span>
          </div>
          <ul>
              <li v-for="(v,i) in shopsCar" :key="i">
                  <span v-text="v.name"></span>
                  <span>￥{{v.specfoods[0].price}}</span>
                  <span class="el-icon-remove-outline" @click="computeShopsCar(v,i,false)"></span>
                  <span>{{v.specfoods[0].original_price}}</span>
                  <span class="el-icon-circle-plus"  @click="computeShopsCar(v,i,true)"></span>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import loading from '@/components/ly_cpn/loading'
import {mapState} from 'vuex'
import Vue from 'vue'
import {Toast} from 'vant';
Vue.use(Toast)
export default {
    name:"detail_page_left",
    components:{
        loading
    },
    data() {
        return {
            detail:{},
            allList:[],
            rightList:[],
            ulTop:0,
            shopCount:0,
            sumPrice:0,
            wrap2IsShow:false,
            wrap2Detail:{},
            shopsCar:[],
            shopsCarIsShow:false,
            loadingIsShow:true
        }
    },
    created(){
        this.detail = this.detailObj;
        //请求左列表数据
            this.$request({
              url:"/shopping/v2/menu?restaurant_id="+this.detailObj.id+""
            }).then(res => {
              this.allList = res;
              if(this.allList.length > 0){
                  //设置左列表默认选项
                this.$nextTick(() => {
                    let fitstLi = document.querySelectorAll("#left li")[0];
                    fitstLi.style.backgroundColor = "#fff";
                    fitstLi.style.borderLeft = "3.5px solid rgb(60,139,229)"
                    this.loadingIsShow = false;
                 })
              }
            })
    },
    methods:{
        leftClick(v,i){
            let lis = document.querySelectorAll("#left li");
            this.clearLi(lis);
            lis[i].style.backgroundColor = "#fff";
            lis[i].style.borderLeft = "3.5px solid rgb(60,139,229)"

            //处理左右数据关联
            let uls = document.querySelectorAll("#right ul");
            // console.log(uls[i].scrollTop);
            let rightDiv = document.getElementById("right");
            this.ulTop = uls[i].offsetTop;
            rightDiv.scrollTo({
                top: this.ulTop,
                left: 0,
                behavior: 'smooth'
            });   
            // rightDiv.scrollTop = this.ulTop;
            // $("#right").animate({
            //     scrollTop:this.ulTop
            // },500);
        },
        watchScroll(){
            let lis = document.querySelectorAll("#left li");
            let uls = document.querySelectorAll("#right ul")
            let sumTop = 0;
            let ulTop = document.getElementById("right").scrollTop;
            for(let i=0;i<lis.length;i++){
                sumTop+=uls[i].clientHeight;
                if(sumTop >= ulTop-35 && sumTop <= ulTop+35){
                    console.log(1)
                    this.clearLi(lis);
                    lis[i].style.backgroundColor = "#fff";
                    lis[i].style.borderLeft = "3.5px solid rgb(60,139,229)"
                    return;
                }
            }
        },
        clearLi(lis){
            for(var j=0;j<lis.length;j++){
                lis[j].style.backgroundColor = "rgb(245,245,245)";
                lis[j].style.border ="none";
            }
        },
        computeCount(a,flag){
            if(flag){
                this.shopCount++;
                //处理购物车数据
                if(this.shopsCar.indexOf(a) < 0){
                    this.shopsCar.push(a)
                    a.specfoods[0].original_price++;
                }else{
                    for(let i=0; i<this.shopsCar.length;i++){
                        if(this.shopsCar[i] === a){
                            this.shopsCar[i].specfoods[0].original_price++;
                            break;
                        }
                    }
                }
            }else{
                if(a.specfoods[0].specs.length <= 0){
                    this.shopCount--;
                        for(let i = 0;i < this.shopsCar.length ;i++){
                            if(this.shopsCar[i] === a){
                                this.shopsCar[i].specfoods[0].original_price--;
                                if(this.shopsCar[i].specfoods[0].original_price <= 0){
                                 this.shopsCar.splice(i,1);
                              }
                            break;
                            }
                        }
                }else{
                    Toast("多规格商品只能去购物车删除哦")
                }
            }
            this.sumPrice = 0;
                for(let m = 0; m<this.shopsCar.length;m++){
                    this.sumPrice +=  this.shopsCar[m].specfoods[0].price * this.shopsCar[m].specfoods[0].original_price;
                }
            this.wrap2IsShow = false;
        },
        linkShopDetail(a,b){
            this.$router.push({
                path:"/shop_detail",
                query:a
            })
            this.$store.commit({
                type:"setHeadText",
                query:{
                    iconClass:"el-icon-arrow-left",
                    title:a.name,
                    isShow:"hidden"
                }
            })
        },
        xuanGG(a){
            this.wrap2Detail = a;
            this.wrap2IsShow = true;
        },
        wrap2Click(){
            this.wrap2IsShow = false;
        },
        checkGuiGe(v,i){
            let guiges = document.getElementsByClassName("guige")
            for(let j = 0; j<guiges.length; j++){
                guiges[j].style.color = "";
                guiges[j].style.border = "1px solid rgb(241,241,241)"
            }
            guiges[i].style.color = "rgb(72,186,240)";
            guiges[i].style.border = "1px solid rgb(72,186,240)"
        },
        computeShopsCar(v,i,flag){
            if(flag){
                this.shopCount++;
                v.specfoods[0].original_price++;
            }else{
                this.shopCount--;
                v.specfoods[0].original_price--;
                if(v.specfoods[0].original_price <= 0){
                    this.shopsCar.splice(this.shopsCar.indexOf(v),1)
                }
            }
           //计算总价
           this.sumPrice = 0;
           for(let j = 0;j < this.shopsCar.length; j++){
               this.sumPrice += this.shopsCar[j].specfoods[0].original_price * this.shopsCar[j].specfoods[0].price;
           } 
        },
        clearShopsCar(){
            for(let j=0;j<this.shopsCar.length;j++){
                this.shopsCar[j].specfoods[0].original_price = 0;
            }
            this.shopCount = 0;
            this.sumPrice = 0;
            this.shopsCar = [];
            this.shopsCarIsShow = false;
        },
        linkShopOrder(){
            let sum = 0;
            for(let j=0;j<this.shopsCar.length;j++){
                sum+=this.shopsCar[j].specfoods[0].original_price * this.shopsCar[j].specfoods[0].price;
            }
            if(this.shopsCar.length>0 && sum >= 20){
                 this.$router.push({
                     path:"shop_order",
                })
                this.$store.commit("setShopsCar",this.shopsCar)
                this.$store.commit({
                    type:"setHeadText",
                    query:{
                        iconClass:"el-icon-arrow-left",
                        title:"确认订单",
                        isShow:"visible"
                    }
                })
            }
        },
        bottomClick(){
            if(this.shopsCar.length > 0){
                this.shopsCarIsShow = !this.shopsCarIsShow
            }
        }
    },
    computed:{
        ...mapState(["detailObj"])
    }
}
</script>

<style scoped>
img{
  width:100%;
}
#wrap{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
#wrap>div:nth-of-type(1){
    width: 100%;
    height: 100%;
}
#left{
    position: absolute;
    width: 0.865rem;
    height: 100%;
    overflow: scroll;
    /* box-sizing: border-box; */
    /* border: 5px solid red; */
}
#left>ul{
    width: 100%;
    overflow: scroll;
}
#left li{
    width: 100%;
    height: 0.665rem;
    background-color: rgb(248,248,248);
    /* overflow: hidden; */
    border-top: 1px solid lightgray;
    position: relative;
}
#left li>span{
    display: inline-block;
    font-size: 0.144rem;
    margin-top: 0.28rem;
    margin-left: 0.09rem;
}
#right{
    width: 2.88rem;
    height: 100%;
    margin-left: 0.867rem;
    overflow: scroll;
    /* transition: all 3s; */
}
#right>ul{
    width: 100%;
}
#right>ul>p{
    width: 99%;
    height: 0.43rem;
    background-color: rgb(246,246,246);
    line-height: 0.4rem;
    overflow: hidden;
}
#right>ul>p>span:nth-of-type(1){
    font-size: 0.18rem;
    font-weight: 700;
    margin-left: 0.1rem;
}
#right>ul>p>span:nth-of-type(2){
    color: gray;
    font-size: 0.12rem;
}
#right>ul>p>span:nth-of-type(3){
    color: gray;
    float: right;
    margin-right: 0.1rem;
    line-height: 0.4rem;
}
#right li{
    width: 100%;
    height: 1.385rem;
    position: relative;
    border-bottom: 1px solid lightgray;
}
#right li>div:nth-of-type(1){
    width: 0.5rem;
    height: 0.5rem;
    border:1px solid lightgray;
    position: absolute;
    left: 0.08rem;
    top: 0.1rem;
}
#right li>div:nth-of-type(2){
    width: 2.15rem;
    height: 1rem;
    margin-left: 0.58rem;
    position: absolute;
    left: 0.08rem;
    top: 0.1rem;
}
#right li>div:nth-of-type(2)>div{
    overflow: hidden;
    position: relative;
}
#right li>div:nth-of-type(2)>div:nth-of-type(1)>span:nth-of-type(1){
    font-size: 0.15rem;
    font-weight: 700;
    color: black;
}
.zhaopai{
    font-size: 0.1rem;
    color: red;
    border-radius: 10px;
    border: 1px solid red;
    transform: scale(0.75);
    float: right;
    margin-right: 0.05rem;
}
#right li>div:nth-of-type(2)>div:nth-of-type(2)>span{
    font-size: 0.1rem;
    color: gray;
}
#right li>div:nth-of-type(2)>div:nth-of-type(3){
    color:black;
}
#right li>div:nth-of-type(2)>div:nth-of-type(4){
    margin-left: -0.1rem;
}
#right li>div:nth-of-type(2)>div:nth-of-type(4)>span{
    display: inline-block;
    font-size: 0.1rem;
    color: red;
    border-radius: 10px;
    border: 1px solid red;
    transform: scale(0.75);
}
#right li>div:nth-of-type(2)>div:nth-of-type(5){
    margin-top: 0.05rem;
}
#right li>div:nth-of-type(2)>div:nth-of-type(5)>span:nth-of-type(1){
    color: red;
    font-size: 0.16rem;
    font-weight: bold;
}
#right li>div:nth-of-type(2)>div:nth-of-type(5)>span:nth-of-type(2){
    font-size: 0.13rem;
}
.xuanguige{
    display: block;
    width: 0.52rem;
    height: 0.26rem;
    text-align: center;
    line-height: 0.26rem;
    border-radius: 5px;
    color: #fff;
    background-color: rgb(0,146,232);
    float: right;
    margin-right: 0.07rem;
}
.jia{
    position: absolute;
    color: rgb(0,146,232);
    font-size: 0.2rem;
    top: 0.03rem;
    right: 0.1rem;
}
.jian{
    position: absolute;
    font-size: 0.18rem;
    top: -0.01rem;
    right: 0.65rem;
}
.jian2{
    position: absolute;
    font-size: 0.18rem;
    top: -0.01rem;
    right: 0.37rem;
}
.jian>span:nth-of-type(2),.jian2>span:nth-of-type(2){
    position: absolute;
    color: rgb(0,146,232);
    font-size: 0.2rem;
    top: 0.04rem;
    right: 0.2rem;
}
#xinpin{
    display: inline-block;
    font-size: 0.29rem;
    color: rgb(0,220,110);
    position: absolute;
    left: 0;
    top: -0.0823rem;
}
#bottom{
    width: 100%;
    height: 0.465rem;
    background-color: rgb(61,61,63);
    position: fixed;
    bottom: 0;
    z-index: 3;
}
#bottom>div:nth-of-type(1){
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    position: absolute;
    left: 0.17rem;
    bottom: 0.13rem;
    background-color: rgb(61,61,63);
}
#bottom>div:nth-of-type(1)>div{
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
}
.divOne{
    background-color: rgb(0,146,232);
}
#bottom>div:nth-of-type(1)>div>span{
    font-size: 0.27rem;
    line-height: 0.45rem;
    color: #fff;
}
#bottom>div:nth-of-type(2){
    display: inline-block;
    color: #fff;
    font-size: 0.18rem;
    position: absolute;
    left: 0.85rem;
    font-weight: bold;
}
#bottom>div:nth-of-type(3){
    display: inline-block;
    color: #fff;
    font-size: 0.1rem;
    position: absolute;
    left: 0.85rem;
    top: 0.27rem;
}
#bottom>div:nth-of-type(4){
    width:1.2rem;
    height: 100%;
    float: right;
    color:#fff;
    font-size: 0.17rem;
    line-height: 0.43rem;
    text-align:center;
    font-weight: bold;
}
.divFour{
    background-color: rgb(0,220,110);
}
#bottom>div:nth-of-type(5){
    width: 0.18rem;
    height: 0.18rem;
    line-height: 0.165rem;
    text-align: center;
    border-radius: 50%;
    background-color: rgb(255,46,0);
    color: #fff;
    position: absolute;
    left: 0.53rem;
    bottom: 0.54rem;
}
.leftCount{
     width: 0.14rem;
    height: 0.14rem;
    line-height: 0.135rem;
    text-align: center;
    border-radius: 50%;
    background-color: rgb(255,46,0);
    color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    /* left: -0.3rem; */
    /* z-index: 3; */
}
#wrap2{
    position: absolute;
    top: -1.4rem;
    /* top: 0; */
    z-index: 5;
    width: 100%;
    height: 124%;
    /* display: none; */
    overflow: hidden;
    background-color: rgba(0,0,0,0.3);
}
#wrap2>div:nth-of-type(1){
    width: 70%;
    /* height: 2rem; */
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 40%;
    overflow: hidden;
    transform: translateX(-50%) translateY(-50%);
}
#wrap2>div:nth-of-type(1)>div:nth-of-type(1){
    margin-top: 0.07rem;
    text-align: center;
}
#wrap2>div:nth-of-type(1)>div:nth-of-type(1)>span:nth-of-type(1){
    font-size: 0.17rem;
}
#wrap2>div:nth-of-type(1)>div:nth-of-type(1)>span:nth-of-type(2){
    font-size: 0.23rem;
    /* margin-left: 0.83rem; */
    float: right;
    margin-right: 0.1rem;
}
#wrap2>div:nth-of-type(1)>div:nth-of-type(2){
    margin-left: 0.1rem;
    margin-top: 0.3rem;
    margin-bottom: 0.1rem;
}
#wrap2>div:nth-of-type(1)>div:nth-of-type(3)>div{
    display: inline-block;
    /* width:0.7rem; */
    height: 0.35rem;
    border: 1px solid rgb(241,241,241);
    border-radius: 6px;
    margin-left: 0.1rem;
    line-height: 0.35rem;
    text-align: center;
}
#wrap2>div:nth-of-type(1)>div:nth-of-type(4){
    height: 0.6rem;
    background-color: rgb(249,249,249);
    margin-top: 0.15rem;
}
#wrap2>div:nth-of-type(1)>div:nth-of-type(4)>span:nth-of-type(1){
    color: rgb(255,82,0);
    font-size: 0.2rem;
    font-weight: bold;
    line-height: 0.65rem;
    margin-left: 0.1rem;
}
#wrap2>div:nth-of-type(1)>div:nth-of-type(4)>span:nth-of-type(1)>span{
    font-size: 0.1rem;
}
#wrap2>div:nth-of-type(1)>div:nth-of-type(4)>span:nth-of-type(2){
    display: inline-block;
    height: 0.3rem;
    background-color: rgb(0,155,232);
    margin-left: 1.1rem;
    padding: 0 0.115rem;
    border-radius: 5px;
    line-height: 0.3rem;
    color: #fff;
}
#shopCar{
    width: 100%;
    position: fixed;
    bottom: 0.465rem;
    background-color: rgb(235,239,241);
}
#shopCar>div:nth-of-type(1){
    width: 100%;
    height: 0.45rem;
    line-height: 0.45rem;   
}
#shopCar>div:nth-of-type(1)>span:nth-of-type(1){
    margin-left: 0.2rem;
}
#shopCar>div:nth-of-type(1)>span:nth-of-type(2){
    margin-left: 2.5rem;
}
#shopCar>div:nth-of-type(1)>span:nth-of-type(1){
    margin-left: 0.2rem;
}
#shopCar>ul{
    width: 100%;   
}
#shopCar>ul>li{
    width: 100%;
    height: 0.5rem;
    background-color: #fff;
    line-height: 0.5rem;
    position:relative
}
#shopCar>ul>li>span:nth-of-type(1){
    font-size: 0.17rem;
    position: absolute;
    left: 0.16rem;
    font-weight: bold;
}
#shopCar>ul>li>span:nth-of-type(2){
    color:rgb(255,90,0);
    font-size: 0.18rem;
    font-weight: bold;
    position: absolute;
    left: 2.3rem;
}
#shopCar>ul>li>span:nth-of-type(3){
    position: absolute;
    color: rgb(0,146,232);
    font-size: 0.2rem;
    left: 3rem;
    top: 0.16rem;
}
#shopCar>ul>li>span:nth-of-type(4){
    position: absolute;
    font-size: 0.2rem;
    left: 3.25rem;
}
#shopCar>ul>li>span:nth-of-type(5){
    color: rgb(0,146,232);
    font-size: 0.2rem;
    position: absolute;
    top: 0.16rem;
    right: 0.14rem;
}
</style>