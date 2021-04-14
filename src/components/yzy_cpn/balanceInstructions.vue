<template>
    <div id="balanceInstructions" class="animated fadeIn">
          <div class="head">
            <i class="el-icon-arrow-left" @click="balance()"></i>
            <span>余额问题</span>
        </div>
        <div class="center">
             <div class="Q1">
        <p>Q1:使用余额的条件</p>
        <p>为了保护账户安全，使用余额前必须先绑定账号。</p>
        </div>

        <div class="Q2">
        <p>Q2:余额可以怎么用?</p>
        <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
        </div>

        <div class="Q3">
            <p>Q3:我要如何提现？</p>
            <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
        </div>

        <div class="Q4">
            <p>Q4:为什么会提现失败？</p>
            <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'balanceInstructions',
    data() {
        return {
            
        };
    },
    methods:{
        balance(){
            this.$router.push({
                name:'balance'
            })
        }
    }
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
.center{
    padding: 0.1rem 0.12rem;
}
.Q1{
    top:0.1rem;
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
.Q2{
    top:0.6rem;
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
    top:1.5rem;
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
    top: 0.4rem;
}
.Q4{
    top:3rem;
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
    top: 0.4rem;
}
</style>