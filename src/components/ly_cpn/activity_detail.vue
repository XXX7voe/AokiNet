<template>
  <div id="wrap"  class="animated fadeIn">
    <div>饭堂</div>
    <div class="yuan">&nbsp;优惠信息&nbsp;</div>
    <div>
      <ul>
          <li v-for="(v,i) in detailObj.activities" :key="i">
            <span v-text="v.icon_name" :style="{'backgroundColor':'#'+v.icon_color}"></span>
            <p v-text="v.description"></p>
          </li>
      </ul>
    </div>
    <div class="yuan" style="margin-top:0.5rem">&nbsp;商家公告&nbsp;</div>
    <div v-text="detailObj.promotion_info"></div>
    <div class="iconfont icon-iconfront-" @click="backPage"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:"activity_detail",
    computed:{
      ...mapState(["detailObj"])
    },
    methods:{
      backPage(){
        this.$router.back();
      }
    }
}
</script>

<style scoped>
#wrap{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(38,38,38);
}
#wrap>div:nth-of-type(1){
  width: 100%;
  font-size: 0.2rem;
  color: #fff;
  text-align: center;
  margin-top: 0.2rem;
}
.yuan{
  display: inline-block;
  font-size: 0.1rem;
  color: gray;
  border: 1px solid lightgray;
  height: 0.23rem;
  line-height: 0.22rem;
  padding: 0 0.03rem;
  border-radius: 15px;
  margin-top: 1rem;
  margin-left: 41%;
}
#wrap>div:nth-of-type(3) li>span{
    display: inline-block;
    width: 0.17rem;
    height: 0.17rem;
    margin-left: 0.25rem;
    color: #fff;
    text-align: center;
    line-height: 0.17rem;
    margin-top: 0.03rem;
    border-radius: 3px;
}
#wrap>div:nth-of-type(3) li>p{
    display: inline-block;
    margin-left: 0.1rem;
}
#wrap>div:nth-of-type(5){
  font-size: 0.12rem;
  padding-left: 0.25rem;
  color: rgb(176,176,176);
  margin-top: 0.2rem;
}
#wrap>div:nth-of-type(6){
  display: inline-block;
  font-size: 0.7rem;
  margin-left: 41%;
  color: gray;
  margin-top: 65%;
}
</style>