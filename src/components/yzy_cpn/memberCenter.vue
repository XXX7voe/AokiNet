<template>
    <div id="memberCenter" class="animated fadeIn">
         <div class="head">
            <i class="el-icon-arrow-left" @click="mySelf()"></i>
            <span>会员中心</span>
        </div>
        <div class="center">
            <p>为账户 <span class="username" v-text="tb=='true'? Name:name"></span> 购买会员</p>
            <div class="centerTitle">
                <div class="title" @click="vipInstructions()">
                    <span>会员特权</span>
                    <span>会员说明</span>
                    <i class="el-icon-arrow-right"></i>
                </div>
                <div class="centerCenter">
                    <img class="dataImg" src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUxpcVGm/1Kn/1Kn/1Gm/1Gm/6f//1Gm/1ao/1Wq/1Gm/1Gm/1Gm/1Kn/1qx/1Gm/1Gm/2C2/1Gm/1Gm/2O2/1Om/1Sq/1Wq/1Sp/1Gm/1Ko/1er/1Gn/1Gm/1Gn/1Kn/1Kn/1Kn/1Kn/1Kn/1Gn/1Gm/1Gm/1Sp/1Gm/1Gm/1Kn/1Gm/1Gm/0Kn+j4AAAAsdFJOUwCKSJH+1gH4JSD1+6C3Du2ZBKflCSsaKC7BNhSwb8pmeEJWT7zGgzzR2l7fYL3NXQAAA75JREFUeNrFlmtzgjoQQMNDwaC8Kw9B8Vltz///fbfFXOoItUFn7j0fjCNwzO6GZMV/QroPiyQ4zj/85x3+rpIovMVm9Yxj9bFwuGKroaiX4xzLzcGjZd2UflrWhXc1rZuZrmNWFzYA9rHuHlptFkp8brK/HW6zVsk4bO5C8D8qFebklD9y5KczLY5KaD/psaTl0ying47SuNAiq0flTffzgJbE2kZ3F9+tT1qCeJeKP4jMUJmC0LyZk7lWv873qdAi2lqJytPuX1EDQBKqOWoyLY1rBOHVUwOB9T4V4ylPCWC1K0JC7IsnSS2wv8tvQBGJ54mh+hoK2IrxuN2ih+RrCOCJkEppqWQqATjjLVkAhvo+gZmGxq/3vR0ggWQ2TtOAeyeeQPAmdDVmuyWEYH4N+0PeTeaM8y50NQ3O8keT4HQV9Yu90NWUHs5Kaa6DLEWHria9QHMTVFqohIzTWHCMbjTCP6vyjNHsbaQrbjWRBVxWozRbBzbiVpOfAThEIzRbCbG40USNA4QSLH3Nzrn5Wwsy9wjIjdjZsNPVmB4c/W6xGVboAMV3ek8g3zQ1MRzSn+2+sgFZT9s8F7DW1JRrI+1OyyMAhXvzVqZ6GkVUNuooX5uiIz802pWKsp2xCGhx4t7uqKPZh4dPjw4ZWz8Ym1RTM+Mh66meJrcBj1950wwqM9/dFILyrUe+hq2ORjGFiRhgDub/osEbwP5V4+ENa4bpay6txsEe1MjFAMmwZimEhOlLufmEVXsEpy9pElipzwFNYAwwGdBIiFSiX0mx3ZZ6DfkrGh+Cr6ECc0jz6Q4wcHMG5+uOvXklxVtYXPsOQ/TwCHK3Rzbwam4g/Br2UPU1Cb+R9Q/pumsB7zG0ty3Vgk4DcPvJ2RnzAcLav288HOyVOpU24mlMWKsccex1vNrM4XQ90Rx463W8mviyeziGuNfxanL6CaUEO+91vFos5U2HEcM56nW8OlS3K8CVYPU6Xg1qsG9u3wB11/Fqs/fu8hiD/SFGsnVUs9oRHcBuxll2Dkz8u/ofgTDVl0xPNlyWvaa8As7aK3h1ANYr0SOyVIenwy4A4nT4mgSOmcaiqwCvFr/gFoBn+I8lUSOBSfkgb7UEko9Hke0vgHeKxCNmFcD51zX4fgQocvEX5gWgGHwl8op2tkKDqA4ADr3gs9gG5MkXevgnCbAo+xIvXAl9lpbTirrQ8lZix64YxzL0AIrtd9XK6irJxHhmoQOQVNWFVtIvj35oCk/N5EmRkQAEliteY5qZZh6JP/gH4pi+7mLJkZ4AAAAASUVORK5CYII=" alt="">
                    <p>减免配送费</p>
                    <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                    <p>蜂鸟专送专享</p>
                </div>
                 <div class="centerFoot">
                   <img class="dataimg" src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB+UExURUxpcVKn/1qw/1Or/1Gm/1Gm/1Gm/1Gm/1Or/1Gm/1Ws/3DU/1Gm/161/1Gn/1Gm/1Op/1Kn/1Gn/1Oo/1Gn/1Kn/1Gn/1Sq/1Gn/1Kn/1Gm/1Gn/1Gn/1Sp/1Gm/1Gm/1Gm/1Gm/1Kn/1Kn/1Gm/1Gn/1Gm/1Gn/1Kn/1Gm/xLw9zUAAAApdFJOUwBEDxz9w/T5ItYWA+0IbeUtTZo2tJPMJ9N+pHZVPa7bvOFcY4SNialmEIpfyAAAA5pJREFUeNq9l+mSojAYRdlRZEdRVFBc+7z/C45DUhZtFCJTNfdPbJXjt+UmbfwXRfvcTUI3P1nTGdap8ZDyjz/BFEZwXvoIOXJxY/s7hh0f5bPlrrCiInYdQSp3M13G7PGQ8vPBz9GX4Go9zljvSrUYz1JJ0vySDjHSaiMZy3Pwtuj7uyx6eyveM4rbgU5eM9TeKNuGdEpW9eLlw/raSsZ2HxkjWpi5JIW52SOZJfLdTDJGSfUqkXXaG1KViFGQ9VXIDHLxZwyEVyVPLdIlAVbdRHhwtyZvuis4f9t/A3dhTNcW7o/FBXPC0+vn0EPyWEKYkFLhrWQKEgD+hFhCuMnXc5hNw9gtJPa/Yqw5hKnxrxh7g18bo5is5aOS7G84bmaMYhYhAwpFh8YxAYMKNDE2JMYHJWBrYmZw+IQ5wEwTk8LmE2YDqSamgPKxVFXVr/uqih9LCYUmpgb3sfgQ/ap7KDZyrYkx4Sique6FKAp2BFMTk8FSlKE3ZCcR4hIyTcwemseSw9V4KhdbuoG9JuYEWxGU/2zu2hfZbOGkiTkLt18cwLXlKJWwkUGdNTGxNHvTAW9XB0G988DpOrSCWBOzg6t44fCUI56+wk4TU8FFFjvp+UOnC1SjGOWr0blpPa9tzpHyE4MYNXA1YQ2MWka1/HoYtanqMKgYR8EoI6aOpmpBPo7RkzLw6kZRMbZheGD0pG4/ddv+VtvZcyhtRUoxA9VEVHu2JKwv1ZpUS+vLg4UsdE+qUaoG25fsUQnpgG2P2r0FoehLNnCIjB4+awFewXngSBs9Ck3Ru51wx55CBhUav/QD+dtJmDOo+dsdOIP2JcyWAbWmMh6mzGFtTFbk43RX0DvE0zEmcpDOL4P5XWhbpB1aPqyVG6+mLA/SJ3Cr3Hg1deGZSgFOqtx4tWR7PW+6QxkpN14dLfs7debBVbnxaigGp+4PtGi6uPFqK/Nf6ngH5/T1yPiv/4pFR3B231H2Psytl/67QB7pQxaVAwelp9ESKLUnODgCZfAGvwK8WDOhELhH7z/zAFcjILsB/Pij0bqAf7NGrGHnAZtioG6xByTnxdCwHAD/MtyNWQOw+TiDtQvgpuNDdQBw326JtAFITloTEYcARyX59d0BvMrS9aKLB7AsfkG2DuDngaEve+UDHOtnOl0kzvZb87dzATI7Y2s6yH3KCTIToLZpDnQQpT3fpUYvnYmgWwsQriRkutZmlo6eOH8AyHKn4WUusgUAAAAASUVORK5CYII=" alt="">
                    <p>减免配送费</p>
                    <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                    <p>蜂鸟专送专享</p>
                </div>
            </div>
        </div>
        <div class="foot">
            <div class="footHead">
                <p>开通会员</p>
            </div>
            <div> 
            <span class="vip">1个月</span>
            <span class="price">￥20</span>
            <button @click="buy()">购买</button>
            </div>  
        </div>
        <div class="VIP" @click="vipExchange()">
            <span>兑换会员</span>
            <span>使用卡号卡密</span>
            <i class="el-icon-arrow-right"></i>
        </div>
        <div class="buy" @click="purchaseRecords()">
            <span>购买记录</span>
            <span>开发票</span>
            <i class="el-icon-arrow-right"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'memberCenter',
    data() {
        return {
            name:''
        };
    },
    computed:{
        tb(){
             return this.$cookies.get('tb')
         },
          Name(){
             return this.$cookies.isKey('username') ? this.$cookies.get('username'):''
         },
    },
    methods: {
        // 返回我的界面
       mySelf(){
            this.$router.push({
                name:'mySelf'
            })
        },
        // 会员说明界面
        vipInstructions(){
             this.$router.push({
                name:'vipInstructions'
            })
        },
        // 购买界面
        buy(){
            this.$router.push({
                name:'pay'
            })
        },
        // 使用卡密跳转兑换会员
        vipExchange(){
            this.$router.push({
                name:'vipExchange'
            })
        },
        // 开发票跳转到购买记录界面
        purchaseRecords(){
             this.$router.push({
                name:'purchaseRecords'
            })
        }
    },
};
</script>

