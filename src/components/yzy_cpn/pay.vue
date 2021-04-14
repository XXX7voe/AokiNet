<template>
    <div id="pay" class="animated fadeIn">
        <div class="head">
            <i class="el-icon-arrow-left" @click="memberCenter()"></i>
            <span>在线支付</span>
        </div>
        <div class="title">
            <p>支付剩余时间</p>
            <p>{{hour}}:{{minute}}:{{second}}</p>
        </div>
        <div class="payTpye">
            选择支付方式
        </div>
        <div class="ZFBapp">
            <img class="zfb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAIAAABsNpe/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMjgzMDhGREVFQUIxMUU2OUE4QjgyRUYwMDgxQTc4QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMjgzMDhGRUVFQUIxMUU2OUE4QjgyRUYwMDgxQTc4QSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQyODMwOEZCRUVBQjExRTY5QThCODJFRjAwODFBNzhBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQyODMwOEZDRUVBQjExRTY5QThCODJFRjAwODFBNzhBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+i3VM1AAACXJJREFU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" alt="">
            <span>支付宝</span>
        </div>
         <div class="VXapp">
            <van-icon name="wechat-pay" class="vx" />
            <span>微信</span>
        </div>
            <button class="ConfirmThePayment" @click="gain()">确认支付</button>
        <div id="alert" v-show="show" class="animated  bounceIn">
            <i class="el-icon-warning-outline"></i>
            <p>{{message}}</p>
            <button class="Alertbtn" @click="SHOW()">确认</button>
        </div>
      <van-checkbox-group v-model="result" :max="1">
         <van-checkbox name="a" class="success" checked-color="#4cd964" ></van-checkbox>
         <van-checkbox name="b" class="fail" checked-color="#4cd964"></van-checkbox>
      </van-checkbox-group>
    </div>
</template>

<script>
export default {
    name: 'pay',
    data() {
        return {
             hours: 0,
             minutes: 15,
             seconds: 0,
             show:true,
             message:"当前环境无法支付，请打开官方APP进行付款",
             result:[]
        };
    },
    mounted() {
        this.add();
    },
    methods: {
        gain(){
            // this.message = "当前环境无法支付，请打开官方APP进行付款";
            this.show = 1
        },
        memberCenter(){
            this.$router.back();
        },
         SHOW(){
            this.show = false;
        },
        num(n) {
            return n < 10 ? '0' + n : '' + n
            },
        // 倒计时函数
        add() {
            let time = window.setInterval( ()=> {
                if (this.hours !== 0 && this.minutes === 0 && this.seconds === 0) {
                    this.hours -= 1;
                    this.minutes = 59;
                    this.seconds = 59;
                } else if (this.hours === 0 && this.minutes !== 0 && this.seconds ===0) {
                            this.minutes -= 1;
                            this.seconds = 59;
                        } else if (this.hours === 0 && this.minutes === 0 && this.seconds ===
                            0) {
                            this.seconds = 0
                            window.clearInterval(time)
                        } else if (this.hours !== 0 && this.minutes !== 0 && this.seconds ===
                            0) {
                            this.minutes -= 1;
                            this.seconds = 59;
                        } else {
                            this.seconds -= 1;
                        }
                    }, 1000)
                }
            },
               watch: {
                // 监听数值变化
                second: {
                    handler(newVal) {
                        this.num(newVal)
                    }
                },
                minute: {
                    handler(newVal) {
                        this.num(newVal)
                    }
                },
                hour: {
                    handler(newVal) {
                        this.num(newVal)
                    }
                }
            },
            computed: {
                // 初始化数据
                second() {
                    return this.num(this.seconds)
                },
                minute() {
                    return this.num(this.minutes)
                },
                hour() {
                    return this.num(this.hours)
                }
            }

};
</script>

<style  scoped>
#pay{
    background-color: #F5F5F5;
    height: 6.4rem;
}
.head{
    background-color: #3190e8;
    width: 100%;
    height: 0.5rem;
    position: relative;
    
}
.el-icon-arrow-left{
    font-size: 0.25rem;
    margin-top: 0.11rem;
    color: white;
}
.head span{
    font-size: 0.2rem;
    margin-left: 1.2rem;
    color: white;
    font-weight: 700;
}
.title{
    height: 1.5rem;
    background-color: rgb(255,255,255);
}
.title :nth-child(1){
    text-align: center;
    line-height: 0.8rem;
}
.title :nth-child(2){
    font-size: 0.4rem;
    margin-left: 1.1rem;
    margin-top: -0.2rem;
    color: #333;
}
.payTpye{
    margin-left: 0.2rem;
    margin-top: 0.1rem;
}
.ZFBapp{
    margin-top: 0.1rem;
    height: 0.8rem;
    background-color: rgb(255,255,255);
    border-bottom: 0.01rem solid #f5f5f5;
    position: relative;
}
.zfb{
    width: 0.4rem;
    margin-left: 0.15rem;
    margin-top: 0.2rem;
}

.ZFBapp span{
    position: absolute;
    left: 0.7rem;
    top: 0.3rem;
}
 .success{
    color: #4cd964;
    font-size: 0.22rem;
    position: absolute;
    left: 3.35rem;
    top: 2.7rem;
}

.vx{
    color: #00C450;
    font-size: 0.4rem;
    margin-left: 0.15rem;
    margin-top: 0.2rem;
}
.VXapp{
    margin-top: 0.1rem;
    height: 0.8rem;
    background-color: rgb(255,255,255);
    border-bottom: 0.01rem solid #f5f5f5;
    position: relative;
}
.VXapp span{
    position: absolute;
    left: 0.7rem;
    top: 0.3rem;
}
.fail{
    color: #4cd964;
    font-size: 0.22rem;
    position: absolute;
    left: 3.35rem;
    top: 3.6rem;
}
.ConfirmThePayment{
    background-color: #4cd964;
    font-size: 0.2rem;
    color: #fff;
    text-align: center;
    line-height: 0.5rem;
    border-radius: 0.05rem;
    margin-top: .4rem;
    margin-left: .2rem;
    font-weight: 700;
    width: 90%;
    border: 0;
    outline: none;
}
#alert{
    position: relative;
    height: 2rem;
    width: 75%;
    top: -2rem;
    left: 0.5rem;
    background-color: #FFFFFF;
    display: block;
}
.el-icon-warning-outline{
    font-size: 1.1rem;
    position: absolute;
    left: 0.8rem;
    top: 0.1rem;
    color: #f8cb86;
}
#alert p{
    position: absolute;
    top: 1.2rem;
    left: 0.35rem;
    color: #333;
    font-size: 0.1rem;
}
.Alertbtn{
    font-size: 0.2rem;
    color: #fff;
    font-weight: 700;
    margin-top: 1.57rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 0.45rem;
    outline: none;
    border: 0;
    border-bottom-left-radius: 0.025rem;
    border-bottom-right-radius: 0.025rem;
}
</style>