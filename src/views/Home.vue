<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
//这个是组件时新引进来的，要export出去，这样才能被别人看见。
export default {
  //这个name貌似去掉也对其他没有影响，不知道是不是没用引用的原因
   name: "Home",
  components: {
    HelloWorld
  }
};
</script>
