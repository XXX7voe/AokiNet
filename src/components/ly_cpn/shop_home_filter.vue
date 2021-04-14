<template>
  <div id="wrap" class="animated fadeIn">
        <div id="head">
          <div @click="shenzhan">{{$store.state.head_text.title}} <span class="el-icon-caret-bottom"></span></div>
          <div @click="shenzhan2">排序 <span class="el-icon-caret-bottom"></span></div>
          <div @click="shenzhan3">筛选 <span class="el-icon-caret-bottom"></span></div>
        </div>
    <div id="fenlei">
        <div>
            <ul>
                <li>
                    <span v-text="firstList.name"></span>
                    <span>&nbsp;{{firstList.count}}&nbsp;</span>
                </li>
                <li v-for="(v,i) in allList" :key="i" @click="changeColor(v,i)">
                    <div>
                        <img :src="image_url[i]" >
                    </div>
                    <span v-text="v.name"></span>
                    <span>&nbsp;{{v.count}}&nbsp;</span>
                    <span class="el-icon-arrow-right"></span>
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li v-for="(v,i) in rightList" @click="rightClick(v)" :key="i">
                    <span v-text="v.name"></span>
                    <span v-text="v.count"></span>
                    <hr>
                </li>
            </ul>
        </div>
    </div>
    <div id="paixu">
        <ul>
            <li v-for="(v,i) in iconDate" :key="i" @click="yesColor(v,i)">
                <i :class="v.icon" :style="{color:v.iconColor}"></i>
                <span v-text="v.title"></span>
                <span v-if="v.isShow" class="el-icon-check"></span>
            </li>
        </ul>
    </div>
    <div id="shaixuan">
        <div>
            <div>配送方式</div>
            <div v-for="(v,i) in sxListOne" :key="i" @click="checkClick(v,i)">
                <i v-if="v.isShow" class="iconfont icon-fengniao"></i>
                <span v-if="!v.isShow" class="el-icon-check" style="font-size:0.23rem;color:rgb(0,146,232)"></span>
                <div v-text="v.text" :style="{color:v.font_color}"></div>
            </div>
        </div>
        <div>
            <div>商家属性(可以多选)</div>
            <div>
                <div class="merchantProperty" @click="checkClick(a,b)" v-for="(a,b) in sxListTwo" :key="b+'b'">
                    <span v-if="a.isShow" key="0" :style="{'color':'#'+a.icon_color,
                    'border':'1px solid #'+a.icon_color,
                    }">{{a.icon_name}}</span>
                    <span v-if="!a.isShow" key="1" class="el-icon-check" style="font-size:0.23rem;color:rgb(0,146,232)"></span>
                    <span v-text="a.name" :style="{color:a.font_color}"></span>
                </div>
            </div>
        </div>
        <div>
            <div>清空</div>
            <div @click="submitClick">确定<span v-if="checkCount>0">({{checkCount}})</span></div>
        </div>
    </div>
        <div id="aaa">
            <shop_home_merchant/>
        </div>
    </div> 
</template>

