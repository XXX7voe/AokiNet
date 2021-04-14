<template>
  <div id="wrap" class="animated fadeIn">
      <shop_home_head>
          <div  id="slot-head">
              <span :class="head_text.iconClass" id="slot-span1" @click="backIndex"></span>
              <span id="slot-span2">{{head_text.title}}</span>
              <span class="el-icon-user" :style="{visibility:head_text.isShow}" id="slot-span3"></span>
          </div>
      </shop_home_head>
      <div id="one" @click="linkAddress">
          <img src="../../assets/72e4872ad5e024d4d90121b5d2cb035.png" alt="">
          <span class="iconfont icon-juli"></span>
          <span v-show="Object(addresss).length <= 0">请添加一个收货地址</span>
          <span class="el-icon-arrow-right"></span>
      </div>
      <div id="two">
          <span>送达时间</span>
          <span>尽快送达 | 预计 {{timer[0]}}:{{timer[2]}}</span>
          <div>&nbsp;蜂鸟专送&nbsp;</div>
      </div>
      <div id="three">
          <ul>
              <li  @click="isShow = !isShow">
                  <span>支付方式</span>
                  <span>在线支付&nbsp;<span class="el-icon-arrow-right"></span></span>
              </li>
              <li>
                  <span>红包</span>
                  <span>暂时只在饿死了么App中支持</span>
              </li>
          </ul>
      </div>
      <div id="four">
          <div>
              <div>
                  <!-- //elm.cangdu.org/img/164ad0b6a3917599.jpg -->
                  <img :src="'//elm.cangdu.org/img/'+detail.image_path" alt="">
              </div>
              <div v-text="detail.name"></div>
          </div>
          <ul>
              <li class="count" v-for="(v,i) in shops" :key="i">
                  <span v-text="v.name"></span>
                  <span>x&nbsp;&nbsp;{{v.specfoods[0].original_price}}</span>
                  <span>￥{{v.specfoods[0].price}}</span>
              </li>
              <li class="peisong">
                  <span>餐盒</span>
                  <span>￥{{boxPrice}}</span>
              </li>
              <li class="peisong">
                  <span>配送费</span>
                  <span>￥{{detail.float_delivery_fee}}</span>
              </li>
          </ul>
          <div>
              <span>订单 ￥{{sumPrice}}</span>
              <span>待支付</span>
              <span>￥{{sumPrice}}</span>
          </div>
      </div>
      <div id="five">
          <ul>
              <li @click="linkRemark">
                  <span>订单备注</span>
                  <span>{{remark}}&nbsp;<span class="el-icon-arrow-right"></span></span>
              </li>
              <li @click="linkInvoice">
                  <span>发票抬头</span>
                  <span>不需要开发票<span class="el-icon-arrow-right"></span></span>
              </li>
          </ul>
      </div>
      <div style="height:0.5rem"></div>
      <div id="dizhi" v-if="Object(addresss).length > 0" @click="linkAddress">
          <div>
                <span v-text="morendizhi.name"></span>
                <span v-text="morendizhi.sex == '男' ? '先生' : '女士' "></span>
                <span v-text="morendizhi.phone"></span>
            </div>
            <div>
                <span>&nbsp;{{morendizhi.title}}&nbsp;</span>
                <span v-text="morendizhi.detailAddress"></span>
            </div>
      </div>
      <div id="bottom1">
          <span>待支付￥{{sumPrice}}</span>
          <div @click="yesOrder">确认下单</div>
      </div>
      <van-popup
       v-model="isShow" position="bottom">
          <div id="popup">
              <div>支付方式</div>
              <ul>
                  <li>货到付款 (商家不支持货到付款) <span class="el-icon-success"></span></li>
                  <li>在线支付<span class="el-icon-success"></span></li>
              </ul>
          </div>
      </van-popup>
        <div id="alertWin" v-if="isAlert">
        <div>
            <img src="../../assets/worning.png" alt="">
        </div>
        <div>{{waringTitle}}</div>
        <div @click="clearAlert()">确认</div>
        </div>
  </div>
