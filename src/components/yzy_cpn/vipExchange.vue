<template>
    <div id="vipExchange" class="animated fadeIn">
        <div class="head">
            <i class="el-icon-arrow-left" @click="memberCenter()"></i>
            <span>兑换会员</span>
        </div>
        <div class="title">
            <span>成功兑换后将关联到当前账号:</span>
            <!-- 账号名称 -->
            <span></span>
        </div>
        <div class="inp">
            <input type="text" placeholder="请输入10位卡号"><br>
            <input type="text" placeholder="请输入6位卡密">
        </div>
            <button class="btn">兑换</button>
        <div class="foot">
            <p>————温馨提示——————</p>
            <p>新兑换的会员服务，权益以「会员说明」为准。</p>
            <p>月卡：30次减免配送费。</p>
            <p>季卡：90次减免配送费。</p>
            <p>年卡：360次减免配送费。</p>
            <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vipExchange',
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
#vipExchange{
    background-color:#F5F5F5;
    height: 6.46rem;
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
.title{
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    color: #666;
    font-size: 0.15rem;
}
.title :nth-child(2){
    font-weight: 700;
    color: #333;
    font-size: 0.2rem;
}
.inp{
    height: 1rem;
    background-color: rgb(255,255,255);
}
.inp :nth-child(1){
    width: 100%;
    border-bottom: 0.01rem solid #f5f5f5;
}
.inp input{
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    line-height: 0.4rem;
    border:none;
    outline: none;
    font-size: 0.15rem;
}
.btn{
    background-color: #ccc;
    font-size: 0.2rem;
    color: #fff;
    text-align: center;
    margin: 0.15rem;
    line-height: 0.5rem;
    border-radius: 0.05rem;
    margin-top: 0.2rem;
    width: 92%;
    font-weight: 700;
    outline: none;
    border: none;
}
.foot{
    font-size: 0.15rem;
    color: #aaa;
    padding: 0.5rem 0.5rem;
    position: relative;
}
</style>