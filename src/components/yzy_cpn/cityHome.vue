<template>
    <div id="city" class="animated fadeIn">
        <Guess></Guess>
        <Hot></Hot>
        <Group></Group>
      <router-view></router-view>
    </div>
</template>



<script>
import Guess from './guess'
import Hot from './hot'
import Group from './group'
export default {
    name: 'cityHome',
    data() {
        return {
            
        };
    },
    components:{
       Guess,
       Hot,
       Group
   },
  
};
</script>

<style  scoped>
</style>