</template>

<script>
import shop_home_head from './shop_home_head'
import {mapState} from 'vuex'
export default {
    name:"shop_order",
    data() {
        return {
            shops:{},
            detail:{},
            sumPrice:0,
            boxPrice:0,
            isShow:false,
            morendizhi:{},
            timer:[],
            isAlert:false
        }
    },
    components:{
        shop_home_head
    },
    created() {
        //检测登陆状态
        if(this.tb == 'false'){
            this.waringTitle = "请登录"
           this.isAlert = true; 
        }
        //设置默认地址
        if(this.addresss.length > 0){
            this.morendizhi = this.defaultAddress;
        }
        this.detail = this.detailObj;
        this.shops = this.shopsCar;
        this.boxPrice = Math.floor(Math.random() * (1500-100+1) + 100);
        //计算总价
        for(let i=0;i<this.shops.length;i++){
            this.sumPrice+= this.shops[i].specfoods[0].original_price * this.shops[i].specfoods[0].price;
        }
        this.sumPrice+=this.boxPrice;
        this.sumPrice+=this.detail.float_delivery_fee;
        this.timer = this.detail.order_lead_time.replace(/[^0-9]/ig,".").split(".");
    },
    computed:{
         tb(){
            return this.$cookies.get('tb')
        },
        ...mapState(["detailObj","head_text","shopsCar","detailObj","defaultAddress","addresss","remark"])
    },
    methods:{
        //确认下单
        yesOrder(){
            if(this.tb == 'true'){
                if(!this.defaultAddress.hasOwnProperty("address")){
                    this.waringTitle = "请添加一个收货地址"
                    this.isAlert = true; 
                    return;
                }else{
                    this.$router.push({
                        path:"/pay"
                    })
                    //添加订单数据
                    let timer = new Date();
                    let tt = timer.getFullYear()+"-"+(timer.getMonth()+1)+"-"+timer.getDate()+" "+timer.getHours()+":"+timer.getMinutes();
                    timer.setMinutes(timer.getMinutes()+15)
                    this.$store.commit("setOrders",{
                        detailObj:this.detail,
                        shopsCar:this.shopsCar,
                        time:timer,
                        sumPrice:this.sumPrice,
                        orderTime:tt,
                        timeIsShow:true,
                        address:this.defaultAddress
                    })
                }
            }else{
                 this.waringTitle = "请登录"
                this.isAlert = true; 
            }
        },
        clearAlert(){
            this.isAlert = false;
        },
        backIndex(){
            this.$router.push({
                path:"/detail_page"
            });
        },
        linkAddress(){
            this.$router.push({
                path:"/use_address"
            })
            this.$store.commit({
                type:"setHeadText",
                query:{
                    iconClass:"el-icon-arrow-left",
                    title:"选择地址",
                    isShow:"hidden"
                }
            })
        },
        linkRemark(){
            this.$router.push({
                path:"/shop_remark"
            })
        },
        linkInvoice(){
            this.$router.push({
                path:"/shop_invoice"
            })
        }
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
    height: 0.85rem;
    background-color: #fff;
    margin-top: 0.45rem;
    position: relative;
    line-height: 0.85rem;
}
#one>img{
    position: absolute;
    bottom: 0;
}
#one>span:nth-of-type(1){
    color:rgb(0,146,232);
    margin-left: 0.15rem;
    font-size: 0.2rem;
}
#one>span:nth-of-type(2){
    margin-left: 0.02rem;
    font-size: 0.17rem;
    color:black;
}
#one>span:nth-of-type(3){
    float: right;
    /* margin-left: 1.465rem; */
    margin-right: 0.15rem;
    margin-top: 0.27rem;
    font-size: 0.21rem;
}
#two{
    width: 100%;
    height: 0.95rem;
    margin-top: 0.076rem;
    background-color: #fff;
    position: relative;
    line-height: 0.95rem;
    border-left: 4px solid rgb(0,146,232);
}
#two>span:nth-of-type(1){
    font-size: 0.2rem;
    color: black;
    font-weight: 600;
    margin-left: 0.24rem;
}
#two>span:nth-of-type(2){
    color:rgb(0,160,238);
    font-size:0.17rem;
    position: absolute;
    right: 0.15rem;
    top: -0.2rem;
}
#two>div{
    display: inline-block;
    height: 0.2rem;
    font-size: 0.1rem;
    color: #fff;
    background-color: rgb(0,146,232);
    position: absolute;
    top: 0.5rem;
    right: 0.2rem;
    line-height: 0.2rem;
    border-radius: 5px;
}
#three,#five{
    width: 100%;
    height: 0.95rem;
    background-color: #fff;
    margin-top: 0.07rem;
}
#three>ul,#five>ul{
    width: 100%;
    height: 100%;
}
#three li,#five li{
    width: 92%;
    height: 50%;
    margin: 0 auto;
    line-height: 0.47rem;
}
#three li:nth-of-type(1)>span:nth-of-type(1),#five li:nth-of-type(1)>span:nth-of-type(1){
    font-size: 0.18rem;
}
#three li:nth-of-type(1)>span:nth-of-type(2),#three li:nth-of-type(2)>span:nth-of-type(2),
#five li:nth-of-type(1)>span:nth-of-type(2),#five li:nth-of-type(2)>span:nth-of-type(2)
{
    float: right;
    margin-right: 0.2remn;
    color: rgb(170,170,178);
}
#five li:nth-of-type(1)>span:nth-of-type(2){
    width: 75%;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

}
#three li:nth-of-type(2)>span:nth-of-type(1),
#five li:nth-of-type(2)>span:nth-of-type(2)
{
    color: rgb(170,170,178);
}
#four{
    width: 100%;
    /* height: 2.95rem; */
    background-color: #fff;
    margin-top: 0.07rem;
    overflow: hidden;
    position: relative;
}
#four>div:nth-of-type(1)>div:nth-of-type(1){
    width: 0.3rem;
    height: 0.3rem;
    /* border-radius: 50%; */
    margin-top: 0.1rem;
    margin-left: 0.1rem;
}
#four>div:nth-of-type(1)>div:nth-of-type(2){
    display: inline-block;
    font-size: 0.18rem;
    color: black;
    position: absolute;
    top: 0.11rem;
    left: 0.45rem;
}
#four>ul{
    width: 100%;
    /* height: 1.42rem; */
    margin-top: 0.1rem;
    border-top: 1px solid rgb(248,248,248);
    border-bottom: 1px solid rgb(248,248,248);
}
#four>ul li{
    width: 100%;
    height: 0.47rem;
    line-height: 0.47rem;
    position: relative;
}
.count>span:nth-of-type(1),#four>ul li:nth-of-type(2)>span:nth-of-type(1),.peisong>span:nth-of-type(1){
    margin-left: 0.1rem;
    font-size: 0.15rem;
}
.count>span:nth-of-type(2){
    position: absolute;
    left: 2.76rem;
    font-size: 0.14rem;
    color:rgb(255,90,0);
}
.count>span:nth-of-type(3),.peisong>span:nth-of-type(2){
    font-size: 0.14rem;
    position: absolute;
    right: 0.1rem;
}
#four>div:nth-of-type(2){
    width: 100%;
    height: 0.85rem;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    font-size: 0.14rem;
}
#four>div:nth-of-type(2)>span:nth-of-type(1){
    margin-left: 0.1rem;
    position: absolute;
    top: 0.1rem;
}
#four>div:nth-of-type(2)>span:nth-of-type(2){
    color:rgb(255,90,0);
    position: absolute;
    font-size: 0.15rem;
    right: 0.67rem;
    top: 0.1rem;
}
#four>div:nth-of-type(2)>span:nth-of-type(3){
    color:rgb(255,90,0);
    position: absolute;
    right: 0.7rem;
    top: 0.5rem;
}
#bottom1{
    width: 100%;
    height: 0.47rem;
    background-color: rgb(60,60,60);
    position: fixed;
    bottom: 0;
    line-height: 0.47rem;
}
#bottom1>span{
    font-size: 0.18rem;
    color: #fff; 
    margin-left: 0.1rem;
}
#bottom1>div{
    width: 1rem;
    height: 100%;
    line-height: 0.47rem;
    text-align: center;
    font-size: 0.18rem;
    color: #fff;
    font-weight: 600;
    background-color: rgb(0,212,125);
    position: absolute;
    top:0;
    right: 0;
}
#popup{
    width: 100%;
    height: 2.33rem;
}
#popup>div:nth-of-type(1){
    width: 100%;
    height: 0.48rem;
    text-align: center;
    line-height: 0.48rem;
    font-size: 0.17rem;
    background-color: rgb(250,250,250);
}
#popup>ul{
    width: 100%;
}
#popup li{
    width: 100%;
    height: 0.57rem;
    line-height: 0.5rem;
    font-size: 0.17rem;
    padding-left: 0.15rem;
    position: relative;
}
#popup li:nth-of-type(1){
    color: rgb(210,212,217);
}
#popup li>span{
    font-size: 0.22rem;
    position:absolute;
    top: 0.15rem;
    right: 0.15rem;
}
#popup li:nth-of-type(2)>span{
    color:rgb(0,220,110);
}
#dizhi{
    width: 100%;
    height: 0.81rem;
    position: absolute;
    top: 0.48rem;
    z-index: 3;
}
#dizhi>div:nth-of-type(1){
    position: absolute;
    left: 0.45rem;
    top: 0.13rem;
}
#dizhi>div:nth-of-type(1)>span:nth-of-type(1){
    font-size: 0.2rem;
    color: black;
}
#dizhi>div:nth-of-type(1)>span:nth-of-type(2),#dizhi>div:nth-of-type(1)>span:nth-of-type(3){
    font-size: 0.155rem;
}
#dizhi>div:nth-of-type(2){
    position: absolute;
    left: 0.45rem;
    top: 0.43rem;
}
#dizhi>div:nth-of-type(2)>span:nth-of-type(1){
    display: inline-block;
    text-align: center;
    border-radius: 5px;
    font-size: 0.1rem;
    color:#fff;
    background-color: rgb(255,71,0);
}
#dizhi>div:nth-of-type(2)>span:nth-of-type(2){
    font-size: 0.1rem;
    color:gray;
}
#alertWin{
    width: 3rem;
    /*height: 2rem;*/
    background-color: #fff;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 30%;
    padding-top: 0.1rem;
    border-radius: 0.1rem;
    overflow: hidden;
    animation: open 0.7s ease-in-out;
  }
 @keyframes open {
    0%{
      transform: translateX(-50%) scale(0.75);
    }
    30%{
      transform: translateX(-50%) scale(1.1);
    }
    65%{
      transform: translateX(-50%) scale(0.8);
    }
    100%{
      transform: translateX(-50%) scale(1);
    }
  }
/**弹出框 */
  #alertWin>div:nth-child(1){
    width: 1rem;
    height: 1rem;
    margin: auto;
  }
  #alertWin>div:nth-child(1)>img{
    width: 100%;
  }
  #alertWin>div:nth-child(2){
    text-align: center;
    font-size: 0.18rem;
    padding: 0.1rem 0;
  }
  #alertWin>div:nth-child(3){
    text-align: center;
    font-size: 0.18rem;
    font-weight: bold;
    background-color: #4CD964;
    color: #fff;
    padding: 0.1rem 0;
  }
</style>