<template>
  <div id="head1" class="animated fadeIn">
     <loading v-if="loadingIsShow" style="margin-top:-1rem"></loading>
      <ul>
        <li :key="i" v-for="(v,i) in merchants" @click="linkDetail(v,i)">
          <div>
            <img :src="'http://elm.cangdu.org/img/'+v.image_path" alt="">
          </div>
          <div>
            <span>品牌</span><span v-text="v.name"></span>
          </div>
          <div>
            <span v-for="(a,b) in v.supports" :key="b">{{a.icon_name}}</span>
            <!-- <span v-if="v.supports[0].icon_name != undefined" v-text="v.supports[0].icon_name"></span>
            <span v-if="v.supports[1].icon_name != undefined" v-text="v.supports[1].icon_name"></span>
            <span>点</span> -->
          </div>
          <div>
            <el-rate v-model="v.rating" disabled></el-rate>
          </div>
          <div v-text="v.rating"></div>
          <div>
            月售{{v.recent_order_num}}单
          </div>
          <div>
            <span v-text="v.delivery_mode ? '蜂鸟专送' : '' "></span>
            <!-- v.supports[0].name -->
              <span v-text="v.supports[0] ? '准时达' : '' "></span>
          </div>
          <div>
            ￥{{v.float_minimum_order_amount}}起送 / {{v.piecewise_agent_fee.tips}}
          </div>
          <div>
            {{v.distance}} / <span>{{v.order_lead_time}}</span>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import loading from '@/components/ly_cpn/loading'
export default {
    name:"shop_home_merchant",
    data() {
      return {
        value:4,
        merchants:[],
        loadingIsShow:true
      }
    },
    components:{
      loading
    },
    computed:{
      merchant_list(){
        return this.$store.state.merchant_list;
      }
    },
    methods:{
      linkDetail(v,i){
        this.$store.commit("setDetailObj",v);
        this.$router.push({
          path:"/detail_page",
        })
      }
    },
    created(){
      this.$request({
        url:"/shopping/restaurants?latitude=31.22967&longitude=121.4762"
      }).then(res => {
        this.$store.commit("setMerchant_list",res)
        this.merchants = this.merchant_list;
        this.loadingIsShow = false;
      })
    },
    watch:{
      merchant_list:function (){
        
        this.merchants = this.merchant_list;  
      }
    }
}
</script>

<style scoped>
img{
  width: 100%;
}
#head1{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  /* margin-top: -0.01rem; */
}
ul{
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
ul>li{
  width: 100%;
  height:1.08rem;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid lightgray;
}
li>div:nth-of-type(1){
  width: 0.62rem;
  height: 0.62rem;
  margin-left: 0.08rem;
  margin-top: 0.18rem;
}
li>div:nth-of-type(2){
  width: 1.5rem;
  height: 0.2rem;
  position: absolute;
  left: 0.8rem;
  top: 0.21rem;
}
li>div:nth-of-type(2)>span:nth-of-type(1){
  display: block;
  width: 0.25rem;
  height: 0.15rem;
  background-color: rgb(255,215,47);
  font-size: 0.1rem;
  text-align: center;
  font-weight: bold;
  color: black;
}
li>div:nth-of-type(2)>span:nth-of-type(2){
  width: 1.5rem;
  height: 0.22rem;
  display: block;
  position: absolute;
  left: 0.33rem;
  top: -0.041rem;
  font-size: 0.152rem;
  color: black;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

li>div:nth-of-type(3){
  width: 0.53rem;    
  /* 0.36 */
  height: 0.18rem;
  position: absolute;
  right: -0.03rem;
  top: 0.2rem;
  transform: scale(0.7);
}
li>div:nth-of-type(3)>span{
  box-sizing: border-box;
  border: 1px solid lightgray;
}
li>div:nth-of-type(4){
  width: 0.8rem;
  letter-spacing: -8px;
  transform: scale(0.8);
  position: absolute;
  left: 0.7rem;
  top:0.5rem;
}
li>div:nth-of-type(5){
  width: 0.2rem;
  font-size: 0.1rem;
  position: absolute;
  left: 1.4rem;
  top: 0.5rem;
  color: red;
  transform: scale(0.9);
}
li>div:nth-of-type(6){
  /* width: 0.55rem; */
  font-size: 0.1rem;
  color: regray;
  position: absolute;
  left: 1.55rem;
  top: 0.49rem;
  transform: scale(0.9);
}
li>div:nth-of-type(7){
  width:0.9rem;
  height: 0.15rem;
  position: absolute;
  right:-0.08rem;
  top:0.47rem;
  transform: scale(0.9);
}
li>div:nth-of-type(7)>span{
  font-size: 0.1rem;
  transform: scale(0.9);
}
li>div:nth-of-type(7)>span:nth-of-type(1){
  background-color: rgb(0,163,235);
  color: #fff;
}
li>div:nth-of-type(7)>span:nth-of-type(2){
  border: 1px solid rgba(0,0,255,0.6);
  color: gray;
  margin-left: -0.01rem;
  margin-top: -0.01rem;
}
li>div:nth-of-type(8){
  font-size: 0.11rem;
  position: absolute;
  top: 0.725rem;
  left: 0.82rem;
}
li>div:nth-of-type(9){
  font-size: 0.11rem;
  position: absolute;
  top: 0.725rem;
  right: 0.1rem;
  color: gray;
}
li>div:nth-of-type(9)>span{
  color:rgb(0,163,235) ;
}
</style>