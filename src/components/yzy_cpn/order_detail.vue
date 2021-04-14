<template>
    <div id="order_detail" class=" animated fadeInRight">
        <div class="head">
            <i class="el-icon-arrow-left" @click="back()"></i>
            <span>订单详情</span>
        </div>
        <div class="content">
            <div class="one">
                <img :src="'https://elm.cangdu.org/img/'+shop.detailObj.image_path" alt=""><br>
                <p v-text="timeIsShow ? '等待支付' : '支付超时'"></p>
                <button class="btn">再来一单</button>
            </div>
            <div class="two">
                <p>
                    <img :src="'https://elm.cangdu.org/img/'+shop.detailObj.image_path" alt="">
                    <span v-text="shop.detailObj.name"></span>
                    <i class="el-icon-arrow-right"></i>
                </p>
                <p class="shops" v-for="(v,i) in shop.shopsCar" :key="i">
                    <span v-text="v.name"></span>
                    <span>X{{v.specfoods[0].original_price}}</span>
                    <span>￥{{v.specfoods[0].price}}</span>
                </p>
                <p class="p3">
                    <span>配送费</span>
                    <span v-text="shop.detailObj.float_delivery_fee"></span>
                </p>
                <p class="p4">
                    实付{{shop.sumPrice}}
                </p>
            </div>
            <div class="three">
                <p>
                    配送信息
                </p>
                <p>
                    送达时间:
                </p>
                <p>
                    送货地址:{{shop.address.detailAddress}}<br> <span style="margin-left:0.68rem">{{shop.address.title}}</span>
                </p>
                <p>
                    配送方式:蜂鸟专送
                </p>
            </div>
            <div class="four">
                <p>订单信息</p>
                <p>订单号:22025</p>
                <p>支付方式:在线支付</p>
                <p>下单时间:{{shop.orderTime}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'order_detail',
    data() {
        return {
            timeIsShow:false,
            index:0,
            shop:{}
        };
    },
    created() {
        this.timeIsShow = Boolean(this.$route.query.timeIsShow)
        this.index = parseInt(this.$route.query.index)
        this.shop = this.orders[this.index];
    },
    methods: {
        back(){
            this.$router.back()
        }
    },
    computed:{
        ...mapState(["orders"])
    }
};
</script>

<style  scoped>
#order_detail{
    background-color: #F5F5F5;
}
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
.one{
    height: 2rem;
    background-color: rgb(255,255,255);
}
.one img{
    margin-top: 0.15rem;
    border-radius: 50%;
    width: 0.8rem;
    margin-left: 1.48rem;
    border: 0.01rem solid #3190e8;
}
.one p{
    font-size: .22rem;
    color: #333;
    font-weight: 700;
    margin-top: -0.02rem;
    text-align: center;
}
.btn{
    font-size: .15rem;
    color: #3190e8;
    background-color: white;
    margin-top: .15rem;
    margin-left: 1.5rem;
    border: 0.01rem solid #3190e8;
    border-radius: .01rem;
    width: 0.7rem;
}
.two{
    margin-top: 0.15rem;
    background-color: rgb(255,255,255);
}
.two :nth-child(1){
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .01rem solid #f5f5f5;
}
.two :nth-child(1) img{
    width: .3rem;
    margin-left: .15rem;
    margin-top: .1rem;
    vertical-align: middle;
    margin-bottom: .05rem;
}
.two :nth-child(1) span{
   font-size: .18rem;
   font-weight: 700;
   color: #333;
    margin-top: .06rem;
    width: 1.5rem;
   margin-left: -1.2rem;
}
.two :nth-child(1) .el-icon-arrow-right{
    margin-right: 0.15rem;
    font-size: 0.15rem;
    color:  #666;
}
.shops{
    display: flex;
    justify-content: space-between;
    line-height: 0.4rem;
    border-bottom: .01rem solid #f5f5f5;
}
.shops>:nth-child(1){
    margin-left: 0.15rem;
}
.shops>:nth-child(2){
    margin-left: 2rem;
    font-size: .15rem;
    color: #ccc;
}
.shops>:nth-child(3){
    margin-right: .15rem;
    font-size: .15rem;
}
.p3{
    display: flex;
    justify-content: space-between;
    line-height: 0.4rem;
    border-bottom: .01rem solid #f5f5f5;
}
.p3>:nth-child(1){
    margin-left: 0.15rem;
}
.p3>:nth-child(2){
    margin-right: 0.2rem;
}
.p4{
    margin-left: 2.8rem;
    line-height: 0.5rem;
    text-align: center;
    color: #fb6b23;
    font-weight: 700;
}
.three{
    margin-top: 0.15rem;
    background-color: rgb(255,255,255);
}
.three>:nth-child(1){
    border-bottom: .01rem solid #f5f5f5;
}
.three>:nth-child(1):nth-child(1){
    font-size: .18rem;
    padding-left: .15rem;
    padding-top: .15rem;
    padding-bottom: .1rem;
    color: #333;
}
.three>:nth-child(2):nth-child(2),.three>:nth-child(3):nth-child(3),.three>:nth-child(4):nth-child(4){
    color: #666;
    line-height: .3rem;
    padding-left: .15rem;
    padding-top: .05rem;
    font-size: .15rem;
}
.four{
    margin-top: 0.1rem;
    height: 1.7rem;
    background-color: rgb(255,255,255);
}
.four>:nth-child(1){
    border-bottom: .01rem solid #f5f5f5;
}
.four>:nth-child(1):nth-child(1){
    font-size: .18rem;
    padding-left: .15rem;
    padding-top: .15rem;
    padding-bottom: .1rem;
    color: #333;
}
.four>:nth-child(2):nth-child(2),.four>:nth-child(3):nth-child(3),.four>:nth-child(4):nth-child(4){
    color: #666;
    line-height: .3rem;
    padding-left: .15rem;
    padding-top: .05rem;
    font-size: .15rem;
}

</style>