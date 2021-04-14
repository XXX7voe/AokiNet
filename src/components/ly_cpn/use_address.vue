<template>
  <div id="wrap2" class="animated fadeInRight">
      <shop_home_head>
          <div  id="slot-head">
              <span :class="head_text.iconClass" id="slot-span1" @click="backIndex"></span>
              <span id="slot-span2">{{head_text.title}}</span>
              <span class="el-icon-user" :style="{visibility:head_text.isShow}" id="slot-span3"></span>
          </div>
      </shop_home_head>
        <div id="useAddress">
            <ul>
                <li v-for="(v,i) in arr" :key="i" @click="liClick(i)">
                    <!-- <span :class="el-icon-success isTrue"></span> -->
                    <span :class="{'el-icon-success':true,'xuanzhong':true,'isColor':v.isTrue}"></span>
                    <div>
                        <span v-text="v.name"></span>
                        <span v-text="v.sex == '男' ? '先生' : '女士' "></span>
                        <span v-text="v.phone">123456</span>
                    </div>
                    <div>
                        <span>&nbsp;{{v.title}}&nbsp;</span>
                        <span v-text="v.detailAddress"></span>
                    </div>
                </li>
            </ul>
        </div>

      <div id="bottom2" @click="linkaddAddress">
          <span class="el-icon-circle-plus-outline"></span>
          <span>新增收货地址</span>
      </div>
  </div>
</template>

<script>
import shop_home_head from './shop_home_head'
import {mapState} from 'vuex'
export default {
    name:"use_address",
    data() {
        return {
            arr:[]
        }
    },
    created() {
        this.arr = this.addresss
    },
    methods:{
        backIndex(){
            this.$router.push({
                path:"/shop_order"
            });
            this.$store.commit({
                type:"setHeadText",
                query:{
                    iconClass:"el-icon-arrow-left",
                    title:"确认订单",
                    isShow:"visible"
                }
            })
        },
        linkaddAddress(){   
            this.$router.push({
                path:"/add_address"
            })
            this.$store.commit({
                type:"setHeadText",
                query:{
                    iconClass:"el-icon-arrow-left",
                    title:"添加地址",
                    isShow:"hidden"
                }
            })
        },
        liClick(i){
            for(let j = 0; j<this.arr.length;j++){
                this.arr[j].isTrue = false;
            }
            this.arr[i].isTrue = true;
            this.$store.commit("setDefaultAddress",this.arr[i]);
            this.$router.push({
                path:"/shop_order"
            })
        }
    },
    components:{
        shop_home_head
    },
     computed:{
        ...mapState(["detailObj","head_text","addresss"])
    }
}
</script>

<style>
#wrap2{
    position:absolute;
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
#useAddress{
    width: 100%;
    background-color: #fff;
    margin-top: 0.47rem;
}
#useAddress>ul{
    width: 100%;
}
#useAddress li{
    width: 100%;
    height: 0.81rem;
    position: relative;
}
.xuanzhong{
    font-size: 0.2rem;
    position: absolute;
    left: 0.16rem;
    top: 0.25rem;
}
.isColor{
    color:rgb(0,220,110)
}
#useAddress li>div:nth-of-type(1){
    position: absolute;
    left: 0.45rem;
    top: 0.13rem;
}
#useAddress li>div:nth-of-type(1)>span:nth-of-type(1){
    font-size: 0.2rem;
    color: black;
}
#useAddress li>div:nth-of-type(1)>span:nth-of-type(2),#useAddress li>div:nth-of-type(1)>span:nth-of-type(3){
    font-size: 0.155rem;
}
#useAddress li>div:nth-of-type(2){
    position: absolute;
    left: 0.45rem;
    top: 0.43rem;
}
#useAddress li>div:nth-of-type(2)>span:nth-of-type(1){
    display: inline-block;
    text-align: center;
    border-radius: 5px;
    font-size: 0.1rem;
    color:#fff;
    background-color: rgb(255,71,0);
}
#useAddress li>div:nth-of-type(2)>span:nth-of-type(2){
    font-size: 0.1rem;
    color:gray;
}
#bottom2{
    width: 100%;
    height: 0.5rem;
    position: absolute;
    bottom: 0;
    text-align: center;
    color: rgb(0,146,232);
    line-height: 0.5rem;
}
#bottom2>span:nth-of-type(1){
    font-size: 0.28rem;
}
#bottom2>span:nth-of-type(2){
    font-size: 0.17rem;
    position: relative;
    top: -0.04rem;
}
</style>