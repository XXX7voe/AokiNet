<template>
  <div id="wrap3" class="animated fadeIn">
    <slot></slot>
    <div>
      <img :src="imgs[num]" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name:"loading",
    data() {
      return {
        imgs:[
          require('../../assets/imgs/juzi.png'),
          require('../../assets/imgs/hua.png'),
          require('../../assets/imgs/jitui.png'),
          require('../../assets/imgs/hanbao.png'),
          require('../../assets/imgs/xigua.png')
        ],
        num:0
      }
    },
    mounted() {
      setInterval(() => {
        this.num = Math.floor(Math.random() * (this.imgs.length))
      }, 1000);
    },
}
</script>

<style scoped>
img{
  width: 100%;
}
#wrap3{
  position: absolute;
  width:100%;
  height: 7rem;
  background-color: #fff;
  z-index: 10;
}
#wrap3>div:nth-of-type(1){
  width: 0.7rem;
  height: 0.7rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  animation: playing 1.2s ease-in-out infinite; 
  z-index: 10;
}
#wrap3>div:nth-of-type(1)>img{
  width: 0.7rem;
  height: 0.7rem;
}
@keyframes playing{
  0%{
    top: 50%;
  }
  50%{
    top: 45%;
  }
  100%{
    top: 50%;
  }
}
</style>