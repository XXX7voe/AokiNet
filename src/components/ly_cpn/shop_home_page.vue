<template>
  <div id="wrap" class="animated fadeIn">
      <shop_home_head>
          <div  id="slot-head">
              <span :class="head_text.iconClass" id="slot-span1" @click="backIndex"></span>
              <span id="slot-span2">{{head_text.title}}</span>
              <span :class="{'el-icon-user': tb == 'true'}" v-text="tb == 'true' ? '' : '登录|注册'" 
               @click="linkMySelf" :style="{visibility:head_text.isShow}" id="slot-span3"></span>
          </div>
      </shop_home_head>
        <router-view></router-view>
       <div id="bottom" v-if="bottomShow">
          <div id="navigation_one" @click="change(0)">
              <span class="el-icon-eleme"></span><span>外卖</span>
          </div>
          <div id="navigation_two" @click="change(1)">
              <span class="el-icon-discover"></span><span>搜索</span>
          </div>
          <div id="navigation_three" @click="change(2)">
              <span class="el-icon-tickets"></span><span>订单</span>
          </div>
          <div id="navigation_four" @click="change(3)">
              <span class="el-icon-user"></span><span>我的</span>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import shop_home_head from './shop_home_head'
import shop_home_list from './shop_home_list'
export default {
    name:"shop_home_page",
    components:{
        shop_home_head,
        shop_home_list
    },
    computed:{
        tb(){
            return this.$cookies.get('tb')
        },
        ...mapState(["head_text","bottomShow","addressObj"])
    },
    methods:{
        change(i){
            var icons = document.querySelectorAll("#bottom>div>span:nth-of-type(1)");
            this.clearColor(icons);
            icons[i].style.color = "rgb(0,146,232)"
            this.changeTitle(i);
        },
        clearColor(icons){
            for(let i=0;i<icons.length;i++){
                icons[i].style.color = "black";
            }
        },
        changeTitle(i){
            switch(i){
                case 0:
                    this.$store.commit({
                        type:"setHeadText",
                        query:{
                            iconClass:"el-icon-search",
                            title:this.addressObj.name,
                            isShow:"visible"
                        }
                    })
                    this.$router.push({
                        path:"/shop_home_list"
                    })
                    break;
                case 1:
                     this.$store.commit({
                        type:"setHeadText",
                        query:{
                            iconClass:"el-icon-arrow-left",
                            title:"搜索",
                            isShow:"hidden"
                        }
                    })
                    this.$router.push({
                        path:"/shop_serch"
                    })
                    break;
                case 2:
                    this.$store.commit({
                        type:"setHeadText",
                        query:{
                            iconClass:"el-icon-arrow-left",
                            title:"订单",
                            isShow:"hidden"
                        }
                    })
                    this.$router.push({
                        path:"/order_list"
                    })
                    break;
                case 3:
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
                    break;
            }
        },
        backIndex(){
            this.$store.commit("setBottomShow",true);
            if(this.addressObj == null){
                this.$router.push({
                    path:"/shop_home_page"
                })
            }else{
                this.$router.back();
            }
            this.$store.commit({
            type:"setHeadText",
            query:{
                iconClass:"el-icon-search",
                title:this.addressObj.name,
                isShow:"visible"
            }
        });
        },
        linkMySelf(){
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
        }
    }
}
</script>

<style scoped>
#wrap{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(245,245,245);
}
#slot-head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0.1rem;
}
#slot-head>span{
    font-size: 0.15rem;
    color: white;
    line-height: 0.45rem;
}
#slot-head>span:nth-of-type(2){
     font-size: 0.2rem;
     /* margin-left: 0.3rem; */
}
#bottom{
    width: 100%;
    height: 0.45rem;
    display: flex;
    background-color: #fff;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 0.1rem;
    position: fixed;
    bottom: 0;
}
#bottom>div{
    width: 0.3rem;
    text-align: center;
}
#bottom>div>span:nth-of-type(1){
    font-size: 0.24rem;
}

</style>