<template>
    <div id="mySelf" class="animated fadeIn">
        <div class="center" @click="tb=='true'?userInFormations():login()">
                <img class="img1" :src="tb=='true'?Photo:img1">
                <p v-text="tb=='true'?Name:name"></p>
                <span class="phone"><Icon type="md-phone-portrait"/>暂无绑定手机号</span>
                <i class="el-icon-arrow-right"></i>
        </div>
        <div class="menu">
            <!-- 跳转到我的余额界面 -->
            <div class="balance" @click="balance()">
                <span>0.00</span>
                <span>元</span>
                <p>我的余额</p> 
            </div>
            <!-- 跳转到我的优惠界面 -->
             <div class="sale" @click="sale()">
                <span v-text="tb=='true'?'3':'0'"></span>
                <span>个</span>
                <p>我的优惠</p>
            </div>
            <!-- 跳转到我的积分界面 -->
             <div class="integral" @click="integral()">
                <span>0</span>
                <span>分</span>
                <p>我的积分</p>
            </div>
        </div>

        <div class="center_menu">
            <div @click="order()">
                <i class="el-icon-tickets"></i>
                <span>我的订单</span>
                <i class="el-icon-arrow-right"></i>
            </div>
            <div @click="integralMall()">
                <i class="el-icon-goods"></i>
                <span>积分商城</span>
                <i class="el-icon-arrow-right"></i>
            </div>
             <div @click="memberCenter()">
                <i class="el-icon-star-off"></i>
                <span>饿了么会员卡</span>
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>

         <div class="foot_menu">
            <div @click="ServiceCenter()">
                <i class="el-icon-suitcase"></i>
                <span>服务中心</span>
                <i class="el-icon-arrow-right"></i>
            </div>
            <div @click="downLoad()">
                <i class="el-icon-platform-eleme"></i>
                <span>下载饿了么APP</span>
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.jpg'
export default {
    name: 'mySelf',
    data() {
        return {
            name:"登录/注册",
            img1,
            img2
        };
    },
    computed:{
         Name(){
             return this.$cookies.get('username');
         },
          Photo(){
            return this.$cookies.isKey('Photo') ? this.$cookies.get('Photo'):this.img2;
        },
         tb(){
             return this.$cookies.get('tb');
         }
    },
    methods: {
        userInFormations(){
            this.$router.push({
                name:'userInFormations'
            }) 
        },
        login(){
             this.$router.push({
                name:'login'
            }) 
        },
        order(){
            this.$router.push({
                name:'order_list'
            })
        },
        balance(){
            this.$router.push({
                name:'balance'
            })
        },
        sale(){
            this.$router.push({
                name:'sale'
            })
        },
        integral(){
             this.$router.push({
                name:'points'
            })
        },
        integralMall(){
            this.$router.push({
                name:'integralMall'
            }) 
        },
        memberCenter(){
            this.$router.push({
                name:'memberCenter'
            }) 
        },
        downLoad(){
             this.$router.push({
                name:'downLoadPage'
            }) 
        },
        ServiceCenter(){
            this.$router.push({
                name:'ServiceCenter'
            }) 
        },
    },
};
</script>

<style  scoped>
.img1{
    position: absolute;
    top: 0.6rem;
    left: 0.1rem;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
}
#mySelf{
    background-color: rgb(245,245,245);
    width: 100%;
}
.center{
   background-color: #0092E8;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.38rem;
    position: relative;
}
.center span{
    margin-left: 1.5rem;
    font-size: 0.2rem;
    margin-top: 0.1rem;
    color: white;
    font-weight: 700;
}
.el-icon-s-custom{
    font-size: 0.6rem;
    position: absolute;
    left: 0.2rem;
    top: 0.6rem;
    color: white;
}
.center p{
    position: absolute;
    left: 0.8rem;
    top: 0.65rem;
    font-weight: 700;
    font-size: 0.2rem;
    color: #fff;
}
.phone{
    font-size: 0.2rem;
    position: absolute;
    top: 0.95rem;
    left: 0.8rem;
    color: white;
}
.center span{
    position: absolute;
    top: 0.9rem;
    left: -0.7rem;
    font-size: 0.15rem;
    color: #fff;
}
.el-icon-arrow-right{
    font-size: 0.2rem;
    color: white;
    position: absolute;
    left: 3.3rem;
    top: 0.8rem;
}
.menu{
    background-color: rgb(255,255,255);
    display: flex;
    justify-content: space-around;
}
.balance{
    margin-top: 0.2rem; 
}
.balance :nth-child(1){
    font-size: 0.3rem;
    color: rgb(255, 147, 0);
    font-weight: 700;
    line-height: 0.3rem;
}
.balance :nth-child(3){
    margin-left: 0.04rem;
    margin-top: 0.1rem;
}

