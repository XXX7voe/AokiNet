<template>
    <div id="addares" class="animated fadeIn">
         <div class="head">
            <i class="el-icon-arrow-left" @click="back()"></i>
            <span>搜索地址</span>
        </div>
        <div class="center">
            <input type="text" v-model="inp" placeholder="请输入小区/写字楼/学校等">
            <button class="btn" @click="submit()">确认</button>
            <p>为了满足商家的送餐要求,建议您从列表中选择地址</p>
            <div class="title1" v-show="show">
            <p>找不到地址?</p>
            <p>请尝试输入小区、写字楼或学校名</p>
            <p>详细地址（如门牌号）可稍后输入哦。</p>
            </div>
        </div>
        <div id="title" v-show="!show">
            <ul :key="i" v-for="(v,i) in cityData">
                <li @click="searchCity(v)">
                    <p v-text="v.name"></p>
                    <p v-text="v.address"></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'addares',
    data() {
        return {
            inp:'',
            cityData:[],
            addnameArr:[],
            show:true
        };
    },
    methods: {
        back(){
            this.$router.back()
        },
         submit(){
            this.show = false
            this.$request({
                url:'/v1/pois?city_id='+this.$cookies.get('user_id').id+'&keyword='+this.inp+'&type=search',
            }).then(res=>{
                console.log(res)
                this.cityData = res
            })
        },
        searchCity(c){
            this.$router.back()
            this.$cookies.set('addname',c,'15d')
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
}
.center input{
    width: 70%;
    height: 0.4rem;
    margin-top: 0.6rem;
    font-size: 0.17rem;
    margin-left: 0.2rem;
    background: #f2f2f2;
    border: 0.01rem solid #ddd;
    border-radius: 0.05rem;
    text-indent: 0.1rem;
}
.btn{
    background: #3199e8;
    border: 0;
    outline: none;
    width: 18%;
    height: 0.4rem;
    border-radius: 0.05rem;
    color: white;
    margin-left: 0.1rem;
}
.center :nth-child(3){
    color: #ff883f;
    text-align: center;
    margin-top: 0.15rem;
}
.center :nth-child(4){
    font-size: 0.15rem;
    text-align: center;
    margin-top: 0.8rem;
}
.center :nth-child(5){
    font-size: 0.15rem;
    text-align: center;
    margin-top: 0.3rem;
}
.center :nth-child(6){
    font-size: 0.15rem;
    text-align: center;
    margin-top: 0.3rem;
}
#title{
    background-color: #f2f2f2;
}
#title ul{
    margin-top: 0.2rem;
    line-height: 0.3rem;
    border-bottom: 0.01rem solid gray;
}
#title ul li {
    margin-left: 0.2rem;
    color: #969696;
    font-size: 0.16rem;
    margin-bottom: 0.2rem;
}
</style>