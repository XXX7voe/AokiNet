<template>
<!-- 积分商城 -->
    <div id="integralMall" class="animated fadeIn">
          <div class="head">
              <!-- 返回到我的界面 -->
            <i class="el-icon-arrow-left" @click="mySelf()"></i>
            <span>积分商城</span>
        </div>
        <div class="center">
            <p>请重新进入</p>
            <p>请返回后重新进入积分商城或活动~</p>
            <img src="//yun.duiba.com.cn/webapp/img/retrylogin.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'integralMall',
    data() {
        return {
            
        };
    },
    methods: {
        mySelf(){
            this.$router.push({
                name:'mySelf'
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
    position: relative;
    top: 0.5rem;
    left: 0.5rem;
}
.center :nth-child(1){
    font-size: 0.36rem;
    font-weight: 700;
    color: #0d7fd5;
    position: absolute;
    top: 1.3rem;
    left: 0.65rem;
}
.center :nth-child(2){
    font-size: 0.15rem;
    position: absolute;
    top: 1.9rem;
    left: 0.3rem;
}
.center :nth-child(3){
    width: 2.2rem;
    position: absolute;
    top: 2.2rem;
    left: 0.35rem;
}
</style>