.sale{
    margin-top: 0.2rem; 
}
.sale :nth-child(1){
    font-size: 0.3rem;
    margin-left: -0.08rem;
    color:#ff5f3e;
    font-weight: 700;
    line-height: 0.3rem;
}
.sale :nth-child(3){
    margin-top: 0.1rem;
    margin-left: -0.15rem;
}

.integral{
    margin-top: 0.2rem;
}
.integral :nth-child(1){
    font-size: 0.3rem;
    color: #6ac20b;
    font-weight: 700;
    line-height: 0.3rem;
}
.integral :nth-child(3){
    margin-top: 0.1rem;
    margin-left: -0.08rem;
}
.center_menu{
    margin-top: 0.1rem;
    height: 1.5rem;
    background-color: rgb(255,255,255);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.center_menu :nth-child(1){
    padding-left: 0.1rem;
    margin-top: 0.1rem;
    background-color: rgb(255,255,255);
}
.center_menu :nth-child(1) .el-icon-arrow-right{
  font-size: 0.2rem;
  position: absolute;
  left: 3.35rem;
  top: 2.55rem;
  color: #999;
}
.el-icon-tickets{
    font-size: 0.2rem;
}
.center_menu :nth-child(1) span{
    font-size: 0.2rem;
    font-family: Helvetica Neue,Tahoma,Arial;
}
.center_menu :nth-child(2){
    padding-left: 0.1rem;
    background-color: rgb(255,255,255);
}
.center_menu :nth-child(2) .el-icon-arrow-right{
  font-size: 0.2rem;
  position: absolute;
  left: 3.35rem;
  top: 3.05rem;
  color: #999;
}
.el-icon-goods{
    font-size: 0.2rem;
    color: #FF7346;
}
.center_menu :nth-child(2) span{
    font-size: 0.2rem;
    font-family: Helvetica Neue,Tahoma,Arial;
}
.center_menu :nth-child(3){
    padding-left: 0.1rem;
    background-color: rgb(255,255,255);
}
.center_menu :nth-child(3) .el-icon-arrow-right{
  font-size: 0.2rem;
  position: absolute;
  left: 3.35rem;
  top: 3.5rem;
  color: #999;
}
.el-icon-star-off{
    font-size: 0.2rem;
    color:#FFC330;
}
.center_menu :nth-child(3) span{
    font-size: 0.2rem;
    font-family: Helvetica Neue,Tahoma,Arial;
}
.foot_menu{
    margin-top: 0.1rem;
    height: 0.8rem;
    background-color: rgb(255,255,255);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.foot_menu :nth-child(1){
    padding-left: 0.1rem;
    background-color: rgb(255,255,255);
}
.foot_menu :nth-child(1) .el-icon-arrow-right{
  font-size: 0.2rem;
  position: absolute;
  left: 3.45rem;
  top: 4.05rem;
  color: #999;
}
.el-icon-suitcase{
    font-size: 0.2rem;
    color:#00A7F0;
}

.foot_menu :nth-child(1) span{
    font-size: 0.2rem;
    font-family: Helvetica Neue,Tahoma,Arial;
    
}
.foot_menu :nth-child(2){
    padding-left: 0.1rem;
    background-color: rgb(255,255,255);
}
.foot_menu :nth-child(2) .el-icon-arrow-right{
  font-size: 0.2rem;
  position: absolute;
  left: 3.45rem;
  top: 4.45rem;
  color: #999;
}
.el-icon-platform-eleme{
    font-size: 0.2rem;
    color:#00A7F0;
}
.foot_menu :nth-child(2) span{
    font-size: 0.2rem;
    font-family: Helvetica Neue,Tahoma,Arial;
}
</style>