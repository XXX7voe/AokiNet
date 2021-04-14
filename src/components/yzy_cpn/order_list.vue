<template>
    <div id="order_list" class="animated fadeIn" v-if="tb == 'true'">
        <ul>
            <li v-for="(v,i) in orders" :key="i" @click="linkOrderDetail(v,i)">
                <div>
                    <img :src="'https://elm.cangdu.org/img/'+v.detailObj.image_path" alt="">
                </div>
            <div>
                <p class="retat_name">
                    <span>{{v.detailObj.name}}</span>
                    <span>></span>
                </p>
                <span class="waitPay" v-text="v.timeIsShow ? '等待支付' : '支付超时'">等待支付</span>
                <p class="timed">{{v.orderTime}}</p>
            </div>
                <div>
                    <span>{{v.shopsCar[0].name}}</span>
                    <span>￥{{v.sumPrice}}</span>
                </div>
                <div v-if="v.timeIsShow">
                    <p
                    style="display:flex;"
                    >去支付(还剩<van-count-down
                    @finish="closeTime(i)"
                    style="color:red;"
                     :time="1000*60*(new Date(v.time).getMinutes() - new Date().getMinutes())" format="mm 分 ss 秒"/>)</p>
                </div>
                <div id="again"
                v-if="!v.timeIsShow"
                >再来一单</div>
            </li>
        </ul>
    </div> 
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'order_list',
    data() {
        return {
            mes:'',
        };
    },
    computed:{
         tb(){
            return this.$cookies.get('tb')
        },
        ...mapState(["orders"])
    },
    created(){
        this.order_list();
    },
    methods: {
        linkOrderDetail(v,i){
            this.$router.push({
                path:"/order_detail",
                query:{
                    timeIsShow:v.timeIsShow,
                    index:i
                }
            })
        },
        closeTime(i){
            this.orders[i].timeIsShow = false;
        },
         order_list(){
            this.$request({
                url:'/bos/orders?offset=0&limit=20',
            }).then(res=>{
            //    console.log(res.addresss_id)
               this.mes = res
            })
        },
    },
};
</script>

<style  scoped>
#order_list{
    background-color: rgb(245,245,245);
}
ul > li{
    margin-top: 0.25rem;
    height: 1.8rem;
    background-color: rgb(255,255,255);
    position: relative;
}
ul > li >div:nth-child(2){
    position: relative;
}
ul > li >div:nth-child(1){
    width: 0.8rem;
    height: 1.2rem;
}
ul > li >div:nth-child(1)>img{
    margin-top: 0.3rem;
    margin-left: 0.2rem;
    width: 0.4rem;
}
.retat_name{
    position: absolute;
    font-size: 0.15rem;
    font-weight: 700;
    color: #393939;
    top: -0.9rem;
    left: 0.7rem;
}
.waitPay{
    font-size: 0.13rem;
    font-weight: 700;
    color: #393939;
    position: absolute;
    top: -0.9rem;
    right: 0.2rem;
}
.timed{
    position: absolute;
    top: -0.62rem;
    left: 0.7rem;
    font-size: 0.1rem;
}
ul > li >div:nth-child(3){
   position: relative;
}
ul > li >div:nth-child(3)>span:nth-child(1){
    position: absolute;
    top: -0.2rem;
    left: 0.7rem;
    color: #393939;
    font-weight: 700;
}
ul > li >div:nth-child(3)>span:nth-child(2){
    position: absolute;
    top: -0.2rem;
    left: 2.9rem;
    color: #FF6235;
    font-weight: 700;
}
ul > li >div:nth-child(4){
    margin-top: 0.26rem;
    margin-left: 2.3rem;
    border-radius: 0.025rem;
    border: 0.01rem solid #FF6235;
    color: #FF6235;
}
#again{
    display: inline-block;
    position: absolute;
    right: 0.16rem;
    bottom: 0.13rem;
    padding: 0 0.05rem;
    border:1px solid rgb(88,165,236);
    color:rgb(88,165,236);

}
</style>