<script>
import shop_home_merchant from './shop_home_merchant'
import {mapState} from 'vuex';
export default {
    name:"shop_home_filter",
    data() {
        return {
            firstList:{},
            allList:[],
            image_url:[
                "https://fuss10.elemecdn.com/b/ff/533cf9617bd57fe1dfb05603bebcfpng.png",
                "https://fuss10.elemecdn.com/4/35/a7eda7659bac613e524ca7c1ae12epng.png",
                "https://fuss10.elemecdn.com/6/23/5a6fce94bed63a21508f68a72c158png.png",
                "https://fuss10.elemecdn.com/6/55/ac1bfd1e818013a9f099e964f1e9djpeg.jpeg",
                "https://fuss10.elemecdn.com/a/c1/5c5dd59b641bdfdeb822362547fb4png.png",
                "https://fuss10.elemecdn.com/0/e0/7558e305abfb2618ae760142222f9png.png",
                "http://elm.cangdu.org/img/default.jpg",
                "https://fuss10.elemecdn.com/4/82/43703799592368585b23589cf3ba8png.png",
            ],
            checkCount:0,
            sxListOne:[],
            sxListTwo:[],
            ids:[],
            isHeight:false,
            isHeight2:false,
            isHeight3:false,
            rightList:[],
            restaurant:{},
            iconDate:[
                {icon:"iconfont icon-20laihui",title:"智能排序",iconColor:"rgb(40,152,207)",isShow:false,id:4},
                {icon:"iconfont icon-juli",title:"距离最近",iconColor:"rgb(40,152,207)",isShow:false,id:5},
                {icon:"iconfont icon-huohua",title:"销量最高",iconColor:"rgb(255,145,145)",isShow:false,id:6},
                {icon:"iconfont icon-qianjinrongzhifu",title:"起送价最低",iconColor:"rgb(247,208,111)",isShow:false,id:1},
                {icon:"iconfont icon-shijian",title:"配送速度最快",iconColor:"rgb(194,242,238)",isShow:false,id:2},
                {icon:"iconfont icon-stars-lines",title:"评分最高",iconColor:"rgb(247,208,111)",isShow:false,id:3},
            ],
            sortV:{}
        }
    },
    computed:{
        ...mapState(["cityObj"])
    },
    methods:{
        changeColor(v,i){
            //更改右侧列表
            this.restaurant = v;
            this.rightList = v.sub_categories.splice(1);
            //更改颜色
            let lis = document.querySelectorAll("#fenlei li");
            for(let j=1;j<lis.length;j++){
                lis[j].style.backgroundColor = "";
            }
            lis[i+1].style.backgroundColor = "#fff";
        },
        shenzhan(){ 
             if(document.getElementById("paixu").offsetHeight > 0){
                document.getElementById("paixu").style.height = '0';
                this.isHeight2 = !this.isHeight2;
            }
            if(document.getElementById("shaixuan").offsetHeight > 0){
                document.getElementById("shaixuan").style.height = '0';
                this.isHeight3 = !this.isHeight3;
            }
          if(this.isHeight)
               document.getElementById("fenlei").style.height = '0';
          else
               document.getElementById("fenlei").style.height = '415px';
          this.isHeight = !this.isHeight;
        },
        shenzhan2(){
            if(document.getElementById("fenlei").offsetHeight > 0){
                document.getElementById("fenlei").style.height = '0';
                this.isHeight = !this.isHeight;
            }
            if(document.getElementById("shaixuan").offsetHeight > 0){
                document.getElementById("shaixuan").style.height = '0';
                this.isHeight3 = !this.isHeight3;
            }
          if(this.isHeight2)
               document.getElementById("paixu").style.height = '0';
          else
               document.getElementById("paixu").style.height = '3.53rem';
          this.isHeight2 = !this.isHeight2;
        },
        shenzhan3(){
            let fenlei = document.getElementById("fenlei");
            let paixu = document.getElementById("paixu");
            if(fenlei.offsetHeight > 0){
                fenlei.style.height = "0";
                this.isHeight = !this.isHeight;
            }
            if(paixu.offsetHeight > 0){
                paixu.style.height = "0";
                this.isHeight2 = !this.isHeight2;
            }
            if(this.isHeight3)
               document.getElementById("shaixuan").style.height = '0';
            else
               document.getElementById("shaixuan").style.height = '2.7rem';
            this.isHeight3 = !this.isHeight3;
        },
        rightClick(v){
            this.sortV = v;
            this.shenzhan();
            this.$request({
                url:"/shopping/restaurants?latitude="+this.cityObj.latitude+"&longitude="+this.cityObj.longitude+"&offset=0&limit=20&extras[]=activities&keyword="+this.restaurant.id+"&restaurant_category_id="+v.id+"&restaurant_category_ids[]="+v.id+"&order_by=null&delivery_mode[]=null",
            }).then(res => {
                this.$store.commit("setMerchant_list",res)
            })
            this.$store.commit({
                type:"setHeadText",
                query:{
                    iconClass:"el-icon-arrow-left",
                    title:v.name,
                    isShow:"hidden"
                }
            })
        },
        yesColor(v,i){
            //更改排序窗口的高度
            this.shenzhan2()
            let titles = document.querySelectorAll("#paixu li>span:nth-of-type(1)");
            for(let j = 0;j<this.iconDate.length;j++){
                this.iconDate[j].isShow = false;
                titles[j].style.color = "gray";
            }
            this.iconDate[i].isShow = true;
            titles[i].style.color = "rgb(0,146,232)";
            //处理排序数据
            this.$request({
                url:"/shopping/restaurants?latitude="+this.cityObj.latitude+"&longitude="+this.cityObj.longitude+"&restaurant_category_id="+this.sortV.id+"&restaurant_category_ids[]="+this.sortV.id+"&order_by="+v.id+""
            }).then(res => {
                this.$store.commit("setMerchant_list",res)
            })
        },
        checkClick(v,i){
            if(v.isShow){
                this.checkCount++; 
                 v.font_color = "rgb(0,146,232)";
                //  for(let i=0;i<this.ids.length;i++){
                //     if(this.ids[i] != v.id)
                //          this.ids.push(v.id);
                //  }
            }else{
                this.checkCount--;
                v.font_color = "black";
                // for(let i=0;i<this.ids.length;i++){
                //     if(this.ids[i] == v.id)
                //          this.ids.splice(i,0);
                //  }
            }
            console.log(this.ids)
            v.isShow = !v.isShow;
            this.$forceUpdate();
        },
        submitClick(){
          document.getElementById("shaixuan").style.height = '0';
          this.isHeight3 = !this.isHeight3;
          this.$request({
                url:"/shopping/restaurants?latitude="+this.cityObj.latitude+"&longitude="+this.longitude+"&restaurant_category_ids="+this.ids+""
            }).then(res => {
                this.$store.commit("setMerchant_list",res)
            })
        }
    },
    created(){
        this.$request({
            url:"/shopping/v2/restaurant/category"
        }).then(res => {
            this.firstList = res[0];
            this.allList = res.splice(1);
            this.rightList =this.allList[this.allList.length-1].sub_categories.splice(1);
            //设置餐馆信息对象
            this.restaurant = this.allList[this.allList.length-1];
            this.sortV = this.rightList[this.rightList.length-1];
        })
        //请求筛选数据
        this.$request({
            url:"/shopping/v1/restaurants/delivery_modes"
        }).then(res => {
            this.sxListOne = res;
            for(let i = 0;i < this.sxListOne.length; i++){
                this.sxListOne[i].font_color = "black";
                this.sxListOne[i].isShow = true;
            }
        })
        this.$request({
            url:"/shopping/v1/restaurants/activity_attributes"
        }).then(res => {
            this.sxListTwo = res;
            for(let i = 0;i < this.sxListTwo.length; i++){
                this.sxListTwo[i].font_color = "black";
                this.sxListTwo[i].isShow = true;
            }
        })
    },
    components:{
        shop_home_merchant
    }
}
</script>