<style  scoped>
#memberCenter{
    background-color: rgb(245, 245, 245);
    height: 6.46rem;
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
.center{
    position: relative;
    top: 0.55rem;
}
.center p{
    color: #666;
    font-size: 0.18rem;
    margin-left: 0.1rem;
}
.username{
    font-weight: 700;
    font-family: Helvetica Neue,Tahoma,Arial;
    color: black;
}
.centerTitle{
    height: 3rem;
    background-color: rgb(255,255,255);
    position: relative;
    top: 0.08rem;
}
.title{
    position: relative;
}

.title :nth-child(1){
    font-size: 0.1rem;
    color: #333;
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
}
.title :nth-child(2){
    font-size: 0.088rem;
    color: #999;
    position: absolute;
    left: 3.2rem;
    top: 0.088rem;
}
.el-icon-arrow-right{
    position: absolute;
    top: 0.1rem;
    left: 3.6rem;
}
.centerCenter{
    position: relative;
    height: 2rem;
    top: 0.5rem;
    width: 100%;
    border-top: 0.01rem solid #f5f5f5;
}
.dataImg{
    width: 0.4rem;
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
}
.centerCenter :nth-child(2){
    font-size: 0.15rem;
    font-weight: 400;
    color: #333;
    position: absolute;
    left: 0.65rem;
    top: 0.15rem;
}
.centerCenter :nth-child(3){
    font-size: 0.15rem;
    font-weight: 400;
    color: #999;
    position: absolute;
    left: 0.65rem;
    top: 0.38rem;
}
.centerCenter :nth-child(4){
    font-size: 0.15rem;
    font-weight: 400;
    color: #999;
    position: absolute;
    left: 0.65rem;
    top: 0.85rem;
}
.centerFoot{
    position: relative;
    height: 2rem;
    top: -0.2rem;
    width: 100%;
    border-top: 0.01rem solid #f5f5f5;
}
.dataimg{
    width: 0.4rem;
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
}
.centerFoot :nth-child(2){
    font-size: 0.15rem;
    font-weight: 400;
    color: #333;
    position: absolute;
    left: 0.65rem;
    top: 0.15rem;
}
.centerFoot :nth-child(3){
    font-size: 0.15rem;
    font-weight: 400;
    color: #999;
    position: absolute;
    left: 0.65rem;
    top: 0.38rem;
}
.centerFoot :nth-child(4){
    font-size: 0.15rem;
    font-weight: 400;
    color: #999;
    position: absolute;
    left: 0.65rem;
    top: 0.85rem;
}
.foot{
    position: relative;
    top: 0.75rem;
    height: 0.9rem;
    background-color: rgb(255,255,255);
}
.footHead{
    width: 0.9rem;
    margin-top: -0.3rem;
    margin-left: -0.1rem;
}
.foot :nth-child(1){
    font-size: 0.2rem;
    position: absolute;
    left: 0.1rem;
    top: 0.2rem;
}
.foot div{
    position: relative;
}
.vip{
    margin-top:0.4rem;
}
.price{
    position: absolute;
    left: 0.68rem;
    font-weight: 700;
    color: #f60;
    top: 0.65rem;
}
.foot :nth-child(3){
position: absolute;
left: 3rem;
top: 0.6rem;
width: 0.5rem;
border: 0.005rem solid #f60;
border-radius: 0.05rem;
font-size: 0.13rem;
color: #f60;
}
.VIP{
    height: 0.65rem;
    position: relative;
    top: 0.9rem;
    background-color: rgb(255,255,255);
    line-height: 0.65rem;
}
.VIP :nth-child(1){
    position: absolute;
    left: 0.1rem;
    font-weight: 400;
    font-style: normal;
    font-size: 0.15rem;
    color: #333;
}
.VIP :nth-child(2){
    position: absolute;
    left: 2.8rem;
    color: #999;
    font-weight: 400;
    font-size: 0.1rem;
}
.VIP :nth-child(3){
    position: absolute;
    left:3.5rem;
    top: 0.25rem;
}
.buy{
    height: 0.65rem;
    position: relative;
    top: 1rem;
    background-color: rgb(255,255,255);
    line-height: 0.65rem;
}
.buy :nth-child(1){
    position: absolute;
    left: 0.1rem;
    font-weight: 400;
    font-style: normal;
    font-size: 0.15rem;
    color: #333;
}
.buy :nth-child(2){
    position: absolute;
    left: 3.1rem;
    color: #999;
    font-weight: 400;
    font-size: 0.1rem;
}
.buy :nth-child(3){
    position: absolute;
    left:3.5rem;
    top: 0.25rem;
}
</style>