<template>
  <div id="wrap" class="animated fadeInRight">
      <shop_home_head>
          <div  id="slot-head">
              <span :class="head_text.iconClass" id="slot-span1" @click="backIndex"></span>
              <span id="slot-span2">{{head_text.title}}</span>
              <span class="el-icon-user" :style="{visibility:head_text.isShow}" id="slot-span3"></span>
          </div>
      </shop_home_head>
      <div>
          联系人
          <div>
              <input type="text" v-model="userName" placeholder="你的名字">
          </div>
      </div                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        >
      <div>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="男" label-disabled checked-color="rgb(0,220,110)">先生</van-radio>
            <van-radio name="女" label-disabled checked-color="rgb(0,220,110)">女士</van-radio>
          </van-radio-group>
      </div>
      <div>
          联系电话
          <div>
              <input type="text" v-model="phone" placeholder="你的手机号">
              <span class="el-icon-plus" @click="shenzhan"></span>
          </div>
          <input type="text" v-model="phone2" placeholder="备选电话">
      </div>
      <div>
          送餐地址
          <div>
              <input style="color:gray"
              type="text" placeholder="小区/写字楼/学校等" readonly :value="addressObj.name" @click="linkAddressSerch">
          </div>
          <input type="text" v-model="detailAddress" placeholder="详细地址 0 (如门牌号等)">
      </div>
      <div>
          标签
          <div>
              <input type="text" v-model="title" placeholder="无/家/学校/公司">
          </div>
      </div>
      <div>
          <div @click="submitClick">确定</div>
      </div>
  </div>
</template>

<script>
import shop_home_head from './shop_home_head'
import {mapState} from 'vuex'
export default {
    name:"add_address",
    data() {
        return {
            radio:"男",
            addressObj:{},
            userName:"",
            phone:"",
            phone2:"",
            address:"",
            detailAddress:"",
            title:"",
        }
    },
    created(){
        this.addressObj = this.$route.query
    },
    components:{
        shop_home_head
    },
    computed:{
        ...mapState(["detailObj","head_text"])
    },
    methods:{
        backIndex(){
            this.$router.push({
                path:"/use_address"
            });
            this.$store.commit({
                type:"setHeadText",
                query:{
                    iconClass:"el-icon-arrow-left",
                    title:"选择地址",
                    isShow:"hidden"
                }
            })
        },
        shenzhan(){
            document.querySelector("#wrap>div:nth-of-type(4)").style.height = "1rem";
        },
        linkAddressSerch(){
            this.$router.push({
                path:"/address_serch"
            })
        },
        submitClick(){
            let obj = {};
            this.address = this.addressObj.name;
             if(this.name != "" && this.phone != "" && this.address != "" && this.detailAddress != "" && this.title != ""){
                obj = {
                    name:this.userName,
                    sex:this.radio,
                    phone:this.phone,
                    phone2:this.phone2,
                    address:this.address,
                    detailAddress:this.detailAddress,
                    title:this.title,
                    isTrue:false
                };
                this.$store.commit("setAddresss",obj)
                this.$router.push({
                    path:"/use_address"
                })
                this.$store.commit({
                type:"setHeadText",
                query:{
                    iconClass:"el-icon-arrow-left",
                    title:"选择地址",
                    isShow:"hidden"
                }
             })
            }else{
                console.log("no")
            }
        }
    }
}
</script>

<style scoped>
#wrap{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #fff;
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
    margin-top: 0.62rem;
    font-size: 0.16rem;
    color: black;
    margin-left: 0.15rem;
    position: relative;
}
#wrap>div:nth-of-type(2)>div,#wrap>div:nth-of-type(4)>div,#wrap>div:nth-of-type(5)>div{
    width: 72%;
    height: 0.45rem;
    position: absolute;
    left: 0.9rem;
    top: 0;
    border-bottom: 1px solid rgb(230,230,230);
}
#wrap>div:nth-of-type(2)>div>input,#wrap>div:nth-of-type(4)>div>input,#wrap>div:nth-of-type(5)>div>input,#wrap>div:nth-of-type(6)>input{
    outline: none;
    border: none;
}
#wrap>div:nth-of-type(3){
    display: inline-block;
    margin-top: 0.4rem;
    font-size: 0.18rem;
    margin-left: 1.1rem;
}
#wrap>div:nth-of-type(4),#wrap>div:nth-of-type(5){
    height: 1rem;
    margin-top: 0.15rem;
    font-size: 0.16rem;
    color: black;
    margin-left: 0.15rem;
    position: relative;
    border-bottom: 1px solid rgb(230,230,230);
}
#wrap>div:nth-of-type(4)>div>span{
    font-size: 0.25rem;
    color: rgb(0,184,255);
    position: absolute;
    right: 0rem;
}
#wrap>div:nth-of-type(4)>input,#wrap>div:nth-of-type(5)>input{
    outline: none;
    border: none;
    position: absolute;
    top: 0.6rem;
    left: 0.9rem;
}
#wrap>div:nth-of-type(6){
    height: 0.5rem;
    margin-top: 0.15rem;
    font-size: 0.16rem;
    color: black;
    margin-left: 0.15rem;
    position: relative;
    line-height: 0.3rem;
    border-bottom: 1px solid rgb(230,230,230);
}
#wrap>div:nth-of-type(6)>div>input{
    outline: none;
    border:none;
    position: absolute;
    left: 0.87rem;
    top: 0;
}
#wrap>div:nth-of-type(7){
    width: 100%;
    height: 3rem;
    background-color: rgb(245,245,245);
    overflow: hidden;
}
#wrap>div:nth-of-type(7)>div{
    width:90%;
    height: 0.43rem;
    border-radius: 5px;
    background-color: rgb(0,220,110);
    line-height: 0.43rem;
    text-align: center;
    font-size: 0.17rem;
    color: #fff;
    margin: 0.15rem auto;
}
#wrap>div:nth-of-type(4){
    height: 0.45rem;
    overflow: hidden;
    margin-top: 0.3rem;
}
</style>