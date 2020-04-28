<template>
    <div>
    
     <!-- 下面是两种让引入的界面生效的3方法 -->
     <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
     <HelloWorld></HelloWorld>
     <!-- <HelloWorld/> -->
        
    </div>
</template>

<script>

// 如果不是在src\router\index.js路径下引入别的模块，就是vue文件，下面
//下面是引用方法

import HelloWorld from "@/components/HelloWorld.vue";
export default {
    name: "home",
    components: { 
    HelloWorld
    }
};
</script>