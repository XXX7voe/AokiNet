<template>
    <div id="Edd_address" class="animated fadeIn">
         <div class="head">
            <i class="el-icon-arrow-left" @click="userInFormations()"></i>
            <span>编辑地址</span>
            <span @click="check" v-text="over?'编辑':'完成'"></span>
        </div>
        <div>
           <ul>
               <li v-for="(v,i) in arr" :key="i">
                   <div>
                       <p>{{v.address}}</p>
                       <p>{{v.phone}}</p>
                   </div>
                   <div v-show="!over" @click="delet(i)">X</div>
               </li>
           </ul>
        </div>
        <div class="Add" @click="AddAddress()">
            <span>新增地址</span>
            <i class="el-icon-arrow-right"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Edd_address',
    data() {
        return {
            over:true,
            arr:[]
        };
    },
   created(){
       this.getAdd()
   },
    methods: {
        delet(a){
             let api ='https://elm.cangdu.org/v1/users/'+this.$cookies.get('countData').id+'/addresses/'+ this.arr[a].id;
            this.$http({
                url:api,
                method:'DELETE',
                data:{
                  
                },
                withCredentials:true, 
            }).then(res=>{
                console.log(res)
                if(res.data.status == 1){
                    this.arr.splice(a,1);
                }
            })
        },
        check(){
            this.over = !this.over
        },
        userInFormations(){
            this.$router.push({
                name:'userInFormations'
            })
        },
        AddAddress(){
            this.$router.push({
                name:'AddAddress'
            })
        },
        getAdd(){
            this.$request({
                url:'/v1/users/'+this.$cookies.get('countData').id+'/addresses',
            }).then(res=>{
                console.log(res)
               this.arr = res;
            })
        },
    },
};
</script>

<style  scoped>
#Edd_address{
    background-color: rgb(245,245,245);
    height: 6.4rem;
}
.head{
   background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.45rem;
}
.el-icon-arrow-left{
    font-size: 0.25rem;
    color: white;
    margin-top: 0.11rem;
}
.head :nth-child(2){
    margin-left: 1.2rem;
    font-size: 0.2rem;
    margin-top: 0.1rem;
    color: white;
}
.head :nth-child(3){
    margin-left: 0.9rem;
    font-size: 0.16rem;
    margin-top: 0.1rem;
    color: white;
}
.infor{
    position: relative;
    top: 0.6rem;
    height: 0.5rem;
    background-color: #FFF8C4;
    display: none;
}
.infor p{
    margin-top: 0.1rem;
    margin-left: 0.2rem;
}
.Add{
    position: relative;
    top: 0.7rem;
    height: 0.5rem;
    background-color: rgb(255,255,255);
    border-bottom: 0.01rem solid #d9d9d9;
    border-top: 0.01rem solid #d9d9d9;
}
.Add span{
    position: absolute;
    top: 0.15rem;
    left: 0.15rem;
    font-size: 0.15rem;
}
.el-icon-arrow-right{
    position: absolute;
    left: 3.4rem;
    font-size: 0.2rem;
    top: 0.15rem;
}
ul>li:nth-child(1){
    background-color: #FFF8C3;
    margin-top: 0.5rem;
}
ul>li{
    height: 0.5rem;
    padding: 0.1rem 0.1rem;
    background-color: #FFF8C3;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.01rem solid rgb(245,245,245);
}
ul>li>div:nth-child(2){
    margin-top: 0.13rem;
    margin-right: 0.2rem;
}
</style>