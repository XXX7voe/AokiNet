<template>
  <div id="wrap">
      <shop_home_head>
          <div  id="slot-head">
              <span class="el-icon-arrow-left" id="slot-span1" @click="backIndex"></span>
              <span id="slot-span2">搜索</span>
              <span class="el-icon-user" style="visibility:hidden" id="slot-span3"></span>
          </div>
      </shop_home_head>
      <div>
          <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="keyWord">
          <button @click="serchClick">提交</button>
      </div>
      <div>
          找不到地址？ <br>
          尝试输入小区、写字楼或学校名 <br>
          详细地址 (如门牌号等) 可稍后输入哦
      </div>
      <ul>
          <li v-for="(v,i) in addressArr" :key="i" @click="linkadd_address(v)">
              <h3 v-text="v.name"></h3>
                <h5 v-text="v.address"></h5>
          </li>
      </ul>
  </div>
</template>

<script>
import shop_home_head from './shop_home_head'
import {mapState} from 'vuex'
export default {
    name:"address_serch",
    data() {
        return {
            keyWord:"",
            addressArr:[]
        }
    },
    methods: {
        backIndex(){
            this.$router.back();
        },
        serchClick(){
            this.$request({
                url:"/v1/pois?city_id="+this.cityObj.cityObj.id+"&keyword="+this.keyWord+"&type=search"
            }).then(res => {
                this.addressArr = res;
            })
        },
        linkadd_address(v){
            this.$router.push({
                path:"/add_address",
                query:v
            });
        }
    },
    components:{
        shop_home_head
    },
    computed:{
        ...mapState(["cityObj"])
    }
}
</script>

<style scoped>
#wrap{
    position: absolute;
    width: 100%;
    height: 100%;
}
#slot-head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0.1rem;
}
#slot-head>span{
    font-size: 0.21rem;
    color: white;
    line-height: 0.45rem;
}
#slot-head>span:nth-of-type(2){
     font-size: 0.2rem;
}
#wrap>div:nth-of-type(2){
    width: 95%;
        position: absolute;
    top: 0.6rem;
    left: 50%;
  transform: translateX(-50%) ;
}
#wrap>div:nth-of-type(2)>input{
  width: 70%;
  outline: none;
  border: none;
  height: 0.33rem;
  border-radius: 5px;
  font-size: 0.15rem;
  text-indent: 10px;
  background-color: rgb(242,242,242);
  color: black;
  margin-left: 0.1rem;
}
#wrap>div:nth-of-type(2)>button{
    width: 16%;
  height: 0.32rem;
  background-color: rgb(0,146,232);
  color: #fff;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-size: 0.15rem;
  margin-left: 0.1rem;
}
#wrap>div:nth-of-type(3){
    font-size: 0.12rem;
    color: rgb(170,170,170);
    text-align: center;
    margin-top: 3.1rem;
    display: none;
}
#wrap>ul{
    width: 100%;
    margin-top: 1.2rem;
}
#wrap li{
    width: 100%;
    height: 0.8rem;
    margin-left: 0.15rem;
    border-bottom: 1px solid rgb(230,230,230);
    overflow:hidden;
    padding-top: 0.1rem;
}
#wrap li>h3{
    font-size: 0.18rem;
    margin-left: 0.05rem;
}
#wrap li>h5{
    font-size: 0.15rem;
    margin-left: 0.05rem;
    color:rgb(153,153,153)
}
</style>