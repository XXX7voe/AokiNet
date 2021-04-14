<template>
    <div id="instructions" class="animated fadeIn">
        <div class="head">
            <i class="el-icon-arrow-left" @click="sale()"></i>
            <span>红包说明</span>
        </div>
        <div class="center">
         <div class="Q1">
            <p>Q1: 怎么获得红包？</p>
            <p>通过邀请好友获得</p>
            <p>在下单返红包的商家下单获得</p>
            <p>抢微信朋友分享的红包获得</p>
         </div>
         <div class="Q2">
            <p>Q2:红包可以做什么？</p>
            <p>可以抵扣在线支付时的实际支付金额。</p>
        </div>
        <div class="Q3">
            <p>Q3: 红包的门槛金额按照什么金额计算？</p>
            <p>红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</p>
        </div>
        <div class="Q4">
            <p>Q4: 一个红包能拆开多次使用吗？</p>
            <p>不能，一个红包只能一次性使用，不能分开使用。</p>
        </div>
        <div class="Q5">
            <p>Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</p>
            <p>会的，订单无效后红包会自动返还到您的账户里。</p>
        </div>
        <div class="Q6">
            <p>Q6: 邀请好友了，为什么没获得红包？</p>
            <p>在个人中心 > 我的红包 > 兑换红包，输入兑换码进行兑换。</p>
        </div>
         <div class="Q7">
            <p>Q7: 红包兑换码怎样兑换成红包，怎样查看红包？</p>
            <p>先检查下您是否在同一设备上进行的邀请？或者被邀请人是否通过您发给对方的链接进行注册？而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。</p>
        </div>
         <div class="Q8">
            <p>Q8: 预订早餐、预订午餐的红包怎么使用？在哪里查询？</p>
            <p>预订早餐、预订午餐的红包暂时不支持直接点外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。</p>
            <p>预订早餐、预订午餐的红包从APP首页点击“预订早餐”按钮进入后在右上角的个人中心中查找预订早餐、预订午餐的红包。</p>
        </div>
        <div class="Q9">
            <p>Q9: 互斥红包怎么使用？</p>
            <p>互斥红包不与其他优惠活动（包含但不限于：新用户专享、满X元减X元、满X元赠XX）同时使用。</p>
        </div>
        <div class="Q10">
            <p>Q10: 返红包活动， 红包领取规则是什么?</p>
            <p>同一个手机号一天限领取三个。</p>
            <p>同一注册用户一天限领取三个。</p>
            <p>注册用户红包直接发送至用户账户里。</p>
            <p>非注册用户红包以兑换码短信的形式发送至用户手机，注册后凭兑换码兑换即可。</p>
            <p>红包的使用周期为1周，自红包发放的第2天开始计算。</p>
            <p>同一个手机号一天最多使用两个红包。</p>
            <p>未收到红包短信的用户注意查看手机里的拦截短信。</p>
            <p>有任何问题请拨打客服电话：10105757。</p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'instructions',
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        sale(){
            this.$router.push({
                name:'sale'
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
.Q2{
    top:1.5rem;
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
    top:2rem;
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
    top: 0.35rem;
}
.Q4{
    top:3.5rem;
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
    top: 0.35rem;
}
.Q5{
    top:4.3rem;
    position: relative;
}
.Q5 :nth-child(1){
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.17rem;
}
.Q5 :nth-child(2){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.6rem;
}
.Q6{
    top:5rem;
    position: relative;
}
.Q6 :nth-child(1){
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.17rem;
}
.Q6 :nth-child(2){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.6rem;
}
.Q7{
    top:6.1rem;
    position: relative;
}
.Q7 :nth-child(1){
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.17rem;
}
.Q7 :nth-child(2){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.6rem;
}
.Q8{
    top:7.9rem;
    position: relative;
}
.Q8 :nth-child(1){
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.17rem;
}
.Q8 :nth-child(2){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.6rem;
}
.Q8 :nth-child(3){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 1.4rem;
}
.Q9{
    top:9.7rem;
    position: relative;
}
.Q9 :nth-child(1){
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.17rem;
}
.Q9 :nth-child(2){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.4rem;
}
.Q10{
    top:10.8rem;
    position: relative;
}
.Q10 :nth-child(1){
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.17rem;
}
.Q10 :nth-child(2){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.3rem;
}
.Q10 :nth-child(2){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.55rem;
}
.Q10 :nth-child(3){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.8rem;
}
.Q10 :nth-child(4){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 1.05rem;
}
.Q10 :nth-child(5){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 1.3rem;
}
.Q10 :nth-child(6){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 1.8rem;
}
.Q10 :nth-child(7){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 2.3rem;
}
.Q10 :nth-child(8){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 2.6rem;
}
.Q10 :nth-child(9){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 3.1rem;
}
</style>