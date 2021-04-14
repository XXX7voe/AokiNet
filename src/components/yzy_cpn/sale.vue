<template>
    <div id="sale" class="animated fadeIn">
         <div class="head">
            <i class="el-icon-arrow-left" @click="mySelf()"></i>
            <span>我的优惠</span>
        </div>
        <div class="title">
            <p>红包</p>
            <p @click="vouchers()">商家代金券</p>
        </div>
        <div class="center">
            <span>有<span>{{this.length}}</span>个红包即将到期</span>
            <div>
             <i class="el-icon-question"></i>
            <span class="instructions" @click="instructions">红包说明</span>
            </div>
            <div class="envelope">
           <ul>
            <li :key="i" v-for="(v,i) in users">
            <div>
              <span>￥</span>
              <span>{{ v.amount }}</span>
              <p>{{ v.description_map.sum_condition }}</p >
            </div>
            <div>
              <p>{{ v.name }}</p >
              <p>{{ v.end_date }}</p >
              <span>到期</span>
              <p>{{ v.description_map.phone }}</p >
            </div>
            <div>
              <p>{{ v.description_map.validity_delta }}</p >
            </div>
            </li>
        </ul>
            <div class="envelopeFoot">
                <p>限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
                <p @click="historyEnvelope()">查看历史红包</p>
                <i class="el-icon-arrow-right"></i>
            </div>
            </div>
        </div>
        <div class="foot">
            <span @click="envelope()">兑换红包</span>
            <span @click="Recommended()">推荐有奖</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'sale',
    data() {
        return {
            users:'',
            length:'',
        };
    },
    created() {
        this.gain()
    },
    computed:{
         ...mapState(["user_id"])
    },
    methods: {
        instructions(){
            this.$router.push({
                name:'instructions'
            })
        },
        vouchers(){
             this.$router.push({
                name:'vouchers'
            })
        },
        mySelf(){
            this.$router.push({
                name:'mySelf'
            })
        },
        envelope(){
            this.$router.push({
                name:'envelope'
            })
        },
        Recommended(){
            this.$router.push({
                name:'Recommended'
            })
        },
        gain(){
            this.$request({
                url:"/promotion/v2/users/1/hongbaos?limit=20&offset=0",
                withCredentials:true,
            }).then(res=>{
                 this.users = res;
                 this.length = res.length
               this.$store.commit("setSale",this.length);
            })
        },
        historyEnvelope(){
             this.$router.push({
                name:'historyEnvelope'
            })
        }
    },
};
</script>

<style  scoped>
#sale{
    background-color: #F5F5F5;
}
.head{
   background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.45rem;
}
.el-icon-arrow-left{
    font-size: 0.25rem;
    color: white;
    margin-top: 0.11rem;
}
.head span{
    margin-left: 1.2rem;
    font-size: 0.2rem;
    margin-top: 0.1rem;
    color: white;
    font-weight: 700;
}
.title{
    position: relative;
    width: 100%;
    height: 0.5rem;
    background-color:white;
    top: 0.4rem;
}
.title p{
    margin-top: 0.18rem;
}
.title :nth-child(1){
    color:#3190e8;
    position: absolute;
    left: 0.6rem;
    top:-0.05rem;
    border-bottom: 0.01rem solid #3190e8;
}
.title :nth-child(2){
    /* color:#3190e8; */
    position: absolute;
    left: 2.4rem;
    top:-0.04rem;
    /* border-bottom: 0.01rem solid #3190e8; */
}

.center{
    top: 0.5rem;
    height: 5.8rem;
    width: 100%;
    left: 0.1rem;
    position: relative;
    color: #666;
    font-size: 0.15rem;
}

.center div{
    position: relative;
}
.el-icon-question{
    color: #0092E8;
    position: absolute;
    left: 2.55rem;
    top: -0.2rem;
}
.instructions{
    color: #0092E8;
    left: 2.85rem;
    position: absolute;
    top:-0.24rem;
}
.foot{
    margin-top:0.8rem;
    position: relative;
}
.foot :nth-child(1){
    position: absolute;
    top: -0.55rem;
    left: 0.45rem;
}
.foot :nth-child(2){
    position: absolute;
    top: -0.55rem;
    left: 2.4rem;
}
.envelope ul li { 
    width:95%;
    height:1rem;
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAIBAMAAAALs8LeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURUxpcf9TQf9aS/9TQP9TQP9TQv9TQf9UQP9bSP9TQCdGiZQAAAAJdFJOUwBPEZzKPX2/HKJFz58AAAAkSURBVAjXY5gJBwzEMScHNXpCmQIMDMwQ5jQGIKgEMyeBmJIAtqcnWdDMwKsAAAAASUVORK5CYII=) repeat-x;
    border-radius:0.15rem;
    background-color:white;
    margin-top:0.15rem;
    display:flex;
    justify-content:space-between;
}
.envelope ul li div {
    box-sizing:border-box;
    text-align:center;
    padding-top:0.2rem;
    border-left:none;
    border-right:none;
    border-bottom:none;
}

.envelope ul li div:nth-of-type(1) {
  width: 30%;
  height: 1rem;
}
ul li div:nth-of-type(1) span {
  color:#ff4127;
}
 ul li div:nth-of-type(1) span:nth-of-type(1) {
  font-weight: bold;
}
 ul li div:nth-of-type(1) span:nth-of-type(2) {
  font-size: 0.35rem;
}
ul li div:nth-of-type(1) span:nth-of-type(3) {
  font-weight: bold;
}
ul li div:nth-of-type(1) p {
  font-size: 0.15rem;
  color:#999999;
}
ul li div:nth-of-type(2) {
  width: 50%;
  text-align: left;
  padding-left: 0.1rem;
}
ul li div:nth-of-type(2) span {
  font-size: 0.12rem;
  color:#999999;
}
ul li div:nth-of-type(2) p:nth-of-type(2) {
  display: inline-block;
}
ul li div:nth-of-type(2) p:nth-of-type(2),
ul li div:nth-of-type(2) p:nth-of-type(3) {
  font-size: 0.12rem;
  color:#999999;
}
ul li div:nth-of-type(2) {
  font-size: 0.15rem;
  width:50%;
  height:1rem;
}
ul li div:nth-of-type(3) {
  width: 20%;
  height: 1rem;
}
ul li div:nth-of-type(3) p {
  color:red;
  font-size: 0.15rem;
}
.envelopeFoot{
    position: absolute;
    top: 0.3rem;
}
.envelopeFoot :nth-child(1){
    font-size: 0.12rem;
    width: 70%;
    margin-top: -0.1rem;
    margin-left: 0.055rem;
    text-align: center;
    color: #999;
}
.envelopeFoot :nth-child(2){
    font-size: 0.14rem;
    margin-top: 0.3rem;
    margin-left: 1.3rem;
    color: #999;
}
.envelopeFoot .el-icon-arrow-right{
    font-size: 0.14rem;
    position: absolute;
    top: .7rem;
    left: 2.2rem;
    color: #999;;
}
</style>