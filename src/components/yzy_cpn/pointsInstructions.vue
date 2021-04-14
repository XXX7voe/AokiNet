<template>
<!-- 积分说明界面 -->
   <div id="instructions" class="animated fadeIn">
        <div class="head">
            <!-- 返回到我的积分界面 -->
            <i class="el-icon-arrow-left" @click="points()"></i>
            <span>积分问题</span>
        </div>
        <div class="center">
         <div class="Q1">
            <p>Q1: 怎么获得积分？</p>
            <p>在线支付的订单将获得订单积分奖励：</p>
            <p>积分将在用户完成评价后获得。</p>
            <p>可获得积分=订单金额×10（即1元=10点积分）。</p>
            <p>订单金额指实际付款金额，不包含活动优惠金额。</p>
            <p>每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</p>
         </div>
         <div class="Q2">
            <p>Q2: 积分用来做什么？</p>
            <p>可以在积分商城兑换各种礼品。</p>
        </div>
        <div class="Q3">
            <p>Q3: 礼品兑换很多天了还没有收到，该怎么办？</p>
            <p>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</p>
        </div>
        <div class="Q4">
            <p>Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</p>
            <p>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'pointsInstructions',
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        points(){
            this.$router.push({
                name:'points'
            })
        }
    },
};
</script>

<style  scoped>
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
.center{
    padding: 0.1rem 0.12rem;
    height: 100%;
}
.Q1{
    top:0.5rem;
    position: relative;
}
.Q1 :nth-child(1){
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.17rem;
}
.Q1 :nth-child(2){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.3rem;
}
.Q1 :nth-child(3){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.55rem;
}
.Q1 :nth-child(4){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.8rem;
}
.Q1 :nth-child(5){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 1.35rem;
}
.Q1 :nth-child(6){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 1.8rem;
}
.Q2{
    top:2.7rem;
    position: relative;
}
.Q2 :nth-child(1){
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.17rem;
}
.Q2 :nth-child(2){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.3rem;
}
.Q3{
    top:3.2rem;
    position: relative;
}
.Q3 :nth-child(1){
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.17rem;
}
.Q3 :nth-child(2){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.5rem;
}
.Q4{
    top:4rem;
    position: relative;
}
.Q4 :nth-child(1){
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.17rem;
}
.Q4 :nth-child(2){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.6rem;
}
</style>