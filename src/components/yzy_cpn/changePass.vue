<template>
    <div id="changePass" class="animated fadeIn">
        <div class="head">
            <i class="el-icon-arrow-left" @click="back()"></i>
            <span>重置密码</span>
        </div>
        <div class="center">
            <input type="text" placeholder="账号" v-model="user"><br>
            <input type="text" placeholder="旧密码" v-model="oldPass"><br>
            <input type="text" placeholder="请输入新密码" v-model="newPass"><br>
            <input type="text" placeholder="请确认新密码" v-model="confirmPass"><br>
            <input type="text" placeholder="验证码" v-model="code">
             <img @click="getCode()" :src="imgCode" alt="" class="code">
        </div>
        <div class="foot">
            <button class="changeBtn" @click="changePass()">确认修改</button>
        </div>
        <div id="alert" v-show="show" class="animated  bounceIn">
            <i class="el-icon-warning-outline"></i>
            <p v-text="message"></p>
            <button class="Alertbtn" @click="SHOW()">确认</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'changePass',
    data() {
        return {
            imgCode:'',
            user:'',
            oldPass:'',
            newPass:'',
            confirmPass:'',
            code:'',
            message:'',
            show:false,
        };
    },
     created(){
        this.getCode()
    },
     methods: {
         SHOW(){
             this.show = false
         },
        changePass(){
            this.$request({
                url:"/v2/changepassword",
                method:"post",
                withCredentials:true,
                data:{
                    username:this.user,
                    oldpassWord:this.oldPass,
                    newpassword:this.newPass,
                    confirmpassword:this.confirmPass,
                    captcha_code:this.code,
                },
            }).then(res=>{
                console.log(res);
                 this.message = res.message;
                 this.show=true
                if(res.status == 1){
                   this.message =res.success;
                   this.show=true
                }
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
        back(){
            this.$router.back()
        } 
    }
 
};
</script>

<style  scoped>
#changePass{
    background-color: rgb(245, 245, 245);
    height: 10rem;
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
    margin-top: 0.65rem;
    position: relative;
    background-color:rgb(255,255,255);
}
.center input{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.1rem;
    outline: none;
    border: 0;
    height: 0.3rem;
    font-size: 0.15rem;
    border-bottom: 0.01rem solid #f1f1f1;
    text-indent: 0.08rem;
}

.foot{
    margin-left: 0.1rem;
    margin-top: 0.15rem;
}
.code{
    position: absolute;
    top: 1.9rem;
    left: 2.8rem;
}
.changeBtn{
    width: 98%;
    height: 0.5rem;
    background-color:rgb(0,220,110);
    color: white;
    border: none;
    font-size: 0.18rem;
    outline: none;
}
#alert{
    position: relative;
    height: 2rem;
    width: 75%;
    top: -1.8rem;
    left: 0.5rem;
    background-color: #FFFFFF;
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