<template>
    <div id="historyEnvelope" class="animated fadeIn">
        <div class="head">
            <i class="el-icon-arrow-left" @click="sale()"></i>
            <span>历史红包</span>
        </div>
        <div class="center">
             <ul>
            <li v-for="(v,i) in arrs" :key="i">
            <div>
              <span>￥</span>
              <span>{{ v.amount }}</span>
              <p>{{ v.description_map.sum_condition }}</p >
            </div>
            <div>
              <p>{{ v.name }}</p >
              <p>{{ v.end_date }}</p >
              <span>到期</span>
              <p>{{ v.description_map.phone }}</p >
            </div>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'historyEnvelope',
    data() {
        return {
            arrs:''
        };
    },
    created(){
        this.gain()
    },
    mounted() {
        
    },
    methods: {
        sale(){
            this.$router.back()
        },
        gain(){
            this.$request({
                url:"/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0",
                withCredentials:true,
            }).then(res=>{
               console.log(res);
               this.arrs = res
            })
        }
    },
};
</script>

<style  scoped>
#historyEnvelope{
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
.head span{
    margin-left: 1.2rem;
    font-size: 0.2rem;
    margin-top: 0.1rem;
    color: white;
    font-weight: 700;
}
 ul{
     margin-top: 0.7rem;
     margin-left: 0.15rem;
 }
 ul li { 
    width:95%;
    height:1rem;
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAAAXNSR0IArs4c6QAAAHtJREFUKBVjvHv37n8GKgImKpoFNmoYGcjIyAgK6+VA2o6FhUWInZ1dlomJKQDIP40cbIzERApQ01+g5jAFBYV1yJpB7P///zPev39/IpDOBfGJDcNGbIaBDAC5XFFRsQBIHwDxCRoIVPidmZl5CkgxLgBU8w/owl6QPABvmyDiDQUF7gAAAABJRU5ErkJggg==) repeat-x;
    border-radius:0.1rem;
    background-color:white;
    margin-top:0.15rem;
    display:flex;
    justify-content:space-between;
}
 ul li div {
    box-sizing:border-box;
    text-align:center;
    padding-top:0.2rem;
    border-left:none;
    border-right:none;
    border-bottom:none;
}

ul li div:nth-of-type(1) {
  width: 30%;
  height: 1rem;
}
ul li div:nth-of-type(1) span {
  color:#CCCCCC;
  font-size: 0.15rem;
}
 ul li div:nth-of-type(1) span:nth-of-type(1) {
  font-weight: bold;
  margin-left: -0.4rem;
}
 ul li div:nth-of-type(1) span:nth-of-type(2) {
  font-size: 0.35rem;
}
ul li div:nth-of-type(1) p {
  font-size: 0.15rem;
  color:#999999;
}
ul li div:nth-of-type(2) {
  width:20%;
  text-align: left;
}
ul li div:nth-of-type(2) span {
  font-size: 0.12rem;
  color:#999999;
}
ul li div:nth-of-type(2) p:nth-of-type(2) {
  display: inline-block;
}
ul li div:nth-of-type(2) p:nth-of-type(2),
ul li div:nth-of-type(2) p:nth-of-type(3) {
  font-size: 0.12rem;
  color:#999999;
}
ul li div:nth-of-type(2) {
  font-size: 0.15rem;
  width:50%;
  height:1rem;
}
</style>