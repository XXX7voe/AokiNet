<template>
  <div id="wrap">
      <shop_home_head>
          <div  id="slot-head">
              <span class="el-icon-arrow-left" id="slot-span1" @click="backIndex"></span>
              <span id="slot-span2">订单备注</span>
              <span class="el-icon-user" style="visibility:hidden" id="slot-span3"></span>
          </div>
      </shop_home_head>
      <div id="one">
          <div>快速备注</div>
          <div>
              <el-radio-group v-model="radio1" class="radios" id="radioOne">
                <el-radio-button label="不要辣"></el-radio-button>
                <el-radio-button label="少点辣"></el-radio-button>
                <el-radio-button label="多点辣"></el-radio-button>
              </el-radio-group>
              <el-radio-group v-model="radio2" class="radios" id="radioTwo">
                <el-radio-button label="不要香菜"></el-radio-button>
              </el-radio-group>
              <el-radio-group v-model="radio3" class="radios" id="radioThree">
                <el-radio-button label="不要洋葱"></el-radio-button>
              </el-radio-group>
              <el-radio-group v-model="radio4" class="radios" id="radioFour">
                <el-radio-button label="多点醋"></el-radio-button>
              </el-radio-group>
              <el-radio-group v-model="radio5" class="radios" id="radioFive">
                <el-radio-button label="多点葱"></el-radio-button>
              </el-radio-group>
              <el-radio-group v-model="radio6" class="radios" id="radioSix">
                <el-radio-button label="去冰"></el-radio-button>
                <el-radio-button label="少冰"></el-radio-button>
              </el-radio-group>
          </div>
      </div>
      <div id="two">
          <div>其他备注</div>
            <textarea id="tex" v-model="radio7" placeholder="请输入备注内容(可不填)"></textarea>
            <div @click="remarkClick">确定</div>
      </div>
  </div>
</template>

<script>
import shop_home_head from './shop_home_head'
export default {
    name:"shop_remark",
    data() {
        return {
            radio1:"",radio2:"",radio3:"",radio4:"",radio5:"",radio6:"",radio7:""
        }
    },
    components:{
        shop_home_head
    },
    methods: {
        backIndex(){
            this.$router.back();
        },
        remarkClick(){
            let remark = this.radio1+" "+this.radio2+" "+this.radio3+" "+this.radio4+" "+this.radio5+" "+this.radio6+" "+this.radio7
            this.$store.commit("setRemark",remark);
            this.$router.back();
        }
    },
}
</script>

<style scoped>
#wrap{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgb(245,245,245);
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
#one{
    width: 100%;
    height: 2.15rem;
    background-color: #fff;
    margin-top: 0.55rem;
    overflow: hidden;
}
#one>div:nth-of-type(1){
    margin-left: 0.13rem;
    margin-top: 0.15rem;
    font-size: 0.15rem;
}
#one>div:nth-of-type(2){
    width: 100%;
    height: 1.52rem;
    margin-top: 0.11rem;
}
.radios{
    border: 1px solid rgb(0,146,200);
    border-radius: 5px;
}
#radioOne{
    margin-left: 0.1rem;
}
#radioTwo{
    margin-left: 0.1rem;
}
#radioThree,#radioFour,#radioFive,#radioSix{
    margin-left: 0.1rem;
    margin-top: 0.1rem;
}
#two{
    width: 100%;
    height: 1.8rem;
    background-color: #fff;
    margin-top: 0.07rem;
    position: relative;
}
#two>div:nth-of-type(1){
    position: absolute;
    left: 0.13rem;
    top: 0.14rem;
    font-size: 0.15rem;
}
#tex{
    width: 94%;
    height: 1rem;
    background-color: rgb(249,249,249);
    position: absolute;
    left: 0.12rem;
    border-radius: 5px;
    top: 0.45rem;
    text-indent: 10px;
    font-size: 0.15rem;
    padding-top: 0.09rem;
    border: 1px solid rgb(230,230,230);
}
#two>div:nth-of-type(2){
    width: 94%;
    height: 0.43rem;
    font-size: 0.17rem;
    text-align: center;
    line-height: 0.43rem;
    color: #fff;
    font-weight: bold;
    position: absolute;
    left: 0.12rem;
    bottom: -0.43rem;
    background-color: rgb(0,220,110);
    border-radius: 5px;
}
</style>