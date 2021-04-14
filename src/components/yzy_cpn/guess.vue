<template>
    <div class="header">
        <div class="head">
            <span>ele.me</span>
            <!-- 跳转登录界面 -->
            <span @click="login()" v-if="(tb=='false')?true:false">登录|注册</span>
            <span @click="jumplogin1()" v-else class="el-icon-user"></span>
             </div>
            <!-- 当前定位城市 -->
            <div class="guess">
                <span>当前定位城市:</span>
                <span>定位不准时,请在城市列表中选择</span>
            </div>
            <div class="city">
                <span v-text="city.name" @click="serch(city)"></span>
                <i class="el-icon-arrow-right"  @click="serch(city) "></i>
            </div>
    </div>
</template>

<script>
export default {
    name: 'guess',
    data() {
        return {
            city:{},
        };
    },
    mounted(){
    // this.$cookies.set('tb',this.TB,'15d');
  },
  computed:{
     tb(){
          return this.$cookies.get('tb')
        },
  },
    methods:{
        // 跳转登陆界面
        login(){
            this.$router.push({
                name:'login'
            })
        },
        serch(v){
             this.$router.push({
                path:'/index_serch'
            })
            this.$store.commit({
                type:"setCityObj",
                cityObj:this.city
            })
        },
         jumplogin1(){
         this.$router.push({
            name: 'mySelf'
         });
         this.$store.commit("setBottomShow",true);
         this.$store.commit({
            type:"setHeadText",
            query:{
                iconClass:"el-icon-arrow-left",
                title:"我的",
                isShow:"hidden"
            }
        })
    },
    },
    created(){
        this.$request({
            url:'/v1/cities?type=guess',
        }).then((res)=>{
            this.city = res;
        })
    }

};
</script>

<style  scoped>
.head{
    width: 100%;
    height: 0.5rem;
    background-color: rgb(0,142,236);
    display: flex;
    justify-content: space-between;
}
.head span{
    margin-left: 0.1rem;
    font-size: 0.15rem;
    margin-top: 0.1rem;
    color: white;
}
.guess{
   display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 0.3rem;
    padding: 0.1rem;
}
.guess :nth-child(1){
    font-size: 0.13rem;
    color: #666;
}
.guess :nth-child(2){
    font-weight: 900;
    font-size: 0.13rem;
    color: #9f9f9f;
}
.city{
   display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    height: 0.4rem;
    padding: 0.1rem;
    border-top: 0.01rem solid #e4e4e4;
    border-bottom: 0.02rem solid #e4e4e4;
    font: 0.2rem Microsoft YaHei;
    color: rgb(0,142,236);
}
.city :nth-child(2){
    color:gray;
    font-size: 0.2rem;
    margin-left: 2.7rem;
}
</style>