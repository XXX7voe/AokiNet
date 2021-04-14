<template>
    <div id="voucherDescription" class="animated fadeIn">
         <div class="head">
            <i class="el-icon-arrow-left" @click="vouchers()"></i>
            <span>代金券说明</span>
        </div>
        <div class="center">
        <div class="Q1">
        <p>Q1: 什么是商家代金券？</p>
        <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
        </div>

        <div class="Q2">
        <p>Q2: 怎么获得商家代金券？?</p>
        <p>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</p>
        <p>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</p>
        </div>

        <div class="Q3">
            <p>Q3:商家代金券使用条件</p>
            <p>商家代金券仅限在指定商家使用</p>
            <p>商家代金券仅限在线支付使用</p>
            <p>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</p>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'voucherDescription',
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        vouchers(){
            this.$router.push({
                name:'vouchers'
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
    margin-left: 1.1rem;
    font-size: 0.2rem;
    margin-top: 0.1rem;
    color: white;
    font-weight: 700;
}
.center{
    padding: 0.1rem 0.12rem;
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
.Q2 :nth-child(3){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.9rem;
}
.Q3{
    top:3rem;
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
    top: 0.3rem;
}
.Q3 :nth-child(3){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.55rem;
}
.Q3 :nth-child(4){
    font-weight: 400;
    font-family: Microsoft Yahei;
    font-size: 0.15rem;
    color: #666;
    position: absolute;
    left: 0.02rem;
    top: 0.8rem;
}
</style>