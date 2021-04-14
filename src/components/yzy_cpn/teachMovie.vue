<template>
    <div id="teachMovie" class="Fn animated fadeInRight">
        <div id="head" class="Fn animated fadeInLeft">
           <i class="el-icon-arrow-left" @click="back()"></i>
           <span>教我拍大片</span>
        </div>
        <div class="content">
            <img src='http://fuss10.elemecdn.com/5/de/5efc9ee81ceba1ae835b0c2298ba9jpeg.jpeg' class="IMG">
            <p>## 1. 清晰 拍照时持稳手机，避免出现大幅度晃动。将焦点对准食物本身，锁焦后、点击快门。<br /><br /></p>
            <img src="http://fuss10.elemecdn.com/8/89/4920bc3a0a34c0d26a4460ce03157jpeg.jpeg" class="IMG">
            <p>## 2. 光线 尽量选择明亮、柔和的光线，避免强光直射；拍摄时避免身体或器物的阴影遮住食物本身，有条件时，可以用小型手电进行补光，以提高食物质感。<br /><br /></p>
            <img src="http://fuss10.elemecdn.com/4/9b/ca198810b12c8fc57ae562c6fa92cjpeg.jpeg" class="IMG">
            <p>## 3. 构图 构图可以选择通用的三分构图法或中心构图法，如果是拍摄整体食物时，需要考虑食物的完整性；如果拍摄特写时，需要将细节体现清楚。<br /><br /></p>
            <img src="http://fuss10.elemecdn.com/c/3b/958696046787bb467708c8d9a5171jpeg.jpeg" class="IMG">
            <p>## 4.角度 可以选择45度拍摄、90度俯拍或者水平拍摄，一切都看你的心情哦~<br /><br /></p>
            <img src="http://fuss10.elemecdn.com/2/d3/d31b1f81eb853c6042b9c172a514bjpeg.jpeg" class="IMG">
            <p>## 5. 背景 可以选择合适的背景拍摄，例如黑色能体现食物蒸腾的热气，白色让食物更有质感，米色更加温馨等；但背景尽量不要太乱，以免影响整体效果。<br /><br /></p>
            <img src="http://fuss10.elemecdn.com/a/fe/b9716e028917fd81f6c5a99242b6fjpeg.jpeg" class="IMG"> 
            <p>## 6. 细节 餐具的搭配使用、人物的烘托、道具的陪衬等都能使食物更具诱惑力，照片更有氛围。</p>
        </div>
    </div>
</template>

<script>
var str = "![](http://fuss10.elemecdn.com/5/de/5efc9ee81ceba1ae835b0c2298ba9jpeg.jpeg) ## 1. 清晰 拍照时持稳手机，避免出现大幅度晃动。将焦点对准食物本身，锁焦后、点击快门。<br /><br /><br /> ![](http://fuss10.elemecdn.com/8/89/4920bc3a0a34c0d26a4460ce03157jpeg.jpeg) ## 2. 光线 尽量选择明亮、柔和的光线，避免强光直射；拍摄时避免身体或器物的阴影遮住食物本身，有条件时，可以用小型手电进行补光，以提高食物质感。<br /><br /><br /> ![](http://fuss10.elemecdn.com/4/9b/ca198810b12c8fc57ae562c6fa92cjpeg.jpeg) ## 3. 构图 构图可以选择通用的三分构图法或中心构图法，如果是拍摄整体食物时，需要考虑食物的完整性；如果拍摄特写时，需要将细节体现清楚。<br /><br /><br /> ![](http://fuss10.elemecdn.com/c/3b/958696046787bb467708c8d9a5171jpeg.jpeg) ## 4.角度 可以选择45度拍摄、90度俯拍或者水平拍摄，一切都看你的心情哦~<br /><br /><br /> ![](http://fuss10.elemecdn.com/2/d3/d31b1f81eb853c6042b9c172a514bjpeg.jpeg) ## 5. 背景 可以选择合适的背景拍摄，例如黑色能体现食物蒸腾的热气，白色让食物更有质感，米色更加温馨等；但背景尽量不要太乱，以免影响整体效果。<br /><br /><br /> ![](http://fuss10.elemecdn.com/a/fe/b9716e028917fd81f6c5a99242b6fjpeg.jpeg) ## 6. 细节 餐具的搭配使用、人物的烘托、道具的陪衬等都能使食物更具诱惑力，照片更有氛围。"
export default {
    name: 'teachMovie',
    data() {
        return {
            str,
        };
    },
   created(){
       this.gain()
   },
    methods: {
       gain(){
       this.$request({
                url:"/v3/profile/explain",
            }).then(res=>{
                   var arr = [];
                   var reg1 = /\([^\)]+\)/g;
                   str.replace(reg1, function(s,value) {
                   var s2 = s.substring(1,s.length-1);
                   arr.push(s2);//所有图片的路径
                  })
               })
    },
    back(){
        this.$router.back()
    }
    },
};
</script>

<style  scoped>
#head {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.45rem;
}
.el-icon-arrow-left {
  font-size: 0.25rem;
  color: white;
  margin-top: 0.11rem;
}
#head span {
  margin-left: 1.2rem;
  font-size: 0.2rem;
  margin-top: 0.1rem;
  color: white;
}
.content{
    padding: 0.5rem 0.2rem;
}
.IMG{
    width: 100%;
    height: 100%;
}
</style>