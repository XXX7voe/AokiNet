<template>
    <div class="group">
          <!-- 所有城市 -->
        <div class="city">
            <div v-for="(v,i) in letter" :key="i">
                <p class="city0" >
                    <span v-text="v"></span>
                    <span v-if="v == 'A'" class="city00">(按字母排序)</span>
                </p>
                <div class="city1">
                    <span class="city2" v-for="(x,y) in city[i]" :key="y" v-text="x.name" @click="serch(x)"></span>
                </div>
            </div>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'group',
    data() {
        return {
            city:[],
            letter:[]
        };
    },
     methods:{
        // 跳转登陆界面
        serch(v){
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
            url:'/v1/cities?type=group',
            data:{},
        }).then((res)=>{
            this.city = res;
             var arr = Object.keys(res).sort();
                    var newArr = [];
                    for(var i = 0; i < arr.length; i++){
                        newArr[i] = res[arr[i]];
                        this.letter = arr;
                        this.city = newArr;
                    }
        })
    }
};
</script>

<style  scoped>
/* .group{
    margin-top: 0.2rem;
} */
.city0{
    color: #666;
    text-indent: 0.1rem;
    border-top: 0.13rem solid #F5F5F5;
    border-bottom: 0.01rem solid #e4e4e4;
    font: 0.15rem Helvetica Neue;
    height: 0.4rem;
}
.city00{
    font-size: 0.15rem;
    color: #999;
    text-align: center;
}
.city1{
    overflow: hidden;
}
.city2{
    float: left;
    text-align: center;
    border-bottom: 0.01rem solid #e4e4e4;
    border-right: 0.01rem solid #e4e4e4;
    width: 25%;
    font: 0.15rem Microsoft YaHei;
    height: 0.4rem;
    line-height: 0.4rem;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space: nowrap;
}
</style>