<template>
    <div class="hot">
           <!-- 热门城市 -->
        <div class="city">
            <p>热门城市</p>
            <div class="city1"> <span class="city2" @click="search(v)" v-for="(v,i) in city" :key="i" v-text="v.name"></span></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hot',
    data() {
        return {
            city:[]
        };
    },
      methods:{
        // 跳转搜索界面
        search(v){
            this.$router.push({
                path:'/index_serch'
            })
            this.$store.commit({
                type:"setCityObj",
                cityObj:v
            })
        },
    },
    created(){
        this.$request({
            url:'/v1/cities?type=hot',
            data:{},
        }).then((res)=>{
            this.city = res;
        })
    }
};
</script>

<style  scoped>

.city p{
    color: #666;
    text-indent: 0.1rem;
    height: 0.4rem;
    line-height: 0.4rem;
    border-top: 0.1rem solid #F5F5F5;
    border-bottom: 0.01rem solid #e4e4e4;
    font: 0.15rem Helvetica Neue;
    padding: 0.05rem 0.05rem;
}
.city1{
    display: flex;
    flex-wrap: wrap;
}
.city2{
    color: #3190e8;
    border-bottom: 0.01rem solid #e4e4e4;
    border-right: 0.01rem solid #e4e4e4;
    width: 25%;
    text-align: center;
    padding-top: 0.085rem;
    height: 0.4rem;
    line-height: 0.4rem;
    font: 0.15rem Microsoft YaHei;
}
</style>