import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [
  {
    // 这里说的是，当进入根目录就会跳到about这个界面，about是下面path的路径
    path: "/",
    redirect:"/login"
  },
 
  {
    path:"/login",
    name:"Login",
    component:()=>
    import("../views/Login/index.vue")
  },
  // {
  //   path:"/home",
  //   name:"Home",
  //   component:() =>
  //   import("../views/Home.vue")
  // }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
