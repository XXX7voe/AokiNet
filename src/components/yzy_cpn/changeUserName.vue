<template>
    <div id="changeUserName" class="animated fadeIn">
       <div class="head">
          <i class="el-icon-arrow-left" @click="userInFormations()"></i>
          <span>账户信息</span>
       </div>
       <div class="center">
           <input type="text" placeholder="更改用户名" v-model="user"><br>
           <p>用户名只能修改一次(5-25字符之间)</p>
           <button class="btn" @click="change()">确认修改</button>
       </div>
    </div>
</template>

<script>
export default {
    name: 'changeUserName',
    data() {
        return {
            user:'',
        };
    },
    methods: {
        userInFormations(){
            this.$router.back()
        },
        change(){
             this.$cookies.set('username',this.user,'15d')
            this.$router.back()
        }
    },
};
</script>

<style  scoped>
#changeUserName{
  background-color:#F2F2F2;
     height: 6.18rem;
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
.center{
    margin-top: 0.46rem;
}
.center :nth-child(1){
    width: 90%;
    background-color: rgb(245,245,245);
    height: 0.4rem;
    border: 0.01rem solid #ddd;
    outline: none;
    margin-left: 0.1rem;
    margin-top: 0.15rem;
    text-indent: 0.1rem;
}
.center p{
    font-size: 0.1rem;
    color:#666;
    padding: 0.1rem 0.2rem;
}
.btn{
    width: 90%;
    background-color: #009BE8;
    color: #fff;
    height: 0.5rem;
    border: 0;
    outline: none;
    margin-top: 0.3rem;
    margin-left: 0.2rem;
}
</style>