<style scoped>
#aaa{
    width: 100%;
    /* margin-top: 11rem; */
    position: absolute;
    top: 0.4rem;
    left: 0;  
}
#head_fenlei{
    width: 100%;
    /* position: fixed;
    top: 0.48rem; */
}
img{
    width: 100%;
}
#wrap{
    width: 100%;
    margin-top: 0.45rem;
    background-color: #fff;
}
#head{
    width: 100%;
    height: 0.38rem;
    background-color: #fff;
    display: flex;
    justify-content: row;
    align-items: center;
    border-bottom:  0.5px solid rgba(204,204,204,0.5);
}
#head>div{
    width: 33.333%;
    height: 0.35rem;
    text-align: center;
    border-right: 0.5px solid rgba(204,204,204,0.5);
    line-height: 0.35rem;
    z-index: 10;
    background-color: #fff;
}
#head>div:nth-of-type(1){
    position: fixed;
}
#head>div:nth-of-type(2){
    position: fixed;
    left: 33.33%;
}
#head>div:nth-of-type(3){
    position: fixed;
    right: 0;
}
#fenlei{
    width: 100%;
    height: 0px;  /**415 */
    background-color: #fff;
    overflow: hidden; 
    display: flex;
    justify-content: row;
    transition: all .3s;
    position: fixed;
    z-index: 1;
}
#fenlei>div:nth-of-type(1){
    width: 48.5%;
    height: 100%;
    background-color: rgb(241,241,241);
}
#fenlei>div:nth-of-type(1) li{
    width: 100%;
    height: 0.42rem;
    position: relative;
    overflow: hidden;
}
#fenlei>div:nth-of-type(1) li:nth-of-type(1)>span:nth-of-type(1){
    line-height: 0.42rem;
    margin-left: 0.08rem;
    font-size: 0.113rem;
}
#fenlei>div:nth-of-type(1) li:nth-of-type(1)>span:nth-of-type(2){
    display: inline-block;
    background-color: rgb(204,204,204);
    margin-left: 0.73rem;
    font-size: 0.12rem;
    text-align: center;
    border-radius: 0.12rem;
    letter-spacing: 0.002rem;
    color: #fff;
}
#fenlei>div:nth-of-type(1) li>div{
    width: 0.18rem;
    height: 0.2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.09rem;
}   
#fenlei>div:nth-of-type(1) li:nth-of-type(n+2)>span{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
#fenlei>div:nth-of-type(1) li:nth-of-type(n+2)>span:nth-of-type(1){
    font-size: 0.113rem;
    left: 0.37rem;
}
#fenlei>div:nth-of-type(1) li:nth-of-type(n+2)>span:nth-of-type(2){
    display: inline-block;
    background-color: rgb(204,204,204);
    font-size: 0.12rem;
    text-align: center;
    border-radius: 0.12rem;
    letter-spacing: 0.002rem;
    color: #fff;
    right: 0.27rem;  
}
#fenlei>div:nth-of-type(1) li:nth-of-type(n+2)>span:nth-of-type(3){
    color:gray;
    right: 0.09rem;
    margin-top: 0.01rem;
    font-size: 0.1rem;
}
#fenlei>div:nth-of-type(2){
    width: 51.5%;
    height: 415px;
    background-color: #fff;
    border-bottom: 1px solid #fff;
}
#fenlei>div:nth-of-type(2) li{
    width: 100%;
    height: 0.43rem;
    background-color: #fff;
    position: relative;

}
#fenlei>div:nth-of-type(2) li>span:nth-of-type(1){
    line-height: 0.4rem;
    margin-left: .1rem;
}
#fenlei>div:nth-of-type(2) li>span:nth-of-type(2){
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.13rem;
}
#fenlei>div:nth-of-type(2) li>hr{
    width: 90%;
    background-color:#fff;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
