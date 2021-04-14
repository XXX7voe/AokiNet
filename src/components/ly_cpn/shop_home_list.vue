<template>
  <div id="wrap" class="animated fadeIn">
      <shop_home_list_image/>
        <div class="nearby">
            <span class="el-icon-s-shop"></span><span>  附近商家</span>
        </div>
        <shop_home_merchant/>
  </div>
</template>

<script>
import shop_home_list_image from './shop_home_list_image';
import shop_home_merchant from './shop_home_merchant'
export default {
    name:"shop_home_list",
    components:{
        shop_home_list_image,
        shop_home_merchant
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
.nearby{
    height: 0.3rem;
    background-color: #fff;
    margin-top: 0.1rem;
    font-size: 0.12rem;
    text-indent: 0.05rem;
    color: rgb(153,153,153);
    line-height: 0.25rem;
    padding-top: 0.05rem;
}
.nearby>span:nth-of-type(1){
    font-size: 0.15rem;
}
</style>