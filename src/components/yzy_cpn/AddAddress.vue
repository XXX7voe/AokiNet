<template>
    <div id="AddAddress" class="animated fadeIn">
         <div class="head">
            <i class="el-icon-arrow-left" @click="back()"></i>
            <span>新增地址</span>
        </div>
        <div class="inp">
            <input type="text" v-model="name" placeholder="请填写你的姓名"><br>
            <input type="text" class="adz" @click="addares()" :value="addname.name"  placeholder="小区/写字楼/学校等" >
            <input type="text" v-model="address_detail" placeholder="请填写详细送餐地址"><br>
            <input type="text" v-model="phone" placeholder="请填写能够联系到您的手机号"><br>
            <input type="text" v-model="phone_bk" placeholder="备用联系电话(选填)">
        </div>
        <button class="btn" @click="addAddress()">新增地址</button>
        <div id="alert" v-show="show" class="animated  bounceIn">
            <i class="el-icon-warning-outline"></i>
            <!-- 弹框信息 -->
            <p v-text="message"></p>
            <button class="Alertbtn" @click="SHOW()">确认</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddAddress',
    data() {
        return {
            name:'',
            address:'',
            address_detail:'',
            phone:'',
            phone_bk:'',
            show:false,
            message:''
        };
    },
    mounted() {
        
    },
    methods: {
        addares(){
            this.$router.push({
                name:'addares'
            })
        },
        SHOW(){
            this.show = false
        },
        back(){
            this.$router.back()
        },
         addAddress(){
            this.$request({
                url:'/v1/users/'+this.$cookies.get('countData').id+'/addresses',
                method:"post",
                data:{
                    address:this.$cookies.get('addname').name,
                    address_detail:this.address_detail,
                    geohash:"("+this.$cookies.get('addname').latitude+","+this.$cookies.get('addname').longitude+")",
                    name:this.name,
                    phone:this.phone,
                    tag:'无',
                    sex:2,
                    phone_bk:this.phone_bk,
                    tag_type:3
                }
            }).then(res=>{
               console.log(res);
               if(res.status==0){
                   this.message = res.message;
                   this.show = true
               }else{
                  this.$router.push({
                      name:'Edd_address'
                  })
               }
            })
        },
    },
    computed:{
         addname(){
          return this.$cookies.isKey('addname')?this.$cookies.get('addname'):'小区/写字楼/学校等'
        },
    }
};
</script>

<style  scoped>
.adz{
    margin-left: 0.15rem;
    margin-top: 0.1rem;
    width: 90.5%;
    height: 0.33rem;
    line-height: 0.33rem;
    color:#757575;
    border: 1px solid rgb(245,245,245);
    background-color: #f2f2f2;
}
#AddAddress{
    background-color: rgb(245,245,245);
    height: 100%;
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
}
.inp{
    position: relative;
    top: 0.6rem;
    height: 2.5rem;
    background-color: rgb(255,255,255);
}
.inp input{
    width: 90%;
    height: 0.37rem;
    margin-left: 0.15rem;
    margin-top: 0.1rem;
    padding: 0.1rem 0.1rem;
    border:0.01rem solid #ddd;
    outline: none;
    background-color: #F2F2F2;
}
.btn{
    position: relative;
    width: 95%;
    font-size: 0.15rem;
    color: #fff;
    line-height: 0.4rem;
    outline: none;
    border: none;
    top: 1rem;
    height: 0.4rem;
    left: 0.1rem;
    font-weight: 700;
    background-color: #00DC6E;
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