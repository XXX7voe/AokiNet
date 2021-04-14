<template>
  <div id="userInFormations" class="animated fadeIn">
    <div class="head">
      <i class="el-icon-arrow-left" @click="mySelf()"></i>
      <span>账户信息</span>
    </div>
    <div class="center">
      <div class="one">
         <el-upload class="avatar-uploader" action="https://elm.cangdu.org/v1/addimg/avatar" :show-file-list="false" :on-success="handleAvatarSuccess">
        <span id="photo">头像</span>
        <img v-if="imgUrl" :src="imgUrl" class="img2" >
        <i v-else>
          <div>
            <img class="img1" :src="tb=='true'? Photo:img2">
          </div>
        </i>
        </el-upload>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="two" @click="changeUser()">
        <span>用户名</span>
        <span v-text="tb=='true'? Name:name"></span>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="three" @click="address()">
        <span>收货地址</span>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="four">
        <p>账户绑定</p>
        <div @click="set()">
          <i class="el-icon-mobile-phone"></i>
          <span>手机</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="five">
        <p>安全设置</p>
        <div @click="changePass()">
          <span>登录密码</span>
          <span>修改</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <button class="btn" @click="exit()">退出登录</button>
      <div id="alert" v-show="show" class="animated  bounceIn">
        <i class="el-icon-warning-outline"></i>
        <p>{{ message }}</p>
        <button class="cancelbtn" @click="SHOW()">再等等</button>
        <button class="Alertbtn" @click="gain()">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import img2 from '../../assets/1.png'
import img1 from '../../assets/2.jpg'
export default {
  // inject: ['reload'],
  name: "userInFormations",
  data() {
    return {
      show: false,
      message: "是否退出登录",
      imgUrl:'',
      img2,
      img1,
      name:'',
    };
  },
  methods: {
    set() {
      this.message = "请在手机APP中设置";
      this.show = 1;
    },
    changeUser(){
        this.$router.push({
        name: "changeUserName",
      });
    },
    SHOW() {
      this.show = false;
    },
    changePass() {
      this.$router.push({
        name: "changePass",
      });
    },
    address() {
      this.$router.push({
        name: "Edd_address",
      });
    },
    mySelf() {
      this.$store.commit({
                        type:"setHeadText",
                        query:{
                            iconClass:"el-icon-arrow-left",
                            title:"我的",
                            isShow:"hidden"
                        }
                    })
                    this.$router.push({
                        path:"/mySelf"
                    })
      
    },
    exit() {
      this.show = true;
    },
    gain() {
      this.$request({
        url: "/v2/signout",
      }).then(res => {
        console.log(res);
        this.$cookies.set('tb',false,'15d');
        this.show=false;
        this.$router.push({
          name:'mySelf'
        })
      });
    },
    handleAvatarSuccess(res, file) {
            this.imgUrl = URL.createObjectURL(file.raw);
            this.$cookies.set('Photo',this.imgUrl,'15d'); 
    },
    
  },
  watch:{
        '$cookies':{ // 深度监听
            handler(val, oldVal){
            console.log(val, oldVal)
            },
            deep:true
        }
    },
    computed:{
       Name(){
             return this.$cookies.isKey('username') ? this.$cookies.get('username'):''
         },
          Photo(){
            return this.$cookies.isKey('Photo') ? this.$cookies.get('Photo'):this.img1
        },
         tb(){
             return this.$cookies.get('tb')
         }
    }
};
</script>