#paixu{
    width: 100%;
    height: 0;
    background-color: #fff;
    overflow: hidden;
    transition: all .3s;
    position: fixed;
    z-index: 1;
}
#paixu ul{width:100%;}
#paixu li{
    width: 100%;
     background-color: #fff;
     height:0.586rem;
     margin-left: 0.5rem;
     position: relative;
     border-bottom: 1px solid lightgray;
}
#paixu li>span:nth-of-type(1){
    font-size: 0.124rem;
    line-height: 0.586rem;
    margin-left: 0.08rem;
    color: gray;
}
#paixu li>span:nth-of-type(2){
    font-size: 0.2rem;
    font-weight: bold;
    line-height: 0.52rem;
    margin-left: 0.08rem;
    color: rgb(0,146,232);
    float: right;
    margin-right: 0.63rem;
}
#paixu i{
    font-size: 0.16rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -0.22rem;
}
#shaixuan{
    width: 100%;
    height: 0;   /**2.7 */
    background-color: #fff;
    overflow: hidden;
    transition: all .3s;
    position: fixed;
    z-index: 1;
}
#shaixuan>div:nth-of-type(1)>div:nth-of-type(1){
    font-size: 0.1rem;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
}
#shaixuan>div:nth-of-type(1)>div:nth-of-type(2){
    display: inline-block;
    border: 1px solid rgb(248,248,248);
    width:1.07rem;
    height: 0.35rem;
    display: flex;
    justify-content: row;
    line-height: 0.35rem;
    border-radius:5px ;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
}
#shaixuan>div:nth-of-type(1)>div:nth-of-type(2)>i{
    font-size: 0.2rem;
    color: rgb(54,124,186);
}
#shaixuan>div:nth-of-type(2)>div:nth-of-type(1){
    font-size: 0.1rem;
    margin-left: 0.1rem;
    margin-top: 0.2rem;
}
#shaixuan>div:nth-of-type(2)>div:nth-of-type(2){
    width: 92%;
    /* height: 0.7rem; */
    margin: 0.1rem auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.merchantProperty{
    width:1.07rem;
    height: 0.35rem;
    line-height: 0.35rem;
    margin-bottom: 0.1rem;
    border: 1px solid rgb(248,248,248);
}
.merchantProperty>span:nth-of-type(1){
    display: inline-block;
    width: 0.21rem;
    height: 0.21rem;
    border-radius: 5px;
    text-align: center;
    line-height: 0.21rem;
    margin-left: 0.05rem;
}
.merchantProperty>span:nth-of-type(2){
    font-size: 0.13rem;
}
#shaixuan>div:nth-of-type(3){
    margin-top: -0.05rem;
    width: 100%;
    height: 0.53rem;
    background-color: rgb(241,241,241);
    display: flex;
    justify-content: space-around;
    align-items: center;
}
#shaixuan>div:nth-of-type(3)>div{
    width: 1.74rem;
    height: 0.4rem;
    border-radius:8px;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.4rem;
}
#shaixuan>div:nth-of-type(3)>div:nth-of-type(1){
    background-color: #fff;
}
#shaixuan>div:nth-of-type(3)>div:nth-of-type(2){
    background-color: rgb(0,212,125);
    color: #fff;
}
</style>