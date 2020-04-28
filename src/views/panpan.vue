//每个vue有三个东西组成
// template  script  css  

// 需要有一个父级div
<template>
    <div>
        <p>这里是潘潘啊！</p>
    </div>
</template>

<script>
// 脚本要export出去，才能被主体看见
export default {
    
}
</script>

//这个scoped的意思是样式只在这个文件生效
<style scoped>
p{
    /* 给他一个红色，红红火火，恍恍惚惚 */
    color: crimson; 
}
</style>