<style  scoped>
#photo{
  margin-top: -0.6rem;
  width: 2rem;
  margin-left: -1.1rem;
  color: #474747;
}
.img1{
    border-radius: 50%;
    width: 0.6rem;
    height: 0.5rem;
    margin-left: 2.1rem;
    margin-top: -1.05rem;
}
.img2{
    margin-top: -0.5rem;
    margin-left: 2.3rem;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
}
#userInFormations {
  height: 6.56rem;
  background-color: rgb(245, 245, 245);
}
.head {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.45rem;
}
.el-icon-arrow-left {
  font-size: 0.25rem;
  color: white;
  margin-top: 0.11rem;
}
.head span {
  margin-left: 1.2rem;
  font-size: 0.2rem;
  margin-top: 0.1rem;
  color: white;
}
.one {
  position: relative;
  top: 0.55rem;
  background-color: rgb(255, 255, 255);
  height: 0.8rem;
  border-top: 0.01rem solid #ddd;
}
.one :nth-child(1) {
  position: absolute;
  left: 0.15rem;
  top: 0.3rem;
}
.headImg {
  width: 0.5rem;
  border-radius: 50%;
  position: absolute;
  left: 2.8rem;
  top: 0.15rem;
}
.el-icon-arrow-right {
  font-size: 0.2rem;
  position: absolute;
  left: 3.5rem;
  top: 0.3rem;
  color: #999;
}
.two {
  position: relative;
  top: 0.55rem;
  background-color: rgb(255, 255, 255);
  height: 0.5rem;
  border-top: 0.01rem solid #ddd;
}
.two :nth-child(1) {
  position: absolute;
  left: 0.15rem;
  top: 0.15rem;
}
.two :nth-child(2) {
  position: absolute;
  right:0.6rem;
  top: 0.15rem;
  color: #999;
}
.two .el-icon-arrow-right {
  font-size: 0.2rem;
  position: absolute;
  left: 3.5rem;
  top: 0.15rem;
  color: #999;
}
.three {
  position: relative;
  top: 0.55rem;
  background-color: rgb(255, 255, 255);
  height: 0.5rem;
  border-top: 0.01rem solid #ddd;
  border-bottom: 0.01rem solid #ddd;
}
.three :nth-child(1) {
  position: absolute;
  left: 0.15rem;
  top: 0.15rem;
}
.three .el-icon-arrow-right {
  font-size: 0.2rem;
  position: absolute;
  left: 3.5rem;
  top: 0.15rem;
  color: #999;
}
.four {
  position: relative;
  top: 0.7rem;
}
.four p {
  position: absolute;
  top: -0.1rem;
  left: 0.15rem;
  color: #666;
}
.four div {
  position: relative;
  top: 0.15rem;
  height: 0.5rem;
  background-color: rgb(255, 255, 255);
  border-top: 0.01rem solid #ddd;
  border-bottom: 0.01rem solid #ddd;
}
.four span {
  position: relative;
  top: 0.15rem;
  left: 0.4rem;
}
.el-icon-mobile-phone {
  position: absolute;
  left: 0.15rem;
  top: 0.17rem;
  color: #00b1ff;
  font-size: 0.15rem;
}
.four .el-icon-arrow-right {
  font-size: 0.2rem;
  position: absolute;
  left: 3.5rem;
  top: 0.15rem;
  color: #999;
}
.five {
  position: relative;
  top: 1rem;
}
.five p {
  position: absolute;
  top: -0.1rem;
  left: 0.15rem;
  color: #666;
}
.five div {
  position: relative;
  top: 0.15rem;
  height: 0.5rem;
  background-color: rgb(255, 255, 255);
  border-top: 0.01rem solid #ddd;
  border-bottom: 0.01rem solid #ddd;
}
.five span {
  position: relative;
  top: 0.15rem;
  left: 0.2rem;
}
.five > div > span:nth-child(2) {
  position: relative;
  top: 0.15rem;
  left: 2.5rem;
}
.five .el-icon-arrow-right {
  font-size: 0.2rem;
  position: absolute;
  left: 3.5rem;
  top: 0.15rem;
  color: #999;
}
.btn {
  position: absolute;
  top: 4.3rem;
  left: 0.08rem;
  height: 0.4rem;
  width: 96%;
  border-radius: 0.05rem;
  text-align: center;
  background: #d8584a;
  color: #fff;
  border: 0;
  outline: none;
}
#alert {
  position: relative;
  height: 2rem;
  width: 75%;
  top: -1.8rem;
  left: 0.5rem;
  background-color: #ffffff;
  display: block;
}
.el-icon-warning-outline {
  font-size: 1.1rem;
  position: absolute;
  left: 0.8rem;
  top: 0.1rem;
  color: #f8cb86;
}
#alert p {
  position: absolute;
  top: 1.2rem;
  left: 0.75rem;
  color: #333;
  font-size: 0.2rem;
}
.cancelbtn {
  position: absolute;
  font-size: 0.2rem;
  color: #fff;
  font-weight: 600;
  top: 1.6rem;
  left: 0.3rem;
  background-color: #c1c1c1;
  width: 30%;
  line-height: 0.45rem;
  outline: none;
  border: 0;
  border-bottom-left-radius: 0.025rem;
  border-bottom-right-radius: 0.025rem;
}
.Alertbtn {
  position: absolute;
  font-size: 0.2rem;
  color: #fff;
  font-weight: 700;
  left: 1.5rem;
  top: 1.6rem;
  background-color: #f1644c;
  width: 30%;
  text-align: center;
  line-height: 0.45rem;
  outline: none;
  border: 0;
  border-bottom-left-radius: 0.025rem;
  border-bottom-right-radius: 0.025rem;
}
.img1 {
  position: absolute;
  left: 2.2rem;
  top: -0.56rem;
}
</style>