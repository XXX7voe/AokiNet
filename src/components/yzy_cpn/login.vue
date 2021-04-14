<template>
<!-- 登陆界面 -->
    <div id="login" class="animated fadeIn">
        <div class="head">
            <i class="el-icon-arrow-left" @click="mySelf()"></i>
            <span>密码登录</span>
        </div>
        <div class="center">
            <input type="text" placeholder="账号" v-model="user"><br>
            <input :type="changeType" placeholder="密码" v-model="pass">
            <el-switch v-model="value" active-color="#13ce66" inactive-color="grey" class="switch"></el-switch>
            <br>
            <input type="text" placeholder="验证码" v-model="code">
            <img @click="getCode()" :src="imgCode" alt="" class="code">
        </div>
        <div class="foot">
            <p>温馨提示:未注册过的账号,登录时将自动注册</p>
            <p>注册过的用户可凭账户密码登录</p>
            <button class="loginBtn" @click="login()">登录</button>
            <p @click="changePass()">重置密码?</p>
        </div>
         <div id="alert" v-show="show" class="animated  bounceIn">
            <i class="el-icon-warning-outline"></i>
            <p v-text="message"></p>
            <button class="Alertbtn" @click="SHOW()">确认</button>
        </div>
    </div>
</template>

<script>
 import img1 from '../../assets/1.png'
export default {
    name: 'login',
    data() {
        return {
            value: false,
            imgCode:'',
            user:'',
            pass:'',
            code:'',
            message:'',
            show:false,
            img1,
        };
    },
    created(){
        this.getCode()
    },
    computed:{
        changeType(){
            if(this.value){
                return 'text'
            }else{
                return 'password'
            }
        },
    },
    methods: {
        login(){
            this.$request({
                url:"/v2/login",
                method:"post",
                withCredentials:true,
                data:{
                    username:this.user,
                    password:this.pass,
                    captcha_code:this.code,
                },
            }).then(res=>{
                var Data = JSON.stringify(res)
                this.$store.commit("setUser",this.user);
                this.$cookies.set('countData',Data,'15d')
                console.log(res);
                if(res.status==0){
                    this.message = res.message;
                    this.$cookies.set("tb",false,'15d');
                    this.show = true;
                }else{
                    this.$router.push({
                    name:'cityHome'
                });
                    this.$cookies.set("username",res.username,'15d');
                    this.$cookies.set("user_id",res.user_id,'15d');
                    this.$cookies.set("tb",true,'15d');
                    this.$cookies.set("Photo",this.img1,'15d');
                }
            })
            
        },
        SHOW(){
            this.show = false;
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
        
        changePass(){
        this.$router.push({
            name:'changePass'
        })
    },
    mySelf(){
         this.$router.push({
            name:'cityHome'
        })
    },
    }
    
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
}
.center{
    margin-top: 0.6rem;
    position: relative;
}

.center input{
    display: flex;
    justify-content: space-between;
    padding: 0.1rem;
    height: 0.3rem;
    width: 100%;
    border: 0;
    outline: none;
    font-size: 0.15rem;
    border-bottom: 0.01rem solid #f1f1f1;
}
.switch{
    position: absolute;
    top: 0.5rem;
    left: 2.8rem;
    width:2rem;
}
.code{
    position: absolute;
    top: 1rem;
    left: 2.8rem;
}
.foot{
    margin-left: 0.1rem;
    margin-top: 0.15rem;
}
.foot p{
    font-size: 0.12rem;
    color: red;
    padding: 0.01rem 0.02rem;
    line-height: 0.3rem;
}
.loginBtn{
    width: 98%;
    height: 0.5rem;
    background-color:rgb(0,220,110);
    color: white;
    border: none;
    outline: none;
}
.foot :nth-child(4){
    color: #3190e8;
    margin-top: 0.2rem;
    margin-left: 2.75rem;
    font-size: 0.15rem;
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