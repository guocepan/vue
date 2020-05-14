<template>
  <div id="learnCss">
    <div class="mainWindow">
      <ul>
        <li class="mainBody" v-for="list in list" :key="list.id">
          {{ list.content }}{{ list.stranslate }}
        </li>
        <input v-bind:type="smit" value="按钮" />
        <p v-bind:class="{ color: color1 }">这是红色</p>
        <span>
          每秒跳一下：
          <h1 class="inline">{{ count }}</h1>
          <!-- disabled 是一个特别的开关,在禁用时外形还在，就是变灰色，不给选中而已 -->
          <button :disabled="trueOrfalse">{{ count }}</button>
        </span>

        <!--  -->
        <li v-for="(city, rent) in arrage" :key="city.id">{{ rent }}:::</li>
        <!-- <li class="mainBody" v-for="list in list" :key="list.id">{{list.stranslate}}{{list.example}}</li> -->
        <a href="#">3333</a>
      </ul>
      <div id="box">这是一个盒子</div>
      <br />
      <div>
        <a href="#" class="xiegang">经常 </a>
        <a href="#" class="xiegang">经常</a>
        <a href="#" class="xiegang">经常</a>
      </div>
    </div>

    <div class="mainBody1">
      <div class="nav">
        <div class="navTop">
          <div class="navTL">
            品优购欢迎您！
            <i class="iFont iFontAfter colorGreen">
              请登录
            </i>
            <i class="iFont colorRed">注册</i>
          </div>
          <div>
            <ul>
              <li class="navTR "><a href="#">我的订单</a></li>
              <li class="navTR "><a href="#">我的品优购</a></li>
              <li class="navTR "><a href="#">品优购会员</a></li>
              <li class="navTR "><a href="#">企业采购</a></li>
              <li class="navTR "><a href="#">关注品优购</a></li>
              <li class="navTR "><a href="#">客户服务</a></li>
              <li class="navTR "><a href="#">网站导航</a></li>
            </ul>
          </div>
        </div>
        <div class="navMiddle"></div>
      </div>
      <div class="leftBox">
        <p>dadadaddssdadasada</p>
        <ul class="leftBoxLi">
          <li>分辨率：1920*1080(FHD)</li>
          <li>后置摄像头：1200万像素</li>
          <li>前置摄像头：500万像素</li>
          <li>核 数：其他</li>
          <li>频 率：以官网信息为准</li>
          <li>品牌： Apple ♥关注</li>
          <li>商品名称：APPLEiPhone 6s Plus</li>
          <li>商品编号：1861098</li>
          <li>商品毛重：0.51kg</li>
          <li>商品产地：中国大陆</li>
          <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
          <li>系统：苹果（IOS）</li>
          <li>像素：1000-1600万</li>
          <li>机身内存：64GB</li>
        </ul>
      </div>
      <div class="rghtBox"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "#learnCss",
  data() {
    // var ele = document.getElementById('#learnCss');
    // console.dir(ele);
    return {
      arrage: {
        a: "packag",
        b: 203,
        ab: 20,
        av: 20
      },
      smit: "submit",
      color1: true,
      count: 25 * 60,
      trueOrfalse: true,

      list: [
        {
          content: "background-color  ",
          stranslate: " 背景色 ",
          example: "background-image: url('../04.gif') ",
          open: true
        },
        {
          content: "background-repeat  ",
          stranslate: " 背景重复   ",
          example: " ",
          open: true
        },
        {
          content: " background-position ",
          stranslate: " 背景定位   ",
          example: "background-position:center; ",
          open: true
        },
        {
          content: " background-attachment:fixed ",
          stranslate: " 防止这种滚动   ",
          example: " ",
          open: true
        },
        {
          content: " text-indent: 5em ",
          stranslate: " 缩进文本   ",
          example: " ",
          open: true
        },
        {
          content: " text-indent: -5em; ",
          stranslate: "缩进文本    ",
          example: " ",
          open: true
        },
        {
          content: " text-align:center ",
          stranslate: "  水平对齐  ",
          example: " ",
          open: true
        },
        { content: "  ", stranslate: "    ", example: " ", open: true },

        {
          content: "text-align: justify ",
          stranslate:
            " 两端对齐文本中，文本行的左右两端都放在父元素的内边界上 ",
          example: " ",
          open: true
        },
        {
          content: " word-spacing  ",
          stranslate: " 字间隔   ",
          example: " ",
          open: true
        },
        {
          content: "letter-spacing  ",
          stranslate: " 字母间隔   ",
          example: " ",
          open: true
        },
        {
          content: "text-transform   ",
          stranslate: "  字符转换  ",
          example: "text-transform: uppercase ",
          open: true
        },
        {
          content: "text-decoration=line-through  ",
          stranslate: "  文本装饰  ",
          example: " ",
          open: true
        },
        {
          content: "white-space   ",
          stranslate: " 处理空白符   ",
          example: " ",
          open: true
        },
        {
          content: " direction: rtl ",
          stranslate: " 文本方向设置为“从右向左  (测试不出)   ",
          example: " ",
          open: true
        },
        { content: "  ", stranslate: "    ", example: " ", open: true },

        { content: "  ", stranslate: "    ", example: " ", open: true },
        {
          content: " a:link {color:#FF0000;} ",
          stranslate: " 	/* 未被访问的链接 */   ",
          example: " ",
          open: true
        },
        {
          content: "a:visited {color:#00FF00;}  ",
          stranslate: " /* 已被访问的链接 */   ",
          example: " ",
          open: true
        },
        {
          content: " a:hover {color:#FF00FF;} ",
          stranslate: " /* 鼠标指针移动到链接上 */   ",
          example: " ",
          open: true
        },
        {
          content: " a:active {color:#0000FF;} ",
          stranslate: " /* 正在被点击的链接 */   ",
          example: " ",
          open: true
        },
        { content: "  ", stranslate: "    ", example: " ", open: true },
        {
          content: " ul {list-style-type : square} ",
          stranslate: "列表项标志设置为方块    ",
          example: " ",
          open: true
        },
        {
          content: "ul li {list-style-image : url(xxx.gif)}  ",
          stranslate: "  标志使用一个图像  ",
          example: " ",
          open: true
        },
        { content: "  ", stranslate: "    ", example: " ", open: true },
        {
          content: "   margin: 0; ",
          stranslate: "内边距    ",
          example: " ",
          open: true
        },
        {
          content: " padding: 0; ",
          stranslate: "  外边距  ",
          example: " ",
          open: true
        },
        {
          content: " border : ",
          stranslate: " 边框。    ",
          example: " ",
          open: true
        },
        {
          content: " border-top-style ",
          stranslate: "    ",
          example: " ",
          open: true
        },
        {
          content: "border-right-style  ",
          stranslate: "    ",
          example: " ",
          open: true
        },
        {
          content: " border-bottom-style ",
          stranslate: "    ",
          example: " ",
          open: true
        },
        {
          content: "border-left-style  ",
          stranslate: "    ",
          example: " ",
          open: true
        },
        {
          content: " border-width: 5px ",
          stranslate: " 边框的宽度   ",
          example: " ",
          open: true
        },
        {
          content: " border-right-width:6px ",
          stranslate: "    ",
          example: " ",
          open: true
        },
        { content: "  ", stranslate: "    ", example: " ", open: true },
        {
          content: " position 子绝父相。就是父亲是宰相，儿子绝了 ",
          stranslate: "    ",
          example: " ",
          open: true
        },
        { content: "  ", stranslate: "    ", example: " ", open: true },
        { content: "  ", stranslate: "    ", example: " ", open: true },
        { content: "  ", stranslate: "    ", example: " ", open: true },
        { content: "  ", stranslate: "    ", example: " ", open: true },
        { content: "  ", stranslate: "    ", example: " ", open: true },
        { content: "  ", stranslate: "    ", example: " ", open: true },
        { content: "  ", stranslate: "    ", example: " ", open: true },
        { content: "  ", stranslate: "    ", example: " ", open: true },
        { content: "  ", stranslate: "    ", example: " ", open: true }
      ],
      message: "这个地方缩进了-5rem"
    };
  }, //data  end!
  created() {
    // 下面的函数能进行跳秒
    setInterval(() => {
      this.count--;

      // 现在的值等于上一个值得相反
      this.trueOrfalse = !this.trueOrfalse;
      if (this.count == 0) {
        this.count = 10;
      }
    }, 1000);
  }
};
</script>
<style lang="scss" scoped>
#learnCss {
  width: 100%;
  height: 100vh;
  background-color: #d8cae3;
}
.mainWindow {
  width: 1000px;
  // height: 2000px;
  margin: 0 auto;
  background-color: aquamarine;
  //  background-image:url('E:/git/learn/vue/src/assets/leiling.png');
  // background-image: url("../assets/02.png");
  background-position: -75% 50%; //位置
  // background-attachment:fixed;  // 背景固定，不随网页滚动滚动
  background-repeat: no-repeat; //不重复
  overflow: hidden;
}
li {
  //  padding-left: 5em;  //防止出现在外面
  //  text-indent:20em;
  position: relative;
  left: 250px;
  cursor: pointer;
  text-align: justify center;
  // text-align: ;;
  text-decoration: blink;
  //  white-space:pre;
  direction: rtl；; //文本方向
}

