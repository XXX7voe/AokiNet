<template>
  <div id="wrap" class="animated fadeIn">
    <div id="head">
    <span class="el-icon-arrow-left" @click="backClick"></span>
    <span>{{cityObj.cityObj.name}}</span>
    <span @click="backClick">切换城市</span>
    </div>
    <div id="serch">
        <input type="text" v-model="keyWord" placeholder="输入学校、商务楼、地址">
        <button @click="serch">
          提交
        </button>
    </div>
    <span v-if="isHistory">搜索历史</span>
    <div id="show_list">
        <ul>
          <li @click="setHistoryRecord(v)" id="show_li" v-for="(v,i) in serchArr" :key="i">
            <h2>{{v.name}}</h2>
            <p>{{v.address}}</p>
          </li>
        </ul>
        <div v-if="isHistory2" id="clear" @click="clearAll">清空所有</div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:"index_serch",
    data() {
      return {
        //搜索关键字
        keyWord:"",
        serchArr:[],    //搜索到的数据
        isHistory:true, 
        isHistory2:false,
        history_record:[]//历史记录
      }
    },
    computed:{
      ...mapState(["cityObj"])
    },
    methods:{
      //搜素提交方法
      serch(){
        let _this = this;
        _this.serchArr = [];
        if(_this.keyWord != ""){
          _this.isHistory = false;
          _this.isHistory2 = false;
          this.$request({
          url:"/v1/pois",
          params:{
            city_id:_this.cityObj.cityObj.id,
            keyword:_this.keyWord
          }
         }).then(res => {
            this.serchArr = res
         })
        }
      },
      //搜索列表单机  存入历史记录  并跳转
      setHistoryRecord(v){
        this.$store.commit("setHistoryRecord",v)
        this.$store.commit("setAddressObj",v);
        this.$store.commit({
            type:"setHeadText",
            query:{
                iconClass:"el-icon-search",
                title:v.name,
                isShow:"visible"
            }
        });
        this.$router.push({
          path:"/shop_home_page"
        })
      },
      //清空历史记录
      clearAll(){
        this.serchArr = [];
        this.isHistory2 = false;
        this.$store.commit("clearHistoryRecord")
      },
      //返回
      backClick(){
        this.$router.back()
      }
    },
    //加载历史记录
    created(){
      this.history_record = this.$store.state.history_record;
      if(this.history_record.length != 0){
          this.isHistory2 = true;
         this.serchArr = this.history_record;
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
#wrap>span{
  margin-left: 0.13rem;
  color: black;
  font-size: 0.1rem;
}
#head{
    width: 100%;
    height: 0.45rem;
    background-color: rgb(0,146,232);
    padding: 0 0.07rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  
}
#head>span{
  line-height: 0.45rem;
}
.el-icon-arrow-left{
  color:#fff;
  font-size: 0.24rem;
}
#head>span:nth-of-type(2){
  color: #fff;
  font-size: 0.22rem;
  margin-left: 0.15rem;
  margin-top: 0.03rem;
}
#head>span:nth-of-type(3){
  color: #fff;
  font-size: 0.14rem;
}
#serch{
  width: 100%;
  height: 1rem;
  border: 1px solid lightgray;
  margin-top: 0.1rem;
  background-color: #fff;
}
#serch>input,#serch>button{
  display: block;
  width: 90%;
  margin: 0.11rem auto;
  height: 0.34rem;
  outline: none;
  border: 1px solid lightgray;
  font-size: 0.15rem;
  text-indent: 10px;
}
#serch>button{
  background-color: rgb(0,146,232);
  border: none;
  border-radius: 3px;
  color: #fff;
}
#show_list{
  width: 100%;
  height: 500px;
  border-top: 1px solid lightgray;
}
ul{
  width: 100%;
  list-style-type: none;
}
ul>li{
  width: 100%;
  height: 0.71rem;
  border-top: 1px solid lightgray;
  background-color: #fff;
  padding-left: 0.2rem;
}
ul>li>h2{
  font-size: 0.15rem;
  color: black;
  margin-top: 0.15rem;
}
ul>li>p{
  font-size: 0.1rem;
  color: rgb(153,153,153);
  margin-top:0.05rem ;
}
#clear{
  width: 100%;
  height: 0.45rem;
  background-color: #fff;
  font-size: 0.17rem;
  line-height: 0.45rem;
  text-align: center;
  border-top: 1px solid lightgray;
}
</style>