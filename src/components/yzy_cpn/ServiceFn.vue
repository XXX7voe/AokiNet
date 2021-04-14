<template>
  <div id="dhs" class="ServiceFnID animated fadeInLeft">
    <div class="heared">
      <div class="top1" >
        <span class="el-icon-arrow-left" @click="backFn()"></span>
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="one">
      <p class="p1">{{content}}</p>  
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ServiceFn",
  methods: {
    backFn() {
      $(".ServiceFnID").css("display", "none");
    },
  },
  computed: {
    ...mapState(["title","content"])
  },
};
</script>

<style scoped>
.ServiceFnID {
  width: 100%;
  height: 15rem;
  overflow: hidden;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}
.heared {
  width: 100%;
  background-color: rgb(0, 146, 232);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.top1 {
  margin: 0 auto;
  width: 100%;
  height: 0.5rem;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
}
.top1 :nth-child(1){
  font-size: 0.25rem;
}
.top1 :nth-child(2){
  margin-left: 1rem;
  font-weight: 700;
  font-size: 0.18rem;
}
#dhs {
  animation-duration: 1.5s;
  animation-delay: 0s;
}
.one{
    height: 0.45rem;
}
.p1{
    font-size: 0.2rem;
    margin-top: 0.4rem;
    padding: 0.2rem 0.2rem;
    color: #333;
}
</style>