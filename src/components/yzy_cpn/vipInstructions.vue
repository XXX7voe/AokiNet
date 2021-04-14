<template>
    <div id="vipInstructions" class="animated fadeIn">
         <div class="head">
            <i class="el-icon-arrow-left" @click="memberCenter()"></i>
            <span>会员说明</span>
        </div>
        <div class="title">
            <p>尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
              购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
              注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</p>
        </div>
         <div class="center">
             <div class="Q1">
        <p>Q1: 特权介绍</p>
        <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
        <p>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
        <p>更多特权，敬请期待！</p>
        </div>

        <div class="Q2">
        <p>Q2: 资费介绍?</p>
        <p>饿了么会员卡：20元。</p>
        </div>

        <div class="Q3">
            <p>Q3: 使用说明</p>
            <p>当用户满足以下任一条件，会员服务自动失效：</p>
            <p>自绑定之日起超过31天；</p>
            <p>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
        </div>

        <div class="Q4">
            <p>Q4: 购卡说明</p>
            <p>在线购买：饿了么App>我的>饿了么会员卡</p>
        </div>
        <div class="Q5">
            <p>Q5: 温馨提示</p>
            <p>用户在当前会员服务失效前，无法购买新卡。</p>
            <p>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vipInstructions',
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        memberCenter(){
            this.$router.push({
                name:'memberCenter'
            })
        }
    },
};
</script>

<style  scoped>
.head{
    background-color: #3190e8;
    width: 100%;
    height: 0.5rem;
    position: relative;
    
}
.el-icon-arrow-left{
    font-size: 0.25rem;
    margin-top: 0.11rem;
    color: white;
}
.head span{
    font-size: 0.2rem;
    margin-left: 1.2rem;
    color: white;
    font-weight: 700;
}
.title{
    color: #333;
    font-weight: 400;
    font-size: 0.15rem;
    padding: 0.2rem 0.2rem;
}
.center{
    padding: 0.12rem 0.12rem;
}
.Q1{
    top:-0.2rem;
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
    top: 0.8rem;
}
.Q1 :nth-child(4){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 1.8rem;
}
.Q2{
    top:1.7rem;
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
    top: 0.35rem;
}
.Q3{
    top:2.2rem;
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
.Q3 :nth-child(3){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.85rem;
}
.Q3 :nth-child(4){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 1.1rem;
}
.Q4{
    top:3.6rem;
    position: relative;
}
.Q4 :nth-child(1){
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.17rem;
}
.Q5{
    top:3.7rem;
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
    top: 0.3rem;
}
.Q5 :nth-child(3){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.6rem;
}
</style>