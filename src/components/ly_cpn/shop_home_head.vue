<template>
  <div id="head">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"shop_home_head"
}
</script>

<style scoped>
#head{
    width: 100%;
    height: 0.45rem;
    background-color: rgb(0,146,232);
    position: fixed;
    top: 0;
    z-index: 3;
}
</style>