<template>
<div id="login">
    <div class="loginWrap">
        <ul class="menuTab">
            <!-- 在li里放循环的位置影响了渲染，放在ul就有了两个ul》li   放li里面就直接两个li -->
          <li class="current"  v-for="item in menutab" :key="item.id">{{item.text}}</li>
        </ul>
            <el-input v-model="input" placeholder="请输入内容"></el-input>

        

    </div>

</div>
    
</template>
<script>
export default {
    name:"loginWrap",
    data(){
       return {
        menutab:[
            {text:"登陆"},
            {text:"注册"}
        ],
        input:''

       }
    }

}
</script>
<style lang="scss" scoped>
.loginWrap{
    width: 329px;
    margin: auto;   //居中
    //  background-color:gold;
  
}
.menuTab{
    text-align: center;  //让文字居中
    li{
         display: inline-block;   //将块元素变成内行元素
        width: 88px;
        line-height: 36px;  //文字行高
        font-size: 14px;
        color: #fff;
        border-radius: 2px;   //li圆角度 
        cursor: pointer;  // 鼠标放上面变成手指
    }
    .current{  //被选中时背景加深透明
        background-color: rgba(0,0,0,.1);
    }
}
</style>