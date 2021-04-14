<template>
    <div id="envelope" class="animated fadeIn" >
        <div class="head">
            <i class="el-icon-arrow-left" @click="sale()"></i>
            <span>兑换红包</span>
        </div>
        <div class="center">
            <input type="text" placeholder="请输入兑换码">
        </div>
        <div class="code">
            <input type="text" placeholder="验证码" v-model="code"> 
            <img @click="getCode()" :src="imgCode" alt="" class="codeImg">
        </div>
        <button class="btn"   @click="getCode(),gain()">兑换</button>
        <div id="alert" v-show="show" class="animated  bounceIn">
            <i class="el-icon-warning-outline"></i>
            <p v-text="message"></p>
            <button class="Alertbtn" @click="SHOW()">确认</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'envelope',
    data() {
        return {
            imgCode:'',
            code:'',
            message:'',
            show:false
        };
    },
     created(){
        this.getCode();
    },
    methods: {
        SHOW(){
            this.show = false
        },
        sale(){
            this.$router.push({
                name:'sale'
            })
        },
        getCode(){
            this.$request({
                url:"/v1/captchas",
                method:"post",
                withCredentials:true,
            }).then(res=>{
               this.imgCode = res.code;
            })
        },
        gain(){
            this.$request({
                url:"v1/users/:user_id/hongbao/exchange",
                method:"post",
            }).then(res=>{
               console.log(res);
               if(status ==0 ){
                   this.message = res.message;
                   this.show = true
               }
            })
        }
    },
};
</script>

<style  scoped>
#envelope{
    background-color: #F1F1F1;
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
    top: 0.7rem;
    left: 0.2rem;
}
.center input{
    outline: none;
    border: none;
    border-radius: 0.05rem;
    width: 90%;
    height: 0.5rem;
    text-indent: 0.1rem;
}
.code{
    position: relative;
    top: 0.8rem;
    left: 0.2rem;
}
.codeImg{
    position: absolute;
    top: 0.1rem;
    left: 2.4rem;
}
.code input{
    outline: none;
    border: none;
    border-radius: 0.05rem;
    width: 60%;
    height: 0.5rem;
    text-indent: 0.1rem;
}
.btn{
    background-color: #ccc;
    color: #fff;
    width: 90%;
    height: 0.5rem;
    margin: 0.2rem;
    line-height: 0.3rem;
    border-radius: 0.05rem;
    margin-top: 1rem;
    outline: none;
    border: none;
}
#alert{
    position: relative;
    height: 2rem;
    width: 75%;
    top: -1.8rem;
    left: 0.5rem;
    background-color: #FFFFFF;
    display: block;
}
.el-icon-warning-outline{
    font-size: 1.1rem;
    position: absolute;
    left: 0.8rem;
    top: 0.1rem;
    color: #f8cb86;
}
#alert p{
    position: absolute;
    top: 1.2rem;
    left: 0.75rem;
    color: #333;
    font-size: 0.2rem;
}
.Alertbtn{
    font-size: 0.2rem;
    color: #fff;
    font-weight: 700;
    margin-top: 1.53rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 0.45rem;
    outline: none;
    border: 0;
    border-bottom-left-radius: 0.025rem;
    border-bottom-right-radius: 0.025rem;
}
</style>