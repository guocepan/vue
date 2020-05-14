import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pan from "../views/panpan.vue";
// import LearCss from "@/styles/css.vue";
// import axios from 'axios'
// Vue.use(axios);
// Vue.prototype.axios = axios;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [
  {
    path: "/",
    redirect: "Pan"
  },

  {
    path: "/Pan",
    name: "Pan",
    component: Pan
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  // {
  //   path: "/l",
  //   name: "l",
  //   component: LearCss
  // }
];
// 直接调用构造函数进行初始化  相当于  const router = new VueRouter(/*prama*/);
// const router = new VueRouter({
//   mode: "history",
//   //草啊，突然发现base属性一点用没有。
//   base: process.env.BASE_URL11111111, //BASE_URL11111111这个跟帖上去的一样，就为了方便阅读
//   routes
// });

let x = {
  mode: "history",
  base: process.env.BASEURL,
  routes
};
const router = new VueRouter(x);

/*
const router = new VueRouter({
  mode: "history",
  // routes: [
  routes: [

    {
      path: "/",
      redirect:"Pan"    
    },
    
    {
      path:"/Pan",
      name:"Pan",
      component:Pan
    }
  ]
});
*/

export default router;
