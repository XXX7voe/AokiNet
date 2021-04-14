<template>
  <div class="animated fadeIn">
      <div id="head">
         <swiper ref="mySwiper" class="swi" :options="swiperOptions">
         <swiper-slide v-for="(arr,b) in allArr" :key="b">
             <div class="swiper_one">
                    <div v-for="(v,i) in arr" :key="i" @click="imageClick(v)">
                        <div>
                            <img :src="'https://fuss10.elemecdn.com'+v.image_url" alt="">
                        </div>
                        <span>{{v.title}}</span>
                    </div>
             </div>
             </swiper-slide>
         <div class="swiper-pagination" slot="pagination"></div>
         </swiper>

      </div>
  </div>
</template>

<script>
export default {
    name:"shop_home_list_image",
    data() {
        return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          pagination : '.swiper-pagination'
        },
        arr1:[],arr2:[],allArr:[]
        }
    },
    created(){
        this.$request({
            url:"/v2/index_entry"
        }).then(res => {
            for(var i=0;i<res.length;i++){
                if(i<res.length/2){
                    this.arr1.push(res[i])
                }else{
                     this.arr2.push(res[i])
                }
            }
            this.allArr.push(this.arr1)
            this.allArr.push(this.arr2)
        })
    },
    methods:{
       imageClick(v){
           this.$store.commit("setBottomShow",false)
             this.$store.commit({
                        type:"setHeadText",
                        query:{
                            iconClass:"el-icon-arrow-left",
                            title:v.title,
                            isShow:"hidden"
                        }
            })
            this.$router.push({
                path:"/shop_home_filter"
            });
        }
    }
     
}
</script>

<style scoped>
img{
    width: 100%;
}
#head{
    width: 100%;
    height: 2rem;
    background-color: #fff;
    margin-top: 0.45rem;
}
.swiper_one{
    width: 100%;
    height: 2rem;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-around;
    align-items:center;
    align-content:space-between;
    padding-bottom: 0.3rem;
    padding-top: 0.11rem;
}
.swiper_one>div{
    width: 25%;
    box-sizing:border-box;
    text-align: center;
}
.swiper_one>div>div:nth-of-type(1){
    width: 0.43rem;
    margin: 0 auto;
}
</style>