// a:link {color:#FF0000;}		/* 未被访问的链接 */
// a:visited {color:#00FF00;}	/* 已被访问的链接 */
// a:hover {color:#FF00FF;}	/* 鼠标指针移动到链接上 */
// a:active {color:#0000FF;}	/* 正在被点击的链接 */
// ul li {list-style-image : url('../assets/02.png')}
// li {list-style : url('../assets/02.png') square inside}

//实现了一个鼠标经过就给一个边框，鼠标没有在上面就没有边框
a:link,
a:visited {
  border-style: solid;
  border-width: 5px;
  border-color: transparent;
}
a:hover {
  border-color: gray;
}

#box {
  // position:absolute;
  position: relative;
  // left:px;
  text-align: center;
  width: 90px;
  height: 90px;
  // float: right;
  // margin: 10px;
  // padding: 5px;
  background-color: gray;
}
#box1 {
  // position: absolute;
  position: relative;
  // float: left;

  text-align: center;
  width: 70px;
  height: 70px;
  // margin: 10px;
  // padding: 5px;
  background-color: green;
}
#box2 {
  // position: absolute;
  position: relative;

  text-align: center;
  width: 70px;
  height: 70px;
  // margin: 10px;
  // padding: 5px;
  background-color: red;
}

.color {
  color: red;
}
h1 {
  color: red;
  font-size: 5em;
  cursor: pointer;
}
.inline {
  position: fixed;
  top: 250px;
  // margin:0 auto;
  display: block;
  text-align: center;
}
.xiegang:after {
  content: "/";
  width: 12px;
  color: #575757;
  display: inline-block;
  margin: 0 15px;
  transform: rotate(25deg) scale(1.2);
  text-align: center;
}

//导航栏start
.mainBody1 {
  width: 1920px;
  height: 3885px;
  background-color: #f1f1f1;
}
.nav {
  width: 1920px;
  height: 31px;
  background-color: #f1a3a3;
  line-height: 29px;
}
.iFont {
  font-size: 12px;
  cursor: pointer;
}
.iFontAfter::after {
  content: "/";
  font-size: 12px;
  color: gray;
  margin: auto 6px;
}
.colorRed {
  color: red;
}
.colorGreen {
  color: green;
}
.navTR {
  float: right;
}
// 导航栏end

.leftBox {
  width: 500px;
  height: 500px;
  background-color: red;
}
.leftBoxLi li {
  left: 2px;
  top: 10px;
}
.rghtBox {
  position: absolute;
  top: 772px;
  // right: -56px;
  left: 0;
  width: 500px;
  height: 900px;
  background-color: gold;
}
</